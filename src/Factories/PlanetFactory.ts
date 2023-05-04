import * as THREE from "three";
import { Text } from 'troika-three-text'

import build_orbit from "./OrbitFactory";
import { Planet } from "../Models/Planet";
import Constants from "../helpers/Constants";
import { CelestialObject } from "../Models/Celestial";
import { PlanetJson, Internal3DObject } from "../interfaces";

import atmoVert from "./../glsl/planet_atmo.vert.glsl?raw"
import atmoFrag from "./../glsl/planet_atmo.frag.glsl?raw"


export default function build(data: PlanetJson, parent?: CelestialObject) {
    const [mesh, atmo] = build_sphere_mesh_and_atmo(
        new THREE.Color(parseInt(data.draw.glowColor)),
        data.draw.glowIntensity,
        data.draw.albedoPath,
        data.draw.normalPath,
        data.draw.radius,
        data.name
    )

    const orbit = build_orbit(data.distanceToParent)
    const texts = build_texts(data.texts)

    const meshGrp = new THREE.Group()
    meshGrp.name = `${data.name}_meshGrp`
    meshGrp.add(mesh)
    meshGrp.add(atmo)

    const masterGrp = new THREE.Group()
    masterGrp.name = `${data.name}_masterGrp`
    masterGrp.add(meshGrp)
    masterGrp.add(orbit)
    texts.forEach((t) => {
        masterGrp.add(t)
        t.sync()
    })

    const topGrp = new THREE.Group()
    topGrp.name = `${data.name}_topGrp`
    topGrp.add(masterGrp)

    const object3d: Internal3DObject = { topGrp, masterGrp, meshGrp, mesh, atmo, texts, orbit }
    init(data, object3d, parent)

    meshGrp.updateMatrixWorld()
    masterGrp.updateMatrixWorld()
    topGrp.updateMatrixWorld()

    return new Planet({
        name: data.name,
        glowColor: data.draw.glowColor,
        glowIntesity: data.draw.glowIntensity,
        radius: data.draw.radius,
        rotationPeriod: data.rotationPeriod,
        orbitalPeriod: data.orbitalPeriod,
        tilt: data.tilt,
        distanceToParent: data.distanceToParent,
        object: object3d,
        parent: parent
    })
}

function init(data: PlanetJson, object3d: Internal3DObject, parent?: CelestialObject) {
    const base = parent ? parent.masterGrp.position.clone() : new THREE.Vector3()
    const dist = data.distanceToParent / Constants.DISTANCE_SCALE
    const idlePos = new THREE.Vector3(0, 0, -dist + data.draw.radius * 6)
    const idlePosAdd = new THREE.Vector3(0, 0, data.draw.radius * 6)
    base.z = (-dist)

    object3d.masterGrp.position.set(base.x, base.y, base.z)
    object3d.masterGrp.userData["idlePosition"] = idlePos;
    object3d.masterGrp.userData["idleAdd"] = idlePosAdd;
    object3d.masterGrp.userData["dist"] = dist;

    if (object3d.orbit) {
        object3d.orbit.position.set(
            0 - base.x,
            0 - base.y,
            0 - base.z
        )
    }

    if (object3d.texts) {
        const l = object3d.texts.length
        object3d.texts.forEach((txt) => {
            const i = txt.userData["idx"]
            txt.position.x = base.x + (data.draw.radius) + (i / l)
            txt.position.y = (base.y - 3) + 15 * (i / l)
            txt.position.z = (base.z + dist - 5) + 3 * i
        })
    }
}

function build_sphere_mesh_and_atmo(
    glowColor: THREE.Color,
    glowIntesity: number,
    albedoPath: string,
    normalPath: string,
    radius: number,
    name: string
) {
    const albedo = new THREE.TextureLoader().load(albedoPath);
    albedo.magFilter = THREE.NearestFilter

    const normal = new THREE.TextureLoader().load(normalPath);
    normal.magFilter = THREE.NearestFilter

    const sphereMaterial = new THREE.MeshPhongMaterial({
        map: albedo,
        normalMap: normal,
    })

    const sphereGeometry = new THREE.SphereGeometry(radius, 55, 55)
    const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
    mesh.castShadow = true
    mesh.name = `${name}_mesh`

    const atmoMat = new THREE.ShaderMaterial({
        uniforms: {
            intensityMult: { value: glowIntesity },
            viewVector: { value: new THREE.Vector3() },
            glowColor: { value: glowColor },
        },
        vertexShader: atmoVert,
        fragmentShader: atmoFrag,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
    })

    const atmo = new THREE.Mesh(sphereGeometry, atmoMat)
    atmo.name = `${name}_atmo`
    atmo.castShadow = true
    atmo.scale.set(1.5, 1.5, 1.5);

    return [mesh, atmo]
}

function build_texts(texts: string[]) {
    return texts.map((txt, idx) => {
        const textMesh = new Text()
        textMesh.text = txt
        textMesh.fontSize = 1
        textMesh.color = 0xffffff
        textMesh.userData["idx"] = idx
        return textMesh
    })
}