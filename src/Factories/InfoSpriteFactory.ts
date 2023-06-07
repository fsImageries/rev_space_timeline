import * as THREE from "three";
import Constants from "../helpers/Constants";

export default function build() {
  // Create Sprite
  const map = Constants.TEX_LOADER.load("/circle-info-solid.svg");
  const material = new THREE.SpriteMaterial({ map: map });
  const sprite = new THREE.Sprite(material);

  return sprite;
}
