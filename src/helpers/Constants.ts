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

const GLOBALS = {
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

export default GLOBALS;
