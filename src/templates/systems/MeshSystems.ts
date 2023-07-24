import { Vector3 } from "three";
import { clamp, mapLinear } from "three/src/math/MathUtils";
import { Store } from "../../ecs/Store";
import { System } from "../../ecs/System";
import { operand } from "../../ecs/utils";
import GLOBALS from "../../helpers/Constants";
import { AxisRotComponent, DistanceToParentComponent, OrbitRotComponent, RadiusComponent } from "../components/CelestialComponents";
import {
  CameraComponent, ParticleRingTypeComponent, PlanetTypeComponent, SunTypeComponent,
  UniformsComponent
} from "../components/CommonComponents";
import {
  CSSMarkerComponent,
  MeshComponent,
  ParentComponent,
  RotGroupComponent,
  TransformGroupComponent
} from "../components/MeshComponents";
import {
  GravitationalObjectComponent, GravitationalObjectData
} from "../components/DynamicComponents"


export class AxisRotSystem extends System {
  static queries = [[operand("exist", AxisRotComponent), operand("exist", MeshComponent)]];
  execute(delta: number): void {
    for (const entity of this.queries[0].entities) {
      const axis = entity.getComponent(AxisRotComponent) as AxisRotComponent;
      const objGrp = entity.getComponent(MeshComponent) as MeshComponent;

      const axisVal = delta * axis.data.vel * Store.getInstance().state.ROT_SCALE;
      objGrp.data.mesh.rotation.y += axisVal;
    }
  }
}

export class OrbitRotSystem extends System {
  static queries = [[operand("exist", OrbitRotComponent), operand("exist", RotGroupComponent)]];
  execute(delta: number): void {
    if (!this.queries) return;

    for (const entity of this.queries[0].entities) {
      const ocomp = entity.getComponent(OrbitRotComponent);
      const rcomp = entity.getComponent(RotGroupComponent);

      const val = delta * ocomp.data.vel * Store.getInstance().state.ORB_SCALE;
      rcomp.data.group.rotation.y += val;
    }
  }
}

export class SunUniformsUpdateSystem extends System {
  static queries = [[operand("exist", UniformsComponent), operand("exist", SunTypeComponent)]];
  execute(_: number, time: number): void {
    for (const entity of this.queries[0].entities) {
      const ucomp = entity.getComponent(UniformsComponent);
      ucomp.data.time.value = time * 0.0001;
    }
  }
}

export class CSSMarkerSystem extends System {
  static queries = [
    [
      operand("exist", CSSMarkerComponent),
      operand("exist", TransformGroupComponent),
      operand("exist", RadiusComponent)
    ],
    [operand("exist", CameraComponent)]
  ];

  execute(): void {
    if (!this.queries) return;

    const cam = this.queries[1].entities[0].getComponent(CameraComponent).data.active;

    for (const entity of this.queries[0].entities) {
      const isParticleRing = entity.getComponent(ParticleRingTypeComponent);
      const trans = entity.getComponent(CSSMarkerComponent).data.mesh;
      // const trans = entity.getComponent(TransformGroupComponent).data.group;
      trans.getWorldPosition(GLOBALS.WORLD_POS);
      const dist = GLOBALS.WORLD_POS.distanceTo(cam.position);
      const rad = isParticleRing // TODO somewhat rework
        ? entity.getComponent(ParentComponent).data.parent.getComponent(RadiusComponent).data.drawRadius
        : entity.getComponent(RadiusComponent).data.drawRadius;
      const marker = entity.getComponent(CSSMarkerComponent).data.diamondDiv;
      const container = entity.getComponent(CSSMarkerComponent).data.containerDiv;

      if (!entity.getComponent(PlanetTypeComponent) && !entity.getComponent(SunTypeComponent)) {
        entity
          .getComponent(ParentComponent)
          .data.parent.getComponent(TransformGroupComponent)
          .data.group.getWorldPosition(GLOBALS.WORLD_POS);
        const dist2par = entity.getComponent(DistanceToParentComponent).data.drawX;
        const camDist = cam.position.distanceTo(GLOBALS.WORLD_POS);
        const maxd = dist2par * 100;
        container.style.opacity = camDist < maxd ? `${mapLinear(dist, maxd, 0, 0, 1)}` : "0";
        container.style.visibility = container.style.opacity === "0" ? "hidden" : "visible";
      }

      marker.style.opacity = dist < rad * 30 ? `${mapLinear(dist, rad * 2, rad * 30, 0, 1)}` : "1";
    }
  }
}

const ORIGIN = new Vector3(0, 0, 0); // TODO move to GLOBALS
const MAX = 50 * Store.getInstance().store.LIGHTYEAR * 1e-11;
const MIN = 25 * Store.getInstance().store.LIGHTYEAR * 1e-11;

export class CosmicMapStartTextSystem extends System {
  static queries = [[operand("exist", CameraComponent)]];

  execute(): void {
    if (!this.queries) return;

    const cam = this.queries[0].entities[0].getComponent(CameraComponent).data.active;
    let dist = cam.position.distanceTo(ORIGIN);
    dist = clamp(dist, MIN, MAX);
    dist = mapLinear(dist, MIN, MAX, 0, 1);
    const txt = document.getElementById("cosmicMapTItle");
    if (!txt) return;
    textOpacity(txt, dist);
  }
}

function textOpacity(el: HTMLElement, value: number) {
  el.style.opacity = value.toString();
  el.style.visibility = value <= 0 ? "hidden" : "visible";
}

export class InfoPanelCameraCoordSystem extends System {
  static queries = [[operand("exist", CameraComponent)]];

  execute(): void {
    if (!this.queries || !this.world.uiManager.infoPanel.visible) return;

    const cam = this.queries[0].entities[0].getComponent(CameraComponent).data.active;
    this.world.uiManager.infoPanel.coords = cam.position;
  }
}

const G = 6.674e+11
const NUM_STEPS = 100
export class BinaryStarSystem extends System {
  static queries = [[operand("exist", GravitationalObjectComponent)]];

  execute(delta:number): void {
    if (!this.queries) return;
    if (this.queries[0].entities.length != 2)
      throw new Error(`Binary System was called with ${this.queries[0].entities.length} items. I think you'll notice the error.`)

    const [s1, s2] = this.queries[0].entities
    const [gcomp1, gcomp2] = [s1.getComponent(GravitationalObjectComponent).data, s2.getComponent(GravitationalObjectComponent).data]
    
    for (let i = 0; i < NUM_STEPS; i++) {
      BinaryStarSystem.attract(gcomp1, gcomp2, delta)
      BinaryStarSystem.attract(gcomp2, gcomp1, delta)
  
      BinaryStarSystem.update(gcomp1)
      BinaryStarSystem.update(gcomp2)
    }
  }

  private static attract(self: GravitationalObjectData, other: GravitationalObjectData, delta:number) {
    if (!self.pos || !other.pos) return

    let f = self.pos.clone().sub(other.pos)
    const distSq = f.lengthSq()
    let strength = (G * (self.mass * other.mass)) / distSq
    strength = clamp(strength, 0, 1)
    f.setLength(strength)
    
    // apply force
    f = f.clone().divideScalar(other.mass).multiplyScalar(delta)
    other.acc.add(f)
  }

  private static update(self: GravitationalObjectData) {
    if (!self.pos) return

    // console.log(typeof self.vel)
    self.vel.add(self.acc)
    self.pos.add(self.vel)
    self.acc.setScalar(0)
  }
}