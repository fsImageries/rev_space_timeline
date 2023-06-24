// import GUI from "lil-gui";
// import * as THREE from "three";
// import systemFactoryAsync from "../Factories/SystemFactory";
// import { System } from "../Models/System";
// import celestialData from "../data/object_data.yaml";
// import Constants from "../helpers/Constants";
// import { resizeRendererToDisplaySize } from "../helpers/utils";
// import { SystemsData, TextObject } from "../jsonInterfaces";
// import { Camera } from "./Camera";
// import { ClickManager } from "./ClickManager";

// const DATA = celestialData as SystemsData;
// let lastTime: number;
// const requiredElapsed = 1000 / 60; // desired interval is 60fps
// export class World {
//   canvas: HTMLElement;
//   renderer: THREE.WebGLRenderer;
//   scene: THREE.Scene;
//   clock: THREE.Clock;
//   delta: number;
//   gridhelper: THREE.GridHelper;
//   cam: Camera;

//   gui: GUI;
//   clickManager: ClickManager;

//   clickPointer: THREE.Vector2;
//   raycaster: THREE.Raycaster;

//   systems: [System, TextObject[]][];
//   curSystem: System;

//   firstLoad: boolean;

//   constructor() {
//     // Canvas, Renderer, Scene
//     this.canvas = document.querySelector(`canvas#main`);
//     this.renderer = new THREE.WebGLRenderer({
//       canvas: this.canvas,
//       antialias: true,
//       alpha: true,
//       logarithmicDepthBuffer: true
//     });
//     this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     this.renderer.shadowMap.enabled = true;
//     this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     this.renderer.setClearColor(0x000000);
//     this.scene = new THREE.Scene();

//     this.cam = new Camera(this.canvas as HTMLCanvasElement, this);

//     // Helper setup
//     this.clock = new THREE.Clock();
//     this.delta = 0;

//     // this.curSystem = system;
//     this.systems = [];

//     this.clickPointer = new THREE.Vector2(Infinity, Infinity);
//     this.raycaster = new THREE.Raycaster();

//     // Init methods

//     this.gridhelper = new THREE.GridHelper(100, 100, "teal", "darkgray");
//     this.gridhelper.scale.setScalar(10000);
//     this.gridhelper.visible = false;
//     this.scene.add(this.gridhelper);

//     // Sky box
//     const backgroundImage = Constants.TEX_LOAD("./starmap_8k.jpg");
//     backgroundImage.mapping = THREE.EquirectangularReflectionMapping;
//     backgroundImage.encoding = THREE.sRGBEncoding;
//     this.scene.background = backgroundImage;

//     this.scene.add(new THREE.AmbientLight("#ffffff", 0.03));
//     this.clickManager = new ClickManager(this);
//   }

//   public initSys(system: System, data: { freeCam: boolean; texts: TextObject[] }) {
//     this.curSystem = system;
//     this.curSystem.initWorld(this, data.freeCam);
//     Constants.UIMANAGER.infoPanel.init(this.curSystem, data.texts);
//     Constants.UIMANAGER.infoPanel.writeFullTimeline(system);
//     Constants.UIMANAGER.homeBtn.style.visibility = system.name == "cosmicMap" ? "hidden" : "visible";
//     if (!this.systems.find((sys) => sys[0].name == system.name)) this.systems.push([system, data.texts]);
//   }

//   public initGui() {
//     // Gui
//     this.gui = new GUI({ title: "Settings", width: 300 });
//     const worldFolder = this.gui.addFolder("World");

//     // worldFolder
//     //   .add(Constants, "DISTANCE_SCALE")
//     //   .min(0)
//     //   .name("Distance scale")
//     //   .onChange(() => {
//     //     this.curSystem.init();
//     //   });
//     worldFolder
//       .add(Constants, "TIME_SCALE")
//       .min(0)
//       .name("Time scale")
//       .onChange((v: number) => {
//         Constants.TIME_SCALE = v;
//       });
//     worldFolder.add(Constants, "ORB_SCALE").min(0).name("Orbital speed");
//     worldFolder.add(Constants, "ROT_SCALE").min(0).name("Rotational speed");
//     worldFolder.add(this, "topView").name("Top View");
//     worldFolder.add(this.gridhelper, "visible").name("Grid visiblity");
//     worldFolder.add(Constants, "MAN_CELESTIAL_ORB").name("Force Orb Rot");
//     worldFolder.add(this, "logCamera").name("Log Camera");

//     this.gui.close();

//     // TODO decouple this and put it into the system on startup
//     this.cam.free.position.set(0, 2117.999902022348, -10175.846962935977);
//     this.cam.freeCtrl.update();
//   }

//   public logCamera() {
//     console.log(this.cam.active.position);
//     console.log(this.cam.active.rotation);
//   }

//   public async switchSystem(name: string) {
//     const found = this.systems.find(([s, _]) => s.name == name);
//     const old = this.curSystem;
//     if (!found) {
//       const d = DATA.systems.find((s) => s.name == name);
//       if (d) this.initSys(await systemFactoryAsync(d), { freeCam: d.freeCam, texts: d.texts });
//     }
//     // TODO inject text for cosmic map somehow
//     else this.initSys(found[0], { freeCam: false, texts: found[1] });

//     this.scene.remove(old.topGrp);
//     this.scene.add(this.curSystem.topGrp);
//     this.cam.stopWheel = true;
//     Constants.UIMANAGER.cornerButton.switch("help");

//     // wheel event fires after switch and destroys the floating animation, so we disable it
//     setTimeout(() => {
//       this.cam.stopWheel = false;
//     }, 1500);
//   }

//   public update() {
//     if (resizeRendererToDisplaySize(this.renderer)) {
//       const canvas = this.renderer.domElement;
//       this.cam.active.aspect = canvas.clientWidth / canvas.clientHeight;
//       this.cam.active.updateProjectionMatrix();
//     }

//     this.curSystem.update(this);
//     this.cam.update(this.delta);
//     this.renderer.clear();
//     this.renderer.render(this.scene, this.cam.active);
//   }

//   static eventLoop(now: number, world: World) {
//     // delta time
//     if (!lastTime) {
//       lastTime = now;
//     }
//     const elapsed = now - lastTime;
//     world.delta = world.clock.getDelta();

//     if (elapsed > requiredElapsed) {
//       world.update();
//       lastTime = now;
//     }

//     requestAnimationFrame((n: number) => World.eventLoop(n, world));
//   }

//   // Helper methods
//   public topView() {
//     this.cam.activateFree();
//     // this.cam.freeCtrl.setTarget(0, 0, 0, true);
//     // this.cam.freeCtrl.setPosition(0, this.curSystem.radius * 4, 0);

//     this.cam.freeCtrl.target.set(0, 0, 0);
//     this.cam.free.position.set(0, this.curSystem.radius * 4, 0);
//   }
// }
