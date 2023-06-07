import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import { CelestialParams, SystemObjectParams } from "../interfaces";

import { World } from "./World";
import CelestialBase from "./CelestialBase";
import SystemObject from "./SystemObject";

export class Sun extends SystemObject {
    private light: THREE.PointLight;
    public lightRadius: number;

    constructor(data: SystemObjectParams) {
        super(data);

        // TODO implement coloring on yaml level
        this.lightRadius = 1;
        this.light = new THREE.PointLight('#ffffff', 1, this.lightRadius)
        this.light.castShadow = true
        this.light.shadow.radius = 4
        this.light.shadow.camera.near = 0.5
        this.light.shadow.camera.far = 100000
        this.light.shadow.mapSize.width = 2048
        this.light.shadow.mapSize.height = 2048
        this.object.masterGrp.add(this.light)
    }

    public init() {
        console.log(this.lightRadius)
        this.object.masterGrp.traverse(child=>child.userData["id"] = this.data.id)
        this.light.distance = this.lightRadius
        this.initSatellites(this)
    }

    public update(world:World) {
        ((this.object.mesh as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.time.value += .05;
        this.updateSatellites(world, this)
    }
}