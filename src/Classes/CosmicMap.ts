import * as THREE from "three"
import { System } from "../Models/System";
import { SystemParams } from "../interfaces";
import SystemObject from "./SystemObject";
import CelestialBase from "./CelestialBase";
import { uuidv4 } from "../helpers/utils";
import Internal3DObject from "./Internal3DObject";
import { World } from "./World";
import { Sun } from "../Models/Sun";

import sunFactory from "../Factories/SunFactory"
import { DEG2RAD } from "three/src/math/MathUtils";

class Some extends SystemObject {
    init(parent?: SystemObject): void {

    }

    update(world: World, parent?: SystemObject): void {

    }
}

export class CosmicMap extends System {

    constructor(data: SystemParams) {
        super(data);
    }

    static build() {        
        const points = []
        const radius = 100;
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

        const sol = sunFactory({
            name: "eEridani",
            type: "sun",
            radius: 1000,
            rotationPeriod: 0,
            orbitalPeriod: 0,
            highTemp: 7100,
            lowTemp: 3100,
            distanceToParent: 1,
            tilt: 0,
            parent: "",
            draw: { radius: 1 }
        })

        sol.object.masterGrp.add(ly1)
        sol.object.masterGrp.add(ly5)
        sol.object.masterGrp.add(ly15)


        const eridani = sunFactory({
            name: "epsilonEridani",
            type: "sun",
            radius: 1200,
            rotationPeriod: 0,
            orbitalPeriod: 0,
            highTemp: 5100,
            lowTemp: 1500,
            distanceToParent: 1,
            tilt: 0,
            parent: "",
            draw: { radius: 1 }
        })

        const data = {
            tree: [sol, eridani],
            flat: [sol, eridani],
            isSingleSun: true,
            name: "cosmicMap",
        }
        const map = new CosmicMap(data)

        eridani.object.masterGrp.position.x -= 1000
        eridani.object.masterGrp.position.y -= 1000
        eridani.object.parentGrp.rotateY(Math.PI/6 * -1)

        return map
    }
}