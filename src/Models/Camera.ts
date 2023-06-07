import CameraControls from "camera-controls";
import * as THREE from "three";
import SystemObject from "./SystemObject";
import { World } from "./World";
import Constants from "../helpers/Constants";

CameraControls.install({ THREE: THREE });
type Controls = CameraControls;

export class Camera {
  private _active: THREE.PerspectiveCamera;
  public free: THREE.PerspectiveCamera;
  public third: THREE.PerspectiveCamera;

  private _activeCtrl: Controls;
  public freeCtrl: Controls;

  private _isFree: boolean;
  private _thirdTarget?: SystemObject;

  private _currentPosition: THREE.Vector3;
  private _currentLookat: THREE.Vector3;
  private _dummyRotate: THREE.Object3D;

  constructor(canvas: HTMLCanvasElement, world: World) {
    this.free = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 1e10);
    this.third = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 1e10);

    this.free.position.set(0, 0, -10000);
    this.third.position.set(0, 0, -10000);

    this.freeCtrl = new CameraControls(this.free, world.renderer.domElement);

    this._active = this.free;
    this._activeCtrl = this.freeCtrl;
    this._isFree = true;

    this._currentPosition = new THREE.Vector3();
    this._currentLookat = new THREE.Vector3();
    this._dummyRotate = new THREE.Object3D();
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

  public rotateThird(key: string) {
    const speed = Math.PI / 64
    switch (key) {
      case "arrowleft":
        this._dummyRotate.rotateY(speed)
        break;

      case "arrowright":
        this._dummyRotate.rotateY(-speed)
        break

      case "arrowup":
        this._dummyRotate.rotateX(speed)
        break

      case "arrowdown":
        this._dummyRotate.rotateX(-speed)
        break
    }
  }

  public idealOffset() {
    const rad = this._thirdTarget.data.drawRadius;
    const idealOffset = new THREE.Vector3(rad * 5, rad * 2, -rad * 6);
    this._thirdTarget.object.masterGrp.getWorldPosition(Constants.WORLD_POS);
    this._dummyRotate.getWorldQuaternion(Constants.WORLD_QUAT);
    idealOffset.applyQuaternion(Constants.WORLD_QUAT);
    idealOffset.add(Constants.WORLD_POS);
    return idealOffset;
  }

  public idealLookat() {
    const rad = this._thirdTarget.data.drawRadius;
    const idealLookat = new THREE.Vector3(0, rad / 2, rad);
    this._thirdTarget.object.masterGrp.getWorldPosition(Constants.WORLD_POS);
    this._thirdTarget.object.masterGrp.getWorldQuaternion(Constants.WORLD_QUAT);
    idealLookat.applyQuaternion(Constants.WORLD_QUAT);
    idealLookat.add(Constants.WORLD_POS);
    return idealLookat;
  }

  public update(delta: number) {
    const idealOffset = this.idealOffset();
    const idealLookat = this.idealLookat();
    
    // const 
    const t = 1.0 - Math.pow(0.001, delta);
    this._currentPosition.lerp(idealOffset, t);
    // this._currentPosition.copy(idealOffset);
    this._currentLookat.copy(idealLookat);

    this.third.position.copy(this._currentPosition);
    this.third.lookAt(this._currentLookat);

    this.freeCtrl.update(delta);
  }

  public setFollowTarget(target: SystemObject) {
    this._thirdTarget = target;
    this._dummyRotate.copy(target.object.masterGrp)
    console.log(this._thirdTarget.data.name);
  }

  public third2Free() {
    this.third.getWorldPosition(Constants.WORLD_POS);
    this.freeCtrl.setPosition(Constants.WORLD_POS.x, Constants.WORLD_POS.y, Constants.WORLD_POS.z);

    this._thirdTarget.object.masterGrp.getWorldPosition(Constants.WORLD_POS);
    this.freeCtrl.setTarget(Constants.WORLD_POS.x, Constants.WORLD_POS.y, Constants.WORLD_POS.z);
  }

  public swtich() {
    this._active = this.isFree ? this.third : this.free;
    this._activeCtrl = this.freeCtrl; //? this.thirdCtrl : this.freeCtrl;
    this._isFree = !this.isFree;
  }

  public activateThird() {
    this._active = this.third;
    this._isFree = false;
  }

  public activateFree() {
    this._active = this.free;
    this._activeCtrl = this.freeCtrl;
    this._isFree = true;
  }
}
