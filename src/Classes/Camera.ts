import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SystemObject from "../Classes/SystemObject";
import Constants from "../helpers/Constants";
import { World } from "./World";

type Controls = OrbitControls;

export class Camera {
  private _active: THREE.PerspectiveCamera;
  public free: THREE.PerspectiveCamera;
  public third: THREE.PerspectiveCamera;
  public freeCtrl: Controls;

  private _isFree: boolean;
  private _thirdTarget?: SystemObject;

  private _currentPosition: THREE.Vector3;
  private _currentLookat: THREE.Vector3;
  private _dummyRotate: THREE.Object3D;
  private _baseOffset: THREE.Vector3;
  private _baseLookat: THREE.Vector3;

  constructor(canvas: HTMLCanvasElement, world: World) {
    this.free = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 1e10);
    this.third = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 1e10);

    this.free.position.set(0, 0, -10000);
    this.third.position.set(0, 0, -10000);

    this.freeCtrl = new OrbitControls(this.free, world.renderer.domElement)
    this.freeCtrl.enableDamping = true
    this.freeCtrl.dampingFactor = .5
    // this.freeCtrl = new CameraControls(this.free, world.renderer.domElement);

    this._active = this.free;
    this._isFree = true;

    this._currentPosition = new THREE.Vector3();
    this._currentLookat = new THREE.Vector3();
    this._dummyRotate = new THREE.Object3D();

    this._baseOffset = new THREE.Vector3();
    this._baseLookat = new THREE.Vector3();
  }

  public get active(): THREE.PerspectiveCamera {
    return this._active;
  }

  public get thirdTarget(): SystemObject | undefined {
    return this._thirdTarget;
  }

  public get isFree(): boolean {
    return this._isFree;
  }

  public rotateThird(key: string) {
    switch (key) {
      case "arrowleft":
        this._dummyRotate.rotateY(Constants.CAM_ROT_SPEED);
        break;

      case "arrowright":
        this._dummyRotate.rotateY(-Constants.CAM_ROT_SPEED);
        break;

      case "arrowup":
        this._dummyRotate.rotateX(Constants.CAM_ROT_SPEED);
        break;

      case "arrowdown":
        this._dummyRotate.rotateX(-Constants.CAM_ROT_SPEED);
        break;
    }
  }

  public calculateTarget() {
    this._thirdTarget.object.masterGrp.getWorldPosition(Constants.WORLD_POS);
    this._thirdTarget.object.masterGrp.getWorldQuaternion(Constants.WORLD_QUAT);
    this._dummyRotate.getWorldQuaternion(Constants.WORLD_QUAT2);

    const lookat = this._baseLookat.clone();
    lookat.applyQuaternion(Constants.WORLD_QUAT);
    lookat.add(Constants.WORLD_POS);

    Constants.WORLD_QUAT.multiplyQuaternions(Constants.WORLD_QUAT, Constants.WORLD_QUAT2);
    const offset = this._baseOffset.clone();
    offset.applyQuaternion(Constants.WORLD_QUAT);
    offset.add(Constants.WORLD_POS);

    return [lookat, offset];
  }

  public setFollowTarget(target: SystemObject) {
    this._thirdTarget = target;
    this._dummyRotate.copy(target.object.masterGrp);

    const rad = this._thirdTarget.drawRadius;
    this._baseOffset = new THREE.Vector3(rad * 5, rad * 2, -rad * 6);
    this._baseLookat = new THREE.Vector3(0, rad / 2, rad);
  }

  public third2Free() {
    this._thirdTarget.object.masterGrp.getWorldPosition(Constants.WORLD_POS);
    this.freeCtrl.target.set(Constants.WORLD_POS.x, Constants.WORLD_POS.y, Constants.WORLD_POS.z)

    this.third.getWorldPosition(this.free.position);
    this.third.getWorldQuaternion(this.free.quaternion)
  }

  public initListeners() {
    const keyHandler = (e: KeyboardEvent) => {
      this.rotateThird(e.key.toLowerCase());
    };

    let mousedown = false;
    const mouseDown = () => {
      mousedown = true;
    };
    const mouseUp = () => {
      mousedown = false;
    };
    const wheel = () => {
      // if (mousedown && e.altKey && !this.isFree) {
      if (!this.isFree) {  
        this.third2Free();
        this.activateFree();
      }
    };

    const mouseMove = () => {
      if (mousedown && !this.isFree) {
        this.third2Free();
        this.activateFree();
      }
    };

    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("wheel", wheel);
    window.addEventListener("keydown", keyHandler);
  }

  public activateThird() {
    Constants.CELESTIAL_ORB = true;
    this._active = this.third;
    this._isFree = false;
  }

  public activateFree() {
    Constants.CELESTIAL_ORB = false;
    this._active = this.free;
    this._isFree = true;
  }

  public update(delta: number) {
    if (this._thirdTarget) {
      const [lookat, offset] = this.calculateTarget();

      if (Constants.ORB_SCALE >= 100000000) {
        this._currentPosition.copy(offset);
      } else {
        const t = 1.0 - Math.pow(0.001, delta);
        this._currentPosition.lerp(offset, t);
      }
      this._currentLookat.copy(lookat);

      this.third.position.copy(this._currentPosition);
      this.third.lookAt(this._currentLookat);
    }

    this.freeCtrl.update();
  }
}
