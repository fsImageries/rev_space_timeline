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

  __OUT_WORLD__POS: new Vector3(),
  __OUT_CAM_POS: new Vector3(),
  __TEX_LOADER: new TextureLoader(),
  __OUT_WORLD_QUAT: new Quaternion()
};

export default Constants;
