import * as THREE from "three";
import Constants from "../helpers/Constants";

export default function build(path:string = "./circle-info-solid.svg") {
  // Create Sprite
  const map = Constants.TEX_LOAD(path);
  const material = new THREE.SpriteMaterial({ map: map, transparent:true });
  const sprite = new THREE.Sprite(material);

  return sprite;
}