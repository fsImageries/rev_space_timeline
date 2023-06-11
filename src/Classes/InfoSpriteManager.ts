import { Sprite } from "three";
import infoSpriteFactory from "../Factories/InfoSpriteFactory";
import SystemObject from "../Classes/SystemObject";

export class InfoSpriteManager {
  private _sprites: [Sprite, SystemObject][];

  public build(parents: SystemObject[]) {
    this._sprites = parents.map((obj) => {
      const infoSprite = infoSpriteFactory();
      infoSprite.name = `${obj.data.name}_infoSprite`;
      obj.object.parentGrp.add(infoSprite);
      return [infoSprite, obj];
    });
  }

  public init() {
    // Needs to run after the init function of its parents
    this._sprites.forEach(([sprite, obj]) => {
      const side = obj.object.orbit ? (obj.object.orbit.scale.x > 0 ? -1 : 1) : 1;
      const scale = obj.drawRadius / 6.5;
      sprite.scale.setScalar(scale);
      sprite.position.copy(obj.object.masterGrp.position).x += (obj.drawRadius + scale) * side;
    });
  }
}
