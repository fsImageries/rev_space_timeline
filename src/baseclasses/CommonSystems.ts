import { Raycaster } from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { System } from "../ecs/System";
import { World } from "../ecs/World";
import { operand } from "../ecs/utils";
import Constants from "../helpers/Constants";
import { AxisRotComponent, OrbitRotComponent, RadiusComponent } from "./CelestialComponents";
import {
  BaseDataComponent,
  CameraComponent,
  RenderComponent,
  SceneComponent,
  SunTypeComponent,
  UniformsComponent
} from "./CommonComponents";
import { MeshComponent, RotGroupComponent, TransformGroupComponent } from "./MeshComponents";

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

      const axisVal = delta * axis.data.vel * Constants.ROT_SCALE;
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

      const val = delta * ocomp.data.vel * Constants.ORB_SCALE;
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
    [operand("exist", TransformGroupComponent), operand("exist", BaseDataComponent)],
    [operand("exist", CameraComponent)]
  ];

  constructor(world: World) {
    super(world);
    this.enabled = false;
  }

  execute(): void {
    const tar = this.world.store.focusTarget.toLowerCase();
    if (!this.queries || !tar) return;

    const ccomp = this.queries[1].entities[0].getComponent(CameraComponent);

    for (const entity of this.queries[0].entities) {
      //<- Tranform groups
      if (tar === entity.getComponent(BaseDataComponent).data.name.toLowerCase()) {
        entity.getComponent(TransformGroupComponent).data.group.getWorldPosition(Constants.WORLD_POS);
        const rad = entity.getComponent(RadiusComponent).data.drawRadius;
        console.log(rad);
        // TODO calculate view vector from object to light (nearest)
        ccomp.data.active.position.copy(Constants.WORLD_POS).x -=
          rad * (entity.getComponent(SunTypeComponent) ? 14 : 4);
        ccomp.data.freeCtrl?.target.copy(Constants.WORLD_POS);
        ccomp.data.freeCtrl?.update();
      }
    }
    this.enabled = false;
  }
}

export class RaycasterSystem extends System {
  static queries = [
    [operand("exist", MeshComponent), operand("exist", BaseDataComponent)],
    [operand("exist", CameraComponent)]
  ];

  execute(): void {
    if (!this.queries) return;

    const cam = this.queries[1].entities[0].getComponent(CameraComponent).data.active;
    const raycaster = this.world.store.raycaster as Raycaster;
    raycaster.setFromCamera(this.world.store.raypointer, cam);

    for (const entity of this.queries[0].entities) {
      const mesh = entity.getComponent(MeshComponent).data.mesh;
      const intersects = raycaster.intersectObject(mesh);
      if (intersects.length > 0) {
        const base = entity.getComponent(BaseDataComponent);
        this.world.store.focusTarget = base.data.name;
        const sys = this.world.sysManager.getSystem(CameraFocusSystem);
        if (!sys) return;
        sys.enabled = true;
      }
    }

    this.enabled = false;
  }
}
