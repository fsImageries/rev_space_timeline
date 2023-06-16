import { LoadingManager, Quaternion, TextureLoader, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const manager = new LoadingManager();

manager.onError = function (url) {
  console.error("There was an error loading " + url);
};


const Constants = {
  DISTANCE_SCALE: 100000,
  SIZE_SCALE: 100,
  ORB_SCALE: 1000000,
  ROT_SCALE: 10000,
  CAM_ROT_SPEED: Math.PI / 64,

  _time_scale: 1,
  get TIME_SCALE() {
    return this._time_scale;
  },
  set TIME_SCALE(v: number) {
    this.ROT_SCALE = v;
    this.ORB_SCALE = v;
    this._time_scale = v;
  },

  CELESTIAL_ORB: true,
  MAN_CELESTIAL_ORB: false,

  GLTF_LOADER: new GLTFLoader(manager),
  TEX_LOADER: new TextureLoader(manager),
  TEX_LOAD(path: string) {
    __tex.push(path);
    return this.TEX_LOADER.load(path);
    // const map = this.TEX_LOADER.load(path)
    // const tex = new CanvasTexture(map)
    // tex.needsUpdate = true
    // return tex
  },
  LOAD_MANAGER: manager,

  WORLD_POS: new Vector3(),
  CAM_POS: new Vector3(),
  WORLD_QUAT: new Quaternion(),
  WORLD_QUAT2: new Quaternion(),

  HOME_BTN: document.getElementById("home")
};

const __tex = [];

export default Constants;
