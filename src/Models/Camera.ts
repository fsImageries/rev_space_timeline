import * as THREE from "three";
import CameraControls from 'camera-controls';
import { CelestialObject } from "./Celestial";
import { World } from "./World";

CameraControls.install( { THREE: THREE } );
let outWorldPosition = new THREE.Vector3();

type Controls = CameraControls;

export class Camera {
    private _active: THREE.PerspectiveCamera;
    public free: THREE.PerspectiveCamera;
    public third: THREE.PerspectiveCamera;

    private _activeCtrl: Controls;
    public freeCtrl: Controls;
    public thirdCtrl: Controls;

    private _isFree: boolean;
    private _thirdTarget?: CelestialObject;

    constructor(canvas:HTMLCanvasElement, world:World) {
        this.free  = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 1e+10)
        this.third = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 1e+10)

        this.free.position.set(0,0,-10000)
        this.third.position.set(0,0,-10000)

        this.freeCtrl = new CameraControls( this.free, world.renderer.domElement );
        this.thirdCtrl = new CameraControls( this.third, world.renderer.domElement );
        
        this._active = this.free
        this._activeCtrl = this.freeCtrl
        this._isFree = true;
    }

    public get active(): THREE.PerspectiveCamera {
        return this._active;
    }

    public get activeCtrl(): Controls {
        return this._activeCtrl;
    }

    public get thirdTarget(): CelestialObject {
        return this._thirdTarget;
    }

    public get isFree(): boolean {
        return this._isFree;
    }

    public update(delta:number) {
        if (this.thirdTarget && this.activeCtrl === this.thirdCtrl) {
            this.thirdTarget.masterGrp.getWorldPosition(outWorldPosition)
            this.thirdCtrl.setTarget(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z, true)
        }

        this.freeCtrl.update(delta)
        this.thirdCtrl.update(delta)
    }
    
    public setFollowTarget(target:CelestialObject) {
        // if (this.thirdTarget) this.thirdTarget.masterGrp.remove(this.third)
        target.masterGrp.getWorldPosition(outWorldPosition)
        this.thirdCtrl.setPosition(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z + target.radius * 4)
        // this.thirdCtrl.lookInDirectionOf(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z)
        // this.thirdCtrl.setOrbitPoint(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z)
        this.thirdCtrl.setTarget(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z, true)
        // target.masterGrp.add(this.third)
        this._thirdTarget = target
    }

    public third2Free() {
        this.thirdCtrl.getPosition(outWorldPosition)
        this.freeCtrl.setPosition(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z)

        this.thirdCtrl.getTarget(outWorldPosition)
        this.freeCtrl.setTarget(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z)
    }

    public swtich() {
        this._active = this.isFree ? this.third : this.free
        this._activeCtrl = this.isFree ? this.thirdCtrl : this.freeCtrl
        this._isFree = !this.isFree
    }

    public activateThird() {
        this._active = this.third
        this._activeCtrl = this.thirdCtrl
        this._isFree = false
    }

    public activateFree() {
        this._active = this.free
        this._activeCtrl = this.freeCtrl
        this._isFree = true
    }

}