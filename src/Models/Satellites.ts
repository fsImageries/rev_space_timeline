import * as THREE from "three";
import { Planet } from "./Planet";
import { World } from "./World";
import Constants from "../helpers/Constants";

type children = (Planet | THREE.Points)[];

const camWorldPos = new THREE.Vector3()
const outWorldPos = new THREE.Vector3()

export class Satellites {
    private _children: children;
    private _parent: Planet;

    constructor(children: children) {
        this._children = children
    }

    public get children(): children {
        return this._children;
    }

    public get parent(): Planet {
        return this._parent;
    }
    public set parent(value: Planet) {
        this._children.forEach(child => {if (child instanceof Planet) child.parent = value})
        this._parent = value;
    }
    
    public init() {
        for (const child of this._children) {
            if (child instanceof Planet) child.init()
        }
    }

    public update(world: World) {
        for (const child of this._children) {
            // Update Particles
            // Update Celestial

            if (child instanceof Planet) child.update(world)
            if (child instanceof THREE.Points) {
                world.cam.active.getWorldPosition(camWorldPos)
                child.getWorldPosition(outWorldPos)
                const dist = camWorldPos.distanceTo(outWorldPos);
                (child.material as THREE.ShaderMaterial).uniforms.dist.value = dist;
                const axisVal = (world.delta * this.parent.angularRotVel) * Constants.ROT_SCALE;
                child.rotation.y -= axisVal * 1.3793
            }
        }
    }
}