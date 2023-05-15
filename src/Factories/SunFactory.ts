import * as THREE from "three"

import sunFrag from "./../glsl/sun_frag.glsl?raw"
import sunVert from "./../glsl/sun_vert.glsl?raw"
import { Sun } from "../Models/Sun"
import { uuidv4 } from "../helpers/cameraUtils";
import { SunJson, Internal3DObject } from "../interfaces"


export default function build(data:SunJson) {
    const mat = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            resolution: { value: new THREE.Vector3() }
        },
        vertexShader: sunVert,
        fragmentShader: sunFrag
    })
    // const mat = new THREE.MeshNormalMaterial()

    const sphereGeometry = new THREE.SphereGeometry(data.draw.radius, 50, 50)
    const mesh = new THREE.Mesh(sphereGeometry, mat)
    // mesh.castShadow = true
    mesh.name = `${data.name}_mesh`
    // mesh.scale.set(2, 2, 2)
    // mesh.userData["idlePosition"] = new THREE.Vector3(2, 2, 5)

    const meshGrp = new THREE.Group()
    meshGrp.name = `${data.name}_meshGrp`
    meshGrp.add(mesh)

    const masterGrp = new THREE.Group()
    const topGrp = new THREE.Group()
    masterGrp.name = `${data.name}_masterGrp`
    masterGrp.add(meshGrp)
    topGrp.add(masterGrp)
    
    const object3d: Internal3DObject = { topGrp, masterGrp, meshGrp, mesh }

    return new Sun({
        name: data.name,
        radius: data.draw.radius,
        rotationPeriod: data.rotationPeriod,
        orbitalPeriod: data.orbitalPeriod,
        tilt: data.tilt,
        distanceToParent: data.distanceToParent,
        object: object3d,
        id: uuidv4()
    })
}