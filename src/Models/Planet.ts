import * as THREE from "three"
import { Text } from 'troika-three-text'
import { CelestiaObject, CelestialParams } from "./Celestial";
import { Internal3DObject } from "../interfaces";

import atmoVert from "./../glsl/planet_atmo.vert.glsl?raw"
import atmoFrag from "./../glsl/planet_atmo.frag.glsl?raw"
import Constants from "../helpers/Constants";
import { World } from "./World";

export interface PlanetParams {
    name: string;
    albedoPath: string;
    normalPath: string;
    glowColor: string;
    glowIntesity: number;
    texts: string[];
}

let outWorldPosition = new THREE.Vector3();

export class Planet extends CelestiaObject {
    private _albedoPath: string;
    private _normalPath: string;
    // private _object: Internal3DObject;
    private _texts: string[];


    constructor(data: CelestialParams & PlanetParams) {
        super(data);
        this._albedoPath = data.albedoPath;
        this._normalPath = data.normalPath;
        this._texts = data.texts;
        this._object = this.build(data.glowColor, data.glowIntesity)
        this.initPosition()
        // this.build_orbit()
        this.drawCircle()
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

    public update(world: World) {
        const vec = (this.atmo?.material as THREE.ShaderMaterial).uniforms.viewVector.value
        this.atmo?.getWorldPosition(outWorldPosition)
        vec.subVectors(world.camera.position.clone(), outWorldPosition);
    }

    private initPosition() {
        const base = this._parent && this._parent.group ? this._parent.group.position.clone() : new THREE.Vector3()
        const dist = this.distanceToParent / Constants.DISTANCE_SCALE
        const idlePos = new THREE.Vector3(0,0,-dist + this.radius * 6)
        base.z = (-dist)
        if (!this.group) return
        this.group.position.set(base.x, base.y, base.z)
        this.group.userData["idlePosition"] = idlePos;

        if (!this.texts) return
        const l = this.texts.length
        this.texts.forEach((txt) => {
            const i = txt.userData["idx"]
            txt.position.x = base.x + (this.radius) + (i / l)
            txt.position.y = (base.y - 3) + 15 * (i / l)
            txt.position.z = (base.z + dist - 5) + 3 * i
        })
    }

    public build(glowColor: string, glowIntensity:number): Internal3DObject {
        const [mesh, atmo] = this.build_map_sphere(new THREE.Color(parseInt(glowColor)), glowIntensity)
        const texts = this.build_texts()

        const grp = new THREE.Group()
        grp.name = this.name
        grp.add(mesh)
        grp.add(atmo)
        texts.forEach((t) => {
            // console.log(t)
            grp.add(t)
            t.sync()
        })

        grp.updateMatrixWorld()
        return { grp, mesh, atmo, texts }
    }

    public build_orbit() {
        const grp = this.group
        if (!grp) return

        let g = new THREE.BufferGeometry().setFromPoints(
            new THREE.Path().absarc(0, 0, 5, 0, Math.PI * 2, false).getSpacedPoints(50)
        );
        let m = new THREE.LineBasicMaterial({color: "aqua"});
        let l = new THREE.Line(g, m);

        const base = this._parent && this._parent.group ? this._parent.group.position.clone() : new THREE.Vector3()
        const dist = this.distanceToParent / Constants.DISTANCE_SCALE
        l.position.set(
            base.x - grp.position.x,
            base.y - grp.position.y,
            base.z - grp.position.z
        )
        l.scale.set(dist/2, dist/2, dist/2)
        l.rotateX(Math.PI/2)
        
        grp.add(l)
    }

    public drawCircle(){
			
        var points = [];
        
        // 360 full circle will be drawn clockwise
        const radius = this.distanceToParent / Constants.DISTANCE_SCALE;
        for(let i = 0; i <= 360; i++){
            points.push(new THREE.Vector3(Math.sin(i*(Math.PI/180))*radius, Math.cos(i*(Math.PI/180))*radius, 0));
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setFromPoints( points );
    
        var material = new THREE.LineBasicMaterial({
            color: "aqua",
            linewidth: 2
        });

        const grp = this.group
        if (!grp) return
        const line = new THREE.Line( geometry, material );
        const base = this._parent && this._parent.group ? this._parent.group.position.clone() : new THREE.Vector3()
        line.position.set(
            base.x - grp.position.x,
            base.y - grp.position.y,
            base.z - grp.position.z
        )
        line.rotateX(Math.PI/2)

        grp.add(line)
        grp.updateMatrixWorld()
    }

    private build_texts() {
        return this._texts.map((txt, idx) => {
            const textMesh = new Text()
            textMesh.text = txt
            textMesh.fontSize = 1
            textMesh.color = 0xffffff
            textMesh.userData["idx"] = idx
            return textMesh
        })
    }

    private build_map_sphere(glowColor: THREE.Color, glowIntesity:number) {
        const albedo = new THREE.TextureLoader().load(this.albedoPath);
        albedo.magFilter = THREE.NearestFilter

        const normal = new THREE.TextureLoader().load(this.normalPath);
        normal.magFilter = THREE.NearestFilter

        const sphereMaterial = new THREE.MeshPhongMaterial({
            map: albedo,
            normalMap: normal,
        })

        const sphereGeometry = new THREE.SphereGeometry(this.radius, 150, 150)
        const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
        mesh.castShadow = true
        mesh.name = `${this.name}_mesh`

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
        atmo.name = `${this.name}_atmo`
        atmo.castShadow = true
        atmo.scale.set(1.5, 1.5, 1.5);

        return [mesh, atmo]
    }
}