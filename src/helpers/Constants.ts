import { Vector3, TextureLoader, Quaternion } from "three";

const Constants = {
  DISTANCE_SCALE: 3000000,
  SIZE_SCALE: 10,
  ROT_SCALE: 1,
  ORB_SCALE: 1,

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

  WORLD_POS: new Vector3(),
  CAM_POS: new Vector3(),
  TEX_LOADER: new TextureLoader(),
  WORLD_QUAT: new Quaternion()


};

export default Constants;
