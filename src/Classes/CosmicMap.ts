import * as THREE from "three";
import { Text } from "troika-three-text";
import { Sun } from "../Models/Sun";
import { System } from "../Models/System";
import { SystemParams } from "../interfaces";

import { DEG2RAD } from "three/src/math/MathUtils";
import sunFactory from "../Factories/SunFactory";
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
        name: string,
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

    static buildLine(p1: THREE.Vector3, p2: THREE.Vector3, mat: THREE.Material) {
        const geom = new THREE.BufferGeometry()
        geom.setFromPoints([p1, p2])
        return new THREE.Line(geom, mat)
    }

    static buildDiskLine(sun: Sun, data: { x: number, y: number, rotY: number }) {
        sun.object.masterGrp.position.x -= data.x
        sun.object.masterGrp.position.y -= data.y
        sun.object.parentGrp.rotateY(data.rotY)

        sun.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        const diskPnt = Constants.WORLD_POS.clone()
        diskPnt.y += data.y;
        return CosmicMap.buildLine(Constants.WORLD_POS.clone(), diskPnt, LEN_MAT)
    }

    static buildObjectLine(o1: Sun, o2: Sun) {
        const p1 = o1.object.masterGrp.getWorldPosition(Constants.WORLD_POS).clone()
        const p2 = o2.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        return CosmicMap.buildLine(p1, p2, OBJ_MAT)
    }

    static buildNameTag(sun: Sun, xOff: number) {
        const base = sun.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        base.x -= xOff

        const txt = new Text()
        txt.text = sun.data.name
        txt.fontSize = 50
        txt.color = 0xffffff
        txt.rotateY(Math.PI * .85)
        txt.position.copy(base)
        txt.position.y += 25
        return txt
    }

    static buildLyRings(sol: Sun) {
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

    static setupSun(system: System, sol: Sun, sun: Sun, diskData: { x: number, y: number, rotY: number }) {
        sol.object.parentGrp.add(CosmicMap.buildDiskLine(sun, diskData))
        system.topGrp.add(CosmicMap.buildNameTag(sun, 25))
    }

    static connectSuns(sol: Sun, sun: Sun, connects: Sun[]) {
        connects.forEach(c => sol.object.parentGrp.add(CosmicMap.buildObjectLine(sun, c)))
    }

    static build() {
        const sol = CosmicMap.buildSun({ name: "sol", radius: 3000, hTemp: 7100, lTemp: 3100 })
        CosmicMap.buildLyRings(sol)

        const source = [
            { name: "epsilonEridani", radius: 2200, hTemp: 5000, lTemp: 4000 },
            { name: "pEridani", radius: 2200, hTemp: 5100, lTemp: 1500 },
            { name: "deltaPavonis", radius: 3600, hTemp: 7000, lTemp: 3000 },
            { name: "lacaille9352", radius: 2000, hTemp: 4000, lTemp: 3000 },
            { name: "luyten726-8", radius: 500, hTemp: 2000, lTemp: 900 },
            { name: "ross248", radius: 1000, hTemp: 2000, lTemp: 900 },
            { name: "61cygni", radius: 2000, hTemp: 3000, lTemp: 500 },
            { name: "lalande21185", radius: 1250, hTemp: 3000, lTemp: 500 },
            { name: "gliese687", radius: 1560, hTemp: 3000, lTemp: 500 },
            { name: "groombridge1618", radius: 1450, hTemp: 5000, lTemp: 500 },
            { name: "107piscium", radius: 3000, hTemp: 10000, lTemp: 500 },
        ]

        const suns = source.map(d => CosmicMap.buildSun(d))

        const params = {
            tree: [sol, ...suns],
            flat: [sol, ...suns],
            isSingleSun: true,
            name: "cosmicMap",
        }
        const map = new CosmicMap(params)
        map.topGrp.add(CosmicMap.buildNameTag(sol, 25))

        const data = [
            { x: 1000, y: 300, rotY: Math.PI * 2.1 },
            { x: 1200, y: 2000, rotY: Math.PI * -1.9 * -1 },
            { x: 750, y: 2150, rotY: Math.PI / 2 * -1 },
            { x: 1000, y: 800, rotY: Math.PI * 1.65 },
            { x: 800, y: 500, rotY: Math.PI * 1.9 },
            { x: 834, y: -800, rotY: Math.PI * 1.72 },
            { x: 626, y: -1000, rotY: Math.PI * 1.578 },
            { x: 550, y: -800, rotY: Math.PI * .75 },
            { x: 400, y: -1900, rotY: Math.PI * 1.3 },
            { x: 857, y: -1734, rotY: Math.PI * .689 },
            { x: 2222, y: -1200, rotY: Math.PI * -.1 },
        ]

        data.forEach((d, idx) => CosmicMap.setupSun(map, sol, suns[idx], d))

        CosmicMap.connectSuns(sol, sol, suns.filter(s => ["ross248", "61cygni"].includes(s.data.name)))
        CosmicMap.connectSuns(sol, suns.reduce((a, c) => a.data.name == "pEridani" ? a : c), suns.filter(s => ["deltaPavonis"].includes(s.data.name)))
        CosmicMap.connectSuns(
            sol,
            suns.reduce((a, c) => a.data.name == "epsilonEridani" ? a : c),
            suns.filter(s => ["pEridani", "deltaPavonis", "61cygni", "107piscium"].includes(s.data.name))
        )

        return map
    }
}