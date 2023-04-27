import * as THREE from "three"
import { CelestiaObject, CelestialParams } from "./Celestial";

import atmoVert from "./../glsl/planet_atmo.vert.glsl?raw"
import atmoFrag from "./../glsl/planet_atmo.frag.glsl?raw"
import Constants from "../Constants";
import { World } from "./World";

export interface PlanetParams {
    name: string;
    albedoPath: string;
    normalPath: string;
    glowColor: string;
}

let outWorldPosition = new THREE.Vector3();

interface Internal3DObject {
    grp: THREE.Group;
    mesh: THREE.Mesh;
    atmo: THREE.Mesh
}

export class Planet extends CelestiaObject {
    private _albedoPath: string;
    private _normalPath: string;
    private _object: Internal3DObject;


    constructor(data: CelestialParams & PlanetParams, parent?: THREE.Object3D) {
        super(data);
        this._albedoPath = data.albedoPath;
        this._normalPath = data.normalPath;
        this._object = this.build(data.glowColor)
        // this._parent = parent

        // Init
        const base = parent ? parent.position.clone() : new THREE.Vector3()
        const dist = this.distanceToParent / Constants.DISTANCE_SCALE
        base.z = (-dist)
        this.group.position.set(base.x, base.y, base.z)
        
    }

    public get albedoPath(): string {
        return this._albedoPath;
    }
    public set albedoPath(value: string) {
        this._albedoPath = value;
    }

    public get normalPath(): string {
        return this._normalPath;
    }
    public set normalPath(value: string) {
        this._normalPath = value;
    }

    public get group(): THREE.Group {
        return this._object.grp;
    }

    public get mesh(): THREE.Mesh {
        return this._object.mesh;
    }

    public get atmo(): THREE.Mesh {
        return this._object.atmo;
    }

    public update(world: World) {
        // const atmo = (this._object.getObjectByName(`${this._name}_atmo`) as THREE.Mesh)
        const vec = (this.atmo.material as THREE.ShaderMaterial).uniforms.viewVector.value
        this.atmo.getWorldPosition(outWorldPosition)
        vec.subVectors(world.camera.position.clone(), outWorldPosition);
    }

    private build(glowColor: string): Internal3DObject {
        const [mesh, atmo] = this.build_map_sphere(new THREE.Color(glowColor))

        const grp = new THREE.Group()
        // grp.userData["idlePosition"] = idlePos
        grp.name = this.name
        // grp.position.set(5, 0, -5)
        grp.add(mesh)
        grp.add(atmo)
        // gen_yellowstone_text(grp)
        grp.updateMatrixWorld()
        return { grp, mesh, atmo }
    }

    private build_map_sphere(glowColor: THREE.Color) {
        const albedo = new THREE.TextureLoader().load(this.albedoPath);
        albedo.magFilter = THREE.NearestFilter

        const normal = new THREE.TextureLoader().load(this.normalPath);
        normal.magFilter = THREE.NearestFilter

        const sphereMaterial = new THREE.MeshPhongMaterial({
            map: albedo,
            normalMap: normal,
        })

        const sphereGeometry = new THREE.SphereGeometry(this.radius, 150, 150)
        // const sphereGeometry = new THREE.SphereGeometry(1, 150, 150)
        const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
        mesh.castShadow = true
        mesh.name = `${this.name}_mesh`

        const atmoMat = new THREE.ShaderMaterial({
            uniforms: {
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
        atmo.name = `${this.name}_atmo`
        atmo.castShadow = true
        atmo.scale.set(1.5, 1.5, 1.5);

        return [mesh, atmo]
    }
}