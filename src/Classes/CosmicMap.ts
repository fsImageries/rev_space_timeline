import * as THREE from "three"
import { System } from "../Models/System";
import { SystemParams } from "../interfaces";
import SystemObject from "./SystemObject";
import CelestialBase from "./CelestialBase";
import { uuidv4 } from "../helpers/utils";
import Internal3DObject from "./Internal3DObject";
import { World } from "./World";
import { Sun } from "../Models/Sun";
import { Text } from "troika-three-text"

import sunFactory from "../Factories/SunFactory"
import { DEG2RAD } from "three/src/math/MathUtils";
import Constants from "../helpers/Constants";


let LEN_MAT = new THREE.LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: .2
})

let OBJ_MAT = new THREE.LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: .075
})
export class CosmicMap extends System {

    constructor(data: SystemParams) {
        super(data);
    }

    static buildSun(data: { 
        name:string,
        radius: number, 
        hTemp: number, 
        lTemp: number 
    }) {
        return sunFactory({
            name: data.name,
            type: "sun",
            radius: data.radius,
            rotationPeriod: 0,
            orbitalPeriod: 0,
            highTemp: data.hTemp,
            lowTemp: data.lTemp,
            distanceToParent: 1,
            tilt: 0,
            parent: "",
            draw: { radius: 1 }
        })
    }

    static buildLine(p1:THREE.Vector3, p2:THREE.Vector3, mat:THREE.Material) {
        const geom = new THREE.BufferGeometry()
        geom.setFromPoints([p1, p2])
        return new THREE.Line(geom, mat)
    }

    static buildDiskLine(sun:Sun, data:{x:number, y:number, rotY:number}) {
        sun.object.masterGrp.position.x -= data.x
        sun.object.masterGrp.position.y -= data.y
        sun.object.parentGrp.rotateY(data.rotY)

        sun.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        const diskPnt = Constants.WORLD_POS.clone()
        diskPnt.y += data.y;
        return CosmicMap.buildLine(Constants.WORLD_POS.clone(), diskPnt, LEN_MAT)
    }

    static buildObjectLine(o1:Sun, o2:Sun) {
        const p1 = o1.object.masterGrp.getWorldPosition(Constants.WORLD_POS).clone()
        const p2 = o2.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        return CosmicMap.buildLine(p1, p2, OBJ_MAT)
    }

    static buildLyRings(sol:Sun) {
        const ly = 100;
        const points = []
        const radius = ly;
        for (let i = 0; i <= 360; i++) {
            points.push(new THREE.Vector3(radius * Math.sin(i * DEG2RAD), 0, radius * Math.cos(i * DEG2RAD)));
        }
        const geom1 = new THREE.BufferGeometry();
        geom1.setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({
            color: "#ffffff",
            transparent: true,
            opacity: .45
        })
        const ly1 = new THREE.Line(geom1, mat);

        const geom2 = geom1.clone()
        geom2.scale(5, 1, 5)
        const ly5 = new THREE.Line(geom2, mat);

        const geom3 = geom1.clone()
        geom3.scale(15, 1, 15)
        const ly15 = new THREE.Line(geom3, mat);

        ly1.userData["title"] = "1LY"
        ly5.userData["title"] = "5LY"
        ly15.userData["title"] = "15LY"

        const lys = [[ly1, 1], [ly5, 5], [ly15, 15]]

        const height = 40
        lys.forEach((obj) => {
            const ly = obj[0] as THREE.Line
            const mult = obj[1] as number
            const txt = new Text()
            txt.text = ly.userData["title"]
            txt.fontSize = height
            txt.color = 0xffffff
            txt.position.x += 100 * mult + height + 10
            txt.position.y += height
            txt.rotateY(Math.PI)
            ly.add(txt)
        })
        sol.object.masterGrp.add(ly1)
        sol.object.masterGrp.add(ly5)
        sol.object.masterGrp.add(ly15)
    }

    static build() {
        const sol = CosmicMap.buildSun({name: "sol", radius: 3000, hTemp:7100, lTemp:3100})
        CosmicMap.buildLyRings(sol)

        const eeridani = CosmicMap.buildSun({name: "epsilonEridani", radius: 2200, hTemp:5000, lTemp:4000})
        const peridani = CosmicMap.buildSun({name: "pEridani", radius: 2200, hTemp:5100, lTemp:1500})
        const pavonis = CosmicMap.buildSun({name: "deltaPavonis", radius: 3600, hTemp:7000, lTemp:3000})

        const suns = [sol, peridani, pavonis, eeridani]
        const data = {
            tree: suns,
            flat: suns,
            isSingleSun: true,
            name: "cosmicMap",
        }
        const map = new CosmicMap(data)
        
        sol.object.parentGrp.add(CosmicMap.buildDiskLine(eeridani, {x:1000, y:300, rotY:Math.PI * 2.1}))
        sol.object.parentGrp.add(CosmicMap.buildDiskLine(peridani, {x:1200, y:2000, rotY:Math.PI * -1.9 * -1}))
        sol.object.parentGrp.add(CosmicMap.buildDiskLine(pavonis, {x:750, y:2150, rotY:Math.PI / 2 * -1}))

        sol.object.parentGrp.add(CosmicMap.buildObjectLine(eeridani, peridani))
        sol.object.parentGrp.add(CosmicMap.buildObjectLine(eeridani, pavonis))
        sol.object.parentGrp.add(CosmicMap.buildObjectLine(peridani, pavonis))

        return map
    }
}