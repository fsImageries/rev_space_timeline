import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import Constants from "../helpers/Constants";
import { World } from "./World";
import { PlanetParams, CelestialParams } from "../interfaces";


let outWorldPos = new THREE.Vector3();
let camWorldPos = new THREE.Vector3();
let masterGrpWorldPos = new THREE.Vector3();

export class Planet extends CelestialObject {
    private _children: any[];
    public get children(): any[] {
        return this._children;
    }

    constructor(data: CelestialParams & PlanetParams) {
        super(data);
        this._children = data.children
    }

    public init() {
        const base = this.parent ? this.parent.masterGrp.position.clone() : new THREE.Vector3()
        const idlePos = new THREE.Vector3(0, 0, -this.dist + this.radius * 6)
        const idlePosAdd = new THREE.Vector3(0, 0, this.radius * 6)
        if (this.name == "marcosEye") {
            console.log(this.parent.name)
            console.log(this.parent.masterGrp.position)
        }
    
        base.z = -this.dist

        this.masterGrp.position.set(base.x, base.y, base.z)
        this.masterGrp.userData["idlePosition"] = idlePos;
        this.masterGrp.userData["idleAdd"] = idlePosAdd;
        this.masterGrp.userData["dist"] = this.dist;
        this.masterGrp.userData["id"] = this.id;
    
        if (this.orbit) {
            this.orbit.scale.setScalar(this.dist)
            this.orbit.position.set(
                -base.x,
                -base.y,
                -base.z
            )
        }
    
        if (this.texts) {
            const l = this.texts.length
            this.texts.forEach((txt) => {
                const i = txt.userData["idx"]
                txt.position.x = base.x + (this.radius) + (i / l)
                txt.position.y = (base.y - 3) + 15 * (i / l)
                txt.position.z = (base.z + this.dist - 5) + 3 * i
            })
        }

        this.meshGrp.updateMatrixWorld()
        this.masterGrp.updateMatrixWorld()
        this.topGrp.updateMatrixWorld()
    }

    public update(world: World) {
        // Update topGrp
        if (this.parent) {
            this.parent.masterGrp.getWorldPosition(outWorldPos)
            this.topGrp.position.copy(outWorldPos)
        }
        
        // Atmo direction
        const vec = (this.atmo?.material as THREE.ShaderMaterial).uniforms.viewVector.value
        this.atmo?.getWorldPosition(outWorldPos)
        vec.subVectors(world.cam.active.position.clone(), outWorldPos);

        // Axis Rotation
        let axisVal = (world.delta * this.angularRotVel) * Constants.ROT_SCALE;
        this.meshGrp.rotation.y -= axisVal;

        // Orbital Rotation
        let orbVal = (world.delta * this.angularOrbVel) * Constants.ORB_SCALE;
        this.topGrp.rotation.y += orbVal;

        // Sprite scaling
        world.cam.active.getWorldPosition(camWorldPos)
        this.masterGrp.getWorldPosition(masterGrpWorldPos)
        const dist = masterGrpWorldPos.distanceTo(camWorldPos)
        this.sprite.scale.setScalar(dist/50)

        // Children update
        if (this.children) {
            this.children.forEach(child=>{
                const dist = camWorldPos.distanceTo(masterGrpWorldPos);
                (child.topGrp.material as THREE.ShaderMaterial).uniforms.dist.value = dist;
                child.topGrp.rotation.y -= axisVal * 1.3793
            })
        }

        // Distance visibility
        this.sprite.visible = dist > 5000 ? true: false
        this.meshGrp.visible = dist < 10000 ? true: false
        this.texts.map(t => t.visible = dist < 10000 ? true: false)

    }
}