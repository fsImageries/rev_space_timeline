import * as THREE from "three";
import { Text } from 'troika-three-text';

import build_orbit from "./OrbitFactory";
import { Planet } from "../Models/Planet";
import { CelestialObject } from "../Models/Celestial";
import { uuidv4 } from "../helpers/cameraUtils";
import { Internal3DObject } from "../interfaces";
import { PlanetJson } from "../jsonInterfaces";
import satelliteFactory from "./SatelliteFactory"

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
    const orbit = build_orbit()
    const texts = build_texts(data.texts)
    // const sprite = build_sprite(data.name, data.draw.radius)
    const map = new THREE.TextureLoader().load( '/diamond-solid.svg' );
    const material = new THREE.SpriteMaterial( { map: map } );
    const sprite = new THREE.Sprite( material );
    sprite.position.y = data.draw.radius + (data.draw.radius / 3)
 
    const meshGrp = new THREE.Group()
    meshGrp.name = `${data.name}_meshGrp`
    meshGrp.add(mesh)
    meshGrp.add(atmo)

    const masterGrp = new THREE.Group()
    masterGrp.name = `${data.name}_masterGrp`
    masterGrp.add(meshGrp)
    masterGrp.add(orbit)
    masterGrp.add(sprite)
    texts.forEach((t) => {
        masterGrp.add(t)
        t.sync()
    })

    const topGrp = new THREE.Group()
    topGrp.name = `${data.name}_topGrp`
    topGrp.add(masterGrp)

    const object3d: Internal3DObject = { topGrp, masterGrp, meshGrp, mesh, atmo, texts, orbit, sprite }

    let children
    if ("children" in data) {
        children = data.children.map(d => {
            const child = satelliteFactory(d, data.draw.radius)
            // console.log(data.draw.radius)
            // console.log(child)
            masterGrp.add(child.topGrp)
            return child
        })
    }

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
        parent: parent,
        id: uuidv4(),
        children: children
    })
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