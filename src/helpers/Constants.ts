import {
  LoadingManager,
  Quaternion,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  Texture,
  TextureLoader,
  Vector3
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const manager = new LoadingManager();

manager.onError = function (url) {
  console.error("There was an error loading " + url);
};

const Constants = {
  LIGHTYEAR: 9.461e12,
  DISTANCE_SCALE: 3e-8,
  SIZE_SCALE: 1e-5,
  ORB_SCALE: 200,
  ROT_SCALE: 10,
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
    if (!(path in __tex)) __tex[path] = this.TEX_LOADER.load(path);
    return __tex[path];
  },
  SPRITE_LOAD(path = "./circle-info-solid.svg") {
    const map = this.TEX_LOAD(path);
    const mat = new SpriteMaterial({ map: map, transparent: true });
    return new Sprite(mat);
  },
  LOAD_MANAGER: manager,

  WORLD_POS: new Vector3(),
  CAM_POS: new Vector3(),
  WORLD_QUAT: new Quaternion(),
  WORLD_QUAT2: new Quaternion(),
  SPHERE_GEOM: new SphereGeometry(1, 30, 30)
};

const __tex: { [key: string]: Texture } = {};

export default Constants;
