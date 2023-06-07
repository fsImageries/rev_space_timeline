import { Group, Mesh, ShaderMaterial, SphereGeometry } from "three";
import CelestialBase from "../Models/CelestialBase";
import Internal3DObject from "../Models/Internal3DObject";
import { Sun } from "../Models/Sun";
import { uuidv4 } from "../helpers/utils";
import { SunData } from "../jsonInterfaces";
import sunFrag from "./../glsl/sun_frag.glsl?raw";
import sunVert from "./../glsl/sun_vert.glsl?raw";


export default function build(data:SunData) {
    const mat = new ShaderMaterial({
        uniforms: {
            time: { value: 1.0 },
            scale: {value: 2.5 },
            highTemp: {value: data.highTemp},
            lowTemp: {value: data.lowTemp}    
        },
        vertexShader: sunVert,
        fragmentShader: sunFrag
    })

    const sphereGeometry = new SphereGeometry(data.draw.radius, 50, 50)
    const mesh = new Mesh(sphereGeometry, mat)
    mesh.name = `${data.name}_mesh`


    const meshGrp = new Group()
    meshGrp.name = `${data.name}_meshGrp`
    meshGrp.add(mesh)

    const masterGrp = new Group()
    const parentGrp = new Group()
    masterGrp.name = `${data.name}_masterGrp`
    parentGrp.name = `${data.name}_parentGrp`
    masterGrp.add(meshGrp)
    parentGrp.add(masterGrp)
    
    const celestialData = new CelestialBase({
        id: uuidv4(),
        name: data.name,
        type: data.type,
        tilt: data.tilt,
        parent: data.parent,
        radius: data.radius,
        texts: data.texts,
        orbitalPeriod: data.orbitalPeriod,
        rotationPeriod: data.rotationPeriod,
        distanceToParent: data.distanceToParent,
        drawRadius: data.draw.radius
    })

    const internalObject = new Internal3DObject({
        parentGrp,
        masterGrp,
        meshGrp,
        mesh
    })

    return new Sun({
        data: celestialData,
        object: internalObject
    })
}