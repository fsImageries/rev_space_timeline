import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import { CelestialParams } from "../interfaces";

import { World } from "./World";

export class Sun extends CelestialObject {

    constructor(data: CelestialParams) {
        super(data);
    }

    public init() {
        this.masterGrp.traverse(child=>child.userData["id"] = this.id)
    }

    public update(_world:World) {
        ((this.mesh as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.time.value += .05;
    }
}