import * as THREE from "three"
import { CelestiaObject, CelestialParams } from "./Celestial";

import atmoVert from "./../glsl/planet_atmo.vert.glsl?raw"
import atmoFrag from "./../glsl/planet_atmo.frag.glsl?raw"
import Constants from "../Constants";
import { World } from "./World";


export class Sun extends CelestiaObject {
    private _object: THREE.Group;

    constructor(data: CelestialParams) {
        super(data);
        this._object = this.build()
    }

    public get object(): THREE.Group {
        return this._object;
    }

    public update() {

    }

    public build() {
        // const mat = new THREE.ShaderMaterial({
        //     uniforms: {
        //         time: { value: 0.0 },
        //         resolution: { value: new THREE.Vector3() }
        //     },
        //     vertexShader: sunVert,
        //     fragmentShader: sunFrag
        // })
        const mat = new THREE.MeshNormalMaterial()
    
        const sphereGeometry = new THREE.SphereGeometry(this.radius, 50, 50)
        const mesh = new THREE.Mesh(sphereGeometry, mat)
        mesh.castShadow = true
        mesh.name = `${this.name}_mesh`
        // mesh.scale.set(2, 2, 2)
        // mesh.userData["idlePosition"] = new THREE.Vector3(2, 2, 5)

        const grp = new THREE.Group()
        grp.name = this.name
        grp.add(mesh)
        return grp 
    }
}