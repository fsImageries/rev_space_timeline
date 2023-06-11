import GUI from "lil-gui";
import * as THREE from "three";
import Constants from "../helpers/Constants";
import { getMasterGrp } from "../helpers/utils";
import { resizeRendererToDisplaySize } from "../helpers/utils";
import { Camera } from "./Camera";
import { InfoPanel } from "./InfoPanel";
import { System } from "../Models/System";

let lastTime: number;
const requiredElapsed = 1000 / 60; // desired interval is 60fps

export class World {
  canvas: HTMLElement;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  clock: THREE.Clock;
  delta: number;
  gridhelper: THREE.GridHelper;
  cam: Camera;

  gui: GUI;
  infoPanel: InfoPanel;

  clickPointer: THREE.Vector2;
  raycaster: THREE.Raycaster;

  systems: System[];
  curSystem: System;

  constructor(system: System, infoPanel: InfoPanel) {
    // Canvas, Renderer, Scene
    this.canvas = document.querySelector(`canvas#main`);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0x000000);
    this.scene = new THREE.Scene();

    this.cam = new Camera(this.canvas as HTMLCanvasElement, this);

    // Helper setup
    this.clock = new THREE.Clock();
    this.delta = 0;

    this.curSystem = system;
    this.systems = [system];

    this.clickPointer = new THREE.Vector2(Infinity, Infinity);
    this.raycaster = new THREE.Raycaster();

    // Init methods
    this.initListeners();

    this.gridhelper = new THREE.GridHelper(100, 100, "teal", "darkgray");
    this.gridhelper.scale.setScalar(10000);
    this.gridhelper.visible = false;
    this.scene.add(this.gridhelper);

    // Sky box
    const backgroundImage = Constants.TEX_LOAD("./starmap_8k.jpg");
    backgroundImage.mapping = THREE.EquirectangularReflectionMapping;
    backgroundImage.encoding = THREE.sRGBEncoding;
    this.scene.background = backgroundImage;

    this.scene.add(new THREE.AmbientLight("#ffffff", 0.03));

    this.curSystem.initWorld(this);
    this.infoPanel = infoPanel;
    infoPanel.init(this.curSystem);
  }

  public initGui() {
    // Gui
    this.gui = new GUI({ title: "Settings", width: 300 });
    const worldFolder = this.gui.addFolder("World");

    // worldFolder
    //   .add(Constants, "DISTANCE_SCALE")
    //   .min(0)
    //   .name("Distance scale")
    //   .onChange(() => {
    //     this.curSystem.init();
    //   });
    worldFolder
      .add(Constants, "TIME_SCALE")
      .min(0)
      .name("Time scale")
      .onChange((v: number) => {
        Constants.TIME_SCALE = v;
      });
    worldFolder.add(Constants, "ORB_SCALE").min(0).name("Orbital speed");
    worldFolder.add(Constants, "ROT_SCALE").min(0).name("Rotational speed");
    worldFolder.add(this, "topView").name("Top View");
    worldFolder.add(this.gridhelper, "visible").name("Grid visiblity");
    worldFolder.add(Constants, "MAN_CELESTIAL_ORB").name("Force Orb Rot");
  }

  public initListeners() {
    const dblclickHandler = (event: MouseEvent) => {
      this.clickPointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.clickPointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      let target = this.raycastTarget();
      if (!target) return;
      target = getMasterGrp(target);
      const obj = this.curSystem.getById(target.userData["id"]);
      if (!obj) return;
      this.cam.setFollowTarget(obj);
      this.cam.activateThird();
      this.cam.third2Free();
    };

    const clickHandler = (event: MouseEvent) => {
      if ((event.target as HTMLElement).id.includes("startBtn")) return;

      this.clickPointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.clickPointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const target = this.raycastTarget();
      if (!target) {
        this.infoPanel.visible = false;
        return;
      }
      const obj = this.curSystem.getById(getMasterGrp(target).userData["id"]);
      if (!obj) {
        this.infoPanel.visible = false;
        return;
      }

      // if (obj.data.type == "sun") {
      //   this.infoPanel.showAll(this.curSystem);
      //   return
      // }

      // console.log(target) // TODO react when something like glitterband is clicked
      if (target.name.includes("_infoSprite")) {
        this.infoPanel.show(obj);
        return;
      }

      if (this.infoPanel.visible) this.infoPanel.visible = false;
    };

    const keyHandler = (e: KeyboardEvent) => {
      this.cam.rotateThird(e.key.toLowerCase());
    };

    let mousedown = false;
    const mouseDown = () => {
      mousedown = true;
    };
    const mouseUp = () => {
      mousedown = false;
    };
    const mouesMove = (e: MouseEvent) => {
      if (mousedown && e.altKey && !this.cam.isFree) {
        this.cam.third2Free();
        this.cam.activateFree();
      }
    };

    window.addEventListener("dblclick", dblclickHandler);
    window.addEventListener("click", clickHandler);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("mousemove", mouesMove);
    window.addEventListener("keydown", keyHandler);
  }

  // World methods
  public update() {
    if (resizeRendererToDisplaySize(this.renderer)) {
      const canvas = this.renderer.domElement;
      this.cam.active.aspect = canvas.clientWidth / canvas.clientHeight;
      this.cam.active.updateProjectionMatrix();
    }

    this.curSystem.update(this);
    this.cam.update(this.delta);
    this.renderer.render(this.scene, this.cam.active);
  }

  static eventLoop(now: number, world: World) {
    window.requestAnimationFrame((n: number) => World.eventLoop(n, world));

    // delta time
    if (!lastTime) {
      lastTime = now;
    }
    const elapsed = now - lastTime;
    world.delta = world.clock.getDelta();

    if (elapsed > requiredElapsed) {
      world.update();
      lastTime = now;
    }
  }

  // Helper methods
  public raycastTarget() {
    this.raycaster.setFromCamera(this.clickPointer, this.cam.active);
    const intersects = this.raycaster.intersectObjects(this.curSystem.topGrp.children);
    this.clickPointer.set(Infinity, Infinity);

    if (intersects.length === 0) return undefined;

    return intersects[0].object;
  }

  public topView() {
    this.cam.activateFree();
    this.cam.freeCtrl.setTarget(0, 0, 0, true);
    this.cam.freeCtrl.setPosition(0, this.curSystem.radius * 4, 0);
  }
}
