import { LoadingManager, Vector3, TextureLoader, Quaternion } from "three";

const manager = new LoadingManager();

// manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
// 	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
// };

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
  LOAD_MANAGER: manager,
  WORLD_QUAT: new Quaternion(),
  WORLD_QUAT2: new Quaternion(),
};

export default Constants;
