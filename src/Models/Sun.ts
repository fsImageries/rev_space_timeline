import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import { CelestialParams } from "../interfaces";

import { World } from "./World";

export class Sun extends CelestialObject {
    private light: THREE.PointLight;
    public lightRadius: number;

    constructor(data: CelestialParams) {
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
        this.masterGrp.add(this.light)
    }

    public init() {
        this.masterGrp.traverse(child=>child.userData["id"] = this.id)
        this.light.distance = this.lightRadius
    }

    public update(_world:World) {
        ((this.mesh as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.time.value += .05;
    }
}