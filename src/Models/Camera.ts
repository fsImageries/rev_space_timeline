import CameraControls from 'camera-controls';
import * as THREE from "three";
import SystemObject from "./SystemObject";
import { World } from "./World";
import Constants from '../helpers/Constants';

CameraControls.install( { THREE: THREE } );
type Controls = CameraControls;

export class Camera {
    private _active: THREE.PerspectiveCamera;
    public free: THREE.PerspectiveCamera;
    public third: THREE.PerspectiveCamera;

    private _activeCtrl: Controls;
    public freeCtrl: Controls;
    public thirdCtrl: Controls;

    private _isFree: boolean;
    private _thirdTarget?: SystemObject;

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

    public get thirdTarget(): SystemObject {
        return this._thirdTarget;
    }

    public get isFree(): boolean {
        return this._isFree;
    }

    public update(delta:number) {
        if (this.thirdTarget && this.activeCtrl === this.thirdCtrl) {
            this.thirdTarget.object.masterGrp.getWorldPosition(Constants.__OUT_WORLD__POS)
            this.thirdCtrl.setTarget(Constants.__OUT_WORLD__POS.x, Constants.__OUT_WORLD__POS.y, Constants.__OUT_WORLD__POS.z, true)
        }

        this.freeCtrl.update(delta)
        this.thirdCtrl.update(delta)
    }
    
    public setFollowTarget(target:SystemObject) {
        // if (this.thirdTarget) this.thirdTarget.masterGrp.remove(this.third)
        target.object.masterGrp.getWorldPosition(Constants.__OUT_WORLD__POS)
        this.thirdCtrl.setPosition(Constants.__OUT_WORLD__POS.x, Constants.__OUT_WORLD__POS.y, Constants.__OUT_WORLD__POS.z + target.data.drawRadius * 4)
        // this.thirdCtrl.lookInDirectionOf(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z)
        // this.thirdCtrl.setOrbitPoint(outWorldPosition.x, outWorldPosition.y, outWorldPosition.z)
        this.thirdCtrl.setTarget(Constants.__OUT_WORLD__POS.x, Constants.__OUT_WORLD__POS.y, Constants.__OUT_WORLD__POS.z, true)
        // target.masterGrp.add(this.third)
        this._thirdTarget = target
    }

    public third2Free() {
        this.thirdCtrl.getPosition(Constants.__OUT_WORLD__POS)
        this.freeCtrl.setPosition(Constants.__OUT_WORLD__POS.x, Constants.__OUT_WORLD__POS.y, Constants.__OUT_WORLD__POS.z)

        this.thirdCtrl.getTarget(Constants.__OUT_WORLD__POS)
        this.freeCtrl.setTarget(Constants.__OUT_WORLD__POS.x, Constants.__OUT_WORLD__POS.y, Constants.__OUT_WORLD__POS.z)
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