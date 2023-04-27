import * as THREE from "three"
import { Text } from 'troika-three-text'
import sunFrag from "./glsl/sun_frag.glsl?raw"
import sunVert from "./glsl/sun_vert.glsl?raw"
import atmoVert from "./glsl/planet_atmo.vert.glsl?raw"
import atmoFrag from "./glsl/planet_atmo.frag.glsl?raw"
import planetVert from "./glsl/planet.vert.glsl?raw"
import planetFrag from "./glsl/planet.frag.glsl?raw"

export function build_yellowstone(scene: THREE.Scene) {
    const idlePos = new THREE.Vector3(49, -1, -42.5)
    const name = "yellowstone"
    const [mesh, atmo] = build_map_sphere("/2k_venus_surface.jpg", "/ceres_normal_16k.png", name, new THREE.Color(0xf69f1f))
    
    // const hour = new Date().getHours()
    // const h2d = THREE.MathUtils.degToRad(360) / 26
    // mesh.rotateY(hour * h2d)

    const grp = new THREE.Group()
    grp.userData["idlePosition"] = idlePos
    grp.name = name
    grp.position.set(50, 0, -50)
    grp.add(mesh)
    grp.add(atmo)
    gen_yellowstone_text(grp)
    grp.updateMatrixWorld()

    scene.add(grp)
}

function gen_yellowstone_text(group: THREE.Group) {
    const txt = [
        "2351\n•Dan Sylveste born in Chasm City, Yellowstone",
        "2372\n•The Eighty",
        "2405\n•Departure of Sylveste expedition to Lascaille’s Shroud",
        "2415\n•Clockworker incident",
        "2427\n•Aurora crisis"
    ]

    for (let i = 0; i < txt.length; i++) {
        const textMesh = new Text()
        textMesh.text = txt[i]
        textMesh.fontSize = 0.2
        textMesh.position.x = 0.85 + (i / 5)
        textMesh.position.y = -1 + (i / 1.5)
        textMesh.position.z = -1 + (i / 2)
        textMesh.color = 0xffffff
        group.add(textMesh)
        textMesh.sync()
    }
}

export function build_epsilon_eridani(scene: THREE.Scene) {
    const mat = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            resolution: { value: new THREE.Vector3() }
        },
        vertexShader: sunVert,
        fragmentShader: sunFrag
    })

    const sphereGeometry = new THREE.SphereGeometry(1, 50, 50)
    const mesh = new THREE.Mesh(sphereGeometry, mat)
    mesh.castShadow = true
    mesh.position.z = 0.5
    mesh.name = "eridani"
    mesh.scale.set(2, 2, 2)
    mesh.userData["idlePosition"] = new THREE.Vector3(2, 2, 5)
    scene.add(mesh)
}

function build_map_sphere(mapPath: string, normalMap:string, name: string, glowColor: THREE.Color) {
    const albedo = new THREE.TextureLoader().load(mapPath);
    albedo.magFilter = THREE.NearestFilter

    const normal = new THREE.TextureLoader().load(normalMap);
    normal.magFilter = THREE.NearestFilter

    const sphereMaterial = new THREE.MeshPhongMaterial({
        map:albedo,
        normalMap: normal,
    })

    const sphereGeometry = new THREE.SphereGeometry(1, 150, 150)
    const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
    mesh.castShadow = true
    mesh.name = `${name}_mesh`

    const atmoMat = new THREE.ShaderMaterial({
        uniforms: {
            viewVector: {value: new THREE.Vector3()},
            glowColor: {value: glowColor},
        },
        vertexShader: atmoVert,
        fragmentShader: atmoFrag,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite	: false,
    })

    const atmo = new THREE.Mesh(sphereGeometry, atmoMat)
    atmo.name = `${name}_atmo`
    atmo.castShadow = true
    atmo.scale.set(1.5, 1.5, 1.5);

    return [mesh, atmo]
}