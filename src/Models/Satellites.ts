import { Planet } from "./Planet";
import { World } from "./World";
import { satelliteParticles } from "./SatelliteParticles";

type children = (Planet | satelliteParticles)[];

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
        this._children.forEach(child => child.update(world))
    }
}