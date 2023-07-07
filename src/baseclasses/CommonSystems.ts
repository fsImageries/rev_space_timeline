import { Raycaster, Vector3 } from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { System } from "../ecs/System";
import { World } from "../ecs/World";
import { operand } from "../ecs/utils";
import GLOBALS from "../helpers/Constants";
import {
  AxisRotComponent,
  CSSMarkerComponent,
  CosmicMapSunTextComponent,
  DistanceToParentComponent,
  OrbitRotComponent,
  ParentComponent,
  ParticleRingTypeComponent,
  PlanetTypeComponent,
  RadiusComponent
} from "./imports";
import {
  BaseDataComponent,
  CameraComponent,
  RenderComponent,
  SceneComponent,
  SunTypeComponent,
  UniformsComponent
} from "./imports";
import { MeshComponent, RotGroupComponent, TransformGroupComponent } from "./imports";
import { clamp, mapLinear } from "three/src/math/MathUtils";
import { Store } from "../ecs/Store";

const requiredElapsed = 1000 / 60; // desired interval is 60fps
export class RenderSystem extends System {
  static queries = [
    [operand("exist", RenderComponent)],
    [operand("exist", SceneComponent)],
    [operand("exist", CameraComponent)]
  ];
  execute(delta: number): void {
    const [render, scene, camera] = [
      this.queries[0].entities[0],
      this.queries[1].entities[0],
      this.queries[2].entities[0]
    ];
    const rcomp = render.getComponent(RenderComponent) as RenderComponent;
    const scomp = scene.getComponent(SceneComponent) as SceneComponent;
    const ccomp = camera.getComponent(CameraComponent) as CameraComponent;

    if (delta > requiredElapsed) {
      const renderer = rcomp.data.renderer3d;
      const renderer2d = rcomp.data.renderer2d;
      const cameraa = ccomp.data.active;

      if (resizeRendererToDisplaySize(renderer, renderer2d)) {
        const canvas = renderer.domElement;
        cameraa.aspect = canvas.clientWidth / canvas.clientHeight;
        cameraa.updateProjectionMatrix();
      }

      ccomp.data.freeCtrl?.update();
      rcomp.data.renderer3d.clear();
      renderer.render(scomp.data.scene, ccomp.data.active);
      renderer2d.render(scomp.data.scene, ccomp.data.active);
    }
  }
}

export function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer, renderer2d: CSS2DRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
    renderer2d.setSize(width, height);
  }
  return needResize;
}

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

export class CameraFocusSystem extends System {
  static queries = [
    [operand("exist", TransformGroupComponent), operand("exist", BaseDataComponent), operand("exist", RadiusComponent)],
    [operand("exist", CameraComponent)]
  ];

  constructor(world: World) {
    super(world);
    this.enabled = false;
  }

  execute(): void {
    const tar = Store.getInstance().store.focusTarget.toLowerCase();
    if (!this.queries || !tar) return;

    const ccomp = this.queries[1].entities[0].getComponent(CameraComponent);

    if (Store.getInstance().state.camPos) {
      ccomp.data.active.position.copy(Store.getInstance().state.camPos);
    }

    for (const entity of this.queries[0].entities) {
      if (tar === entity.getComponent(BaseDataComponent).data.name.toLowerCase()) {
        entity.getComponent(TransformGroupComponent).data.group.getWorldPosition(GLOBALS.WORLD_POS);
        const rad = entity.getComponent(RadiusComponent).data.drawRadius;

        // TODO calculate view vector from object to light (nearest)
        ccomp.data.active.position.copy(GLOBALS.WORLD_POS).x -= rad * (entity.getComponent(SunTypeComponent) ? 14 : 4);
        ccomp.data.freeCtrl?.target.copy(GLOBALS.WORLD_POS.clone());
        ccomp.data.freeCtrl?.update();
      }
    }
    this.enabled = false;
  }
}

export class FocusRaycasterSystem extends System {
  static queries = [
    [operand("exist", MeshComponent), operand("exist", BaseDataComponent)],
    [operand("exist", CameraComponent)]
  ];

  constructor(world: World) {
    super(world);
    // this.enabled = false;
  }

  execute(): void {
    if (!this.queries) return;

    const cam = this.queries[1].entities[0].getComponent(CameraComponent).data.active;
    const raycaster = Store.getInstance().store.raycaster as Raycaster;
    raycaster.setFromCamera(Store.getInstance().store.raypointer, cam);

    for (const entity of this.queries[0].entities) {
      const mesh = entity.getComponent(MeshComponent).data.mesh;
      let intersects = raycaster.intersectObject(mesh);
      if (intersects.length === 0) {
        // TODO build general text component, check for that and get texts if necessary
        const hasTxt = entity.getComponent(CosmicMapSunTextComponent);
        if (hasTxt) {
          intersects = raycaster.intersectObjects([hasTxt.data.title, hasTxt.data.texts]);
        }
      }

      if (intersects.length > 0) {
        const base = entity.getComponent(BaseDataComponent);
        Store.getInstance().store.focusTarget = base.data.name;
        const sys = this.world.sysManager.getSystem(CameraFocusSystem);
        if (!sys) return;
        sys.enabled = true;
      }
    }
    this.enabled = false;
  }
}

export class SwitchRaycasterSystem extends System {
  static queries = [
    [operand("exist", MeshComponent), operand("exist", BaseDataComponent)],
    [operand("exist", CameraComponent)]
  ];

  constructor(world: World) {
    super(world);
    // this.enabled = false;
  }

  execute(): void {
    if (!this.queries) return;

    const cam = this.queries[1].entities[0].getComponent(CameraComponent).data.active;
    const raycaster = Store.getInstance().store.raycaster as Raycaster;
    raycaster.setFromCamera(Store.getInstance().store.raypointer, cam);

    for (const entity of this.queries[0].entities) {
      const mesh = entity.getComponent(MeshComponent).data.mesh;
      let intersects = raycaster.intersectObject(mesh);
      if (intersects.length === 0) {
        // TODO build general text component, check for that and get texts if necessary
        const hasTxt = entity.getComponent(CosmicMapSunTextComponent);
        if (hasTxt) {
          intersects = raycaster.intersectObjects([hasTxt.data.title, hasTxt.data.texts]);
        }
      }

      if (intersects.length > 0) {
        const base = entity.getComponent(BaseDataComponent);
        this.world.lvlManager.openLevel(base.data.name);
      }
    }
    this.enabled = false;
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

const ORIGIN = new Vector3(0, 0, 0);
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
