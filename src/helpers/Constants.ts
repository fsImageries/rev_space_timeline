import { LoadingManager, Quaternion, TextureLoader, Vector3 } from "three";

const manager = new LoadingManager();

manager.onStart = function ( url ) {
	console.log( 'Started loading file: ' + url );
};

manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
};

// manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
// 	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
// };

manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};


const Constants = {
  DISTANCE_SCALE: 3000000,
  SIZE_SCALE: 10,
  ORB_SCALE: 1000000,
  ROT_SCALE: 10000,
  CAM_ROT_SPEED: Math.PI / 64,

  _time_scale: 1,
  get TIME_SCALE() { return this._time_scale; },
  set TIME_SCALE(v: number) {
    this.ROT_SCALE = v;
    this.ORB_SCALE = v;
    this._time_scale = v;
  },

  CELESTIAL_ORB: true,
  MAN_CELESTIAL_ORB: false,

  WORLD_POS: new Vector3(),
  CAM_POS: new Vector3(),
  TEX_LOADER: new TextureLoader(manager),
  TEX_LOAD(path:string) {
    __tex.push(path)
    return this.TEX_LOADER.load(path)
    // const map = this.TEX_LOADER.load(path)
    // const tex = new CanvasTexture(map)
    // tex.needsUpdate = true
    // return tex
  },
  LOAD_MANAGER: manager,
  WORLD_QUAT: new Quaternion(),
  WORLD_QUAT2: new Quaternion(),
};

const __tex = []

export default Constants;
