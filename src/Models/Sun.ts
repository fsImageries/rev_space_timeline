import * as THREE from "three"
import { CelestiaObject, CelestialParams } from "./Celestial";
import { Internal3DObject } from "../interfaces";

import sunFrag from "./../glsl/sun_frag.glsl?raw"
import sunVert from "./../glsl/sun_vert.glsl?raw"
import { World } from "./World";


export class Sun extends CelestiaObject {

    constructor(data: CelestialParams) {
        super(data);
        this.object = this.build()
    }

    public update(_world:World) {
        ((this.mesh as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.time.value += .01;
    }

    public build(): Internal3DObject {
        const mat = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 },
                resolution: { value: new THREE.Vector3() }
            },
            vertexShader: sunVert,
            fragmentShader: sunFrag
        })
        // const mat = new THREE.MeshNormalMaterial()

        const sphereGeometry = new THREE.SphereGeometry(this.radius, 50, 50)
        const mesh = new THREE.Mesh(sphereGeometry, mat)
        mesh.castShadow = true
        mesh.name = `${this.name}_mesh`
        // mesh.scale.set(2, 2, 2)
        // mesh.userData["idlePosition"] = new THREE.Vector3(2, 2, 5)

        const grp = new THREE.Group()
        grp.name = this.name
        grp.add(mesh)
        return { topGrp:grp, mesh: mesh, atmo: undefined, texts: [] }
    }
}