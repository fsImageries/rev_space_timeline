import { Vector3 } from "three";
import { System } from "../ecs/System";
import { operand } from "../ecs/utils";
import Constants from "../helpers/Constants";
import { AxisRotComponent } from "./CelestialComponents";
import { BaseDataComponent, CameraComponent, PlanetTypeComponent, RenderComponent, SceneComponent, SunTypeComponent, UniformsComponent } from "./CommonComponents";
import { AtmoComponent, MeshComponent, TransformGroupComponent } from "./MeshComponents";

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
      const renderer = rcomp.data.renderer;
      const cameraa = ccomp.data.active;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        cameraa.aspect = canvas.clientWidth / canvas.clientHeight;
        cameraa.updateProjectionMatrix();
      }

      ccomp.data.freeCtrl?.update()
      rcomp.data.renderer.clear();
      rcomp.data.renderer.render(scomp.data.scene, ccomp.data.active);
    }
  }
}

export function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

export class AxisRotSystem extends System {
  static queries = [[operand("exist", AxisRotComponent), operand("exist", MeshComponent)]];
  execute(delta: number): void {
    for (const entity of this.queries[0].entities) {
      const axis = entity.getComponent(AxisRotComponent) as AxisRotComponent;
      const objGrp = entity.getComponent(MeshComponent) as MeshComponent;

      const axisVal = delta * axis.data.rotVel * Constants.ROT_SCALE;
      objGrp.data.mesh.rotation.y += axisVal;
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

export class PlanetUniformsUpdateSystem extends System {
  static queries = [
    [operand("exist", UniformsComponent), operand("exist", PlanetTypeComponent)],
    [operand("exist", CameraComponent)]
  ];
  execute(_:number, time:number): void {
    if (!this.queries) return
    const ccomp = this.queries[1].entities[0].getComponent(CameraComponent)
    const cam = ccomp.data.active.getWorldPosition(Constants.CAM_POS)
    // const cam = new Vector3()
        
    for (const entity of this.queries[0].entities) {
      const ucomp = entity.getComponent(UniformsComponent);
      const acomp = entity.getComponent(AtmoComponent);
      
      
      (ucomp.data.viewVector.value as Vector3).subVectors(ccomp.data.active.getWorldPosition(Constants.CAM_POS), acomp.data.mesh.getWorldPosition(Constants.WORLD_POS));
    }
  }
}

export class CameraFocusSystem extends System {
  static queries = [
    [operand("exist", TransformGroupComponent), operand("exist", BaseDataComponent)],
    [operand("exist", CameraComponent)]
  ];

  execute(): void {
    if (!this.world.needsFocus || !this.queries) return
    const tar = this.world.focus
    if (!tar) return

    const ccomp = this.queries[1].entities[0].getComponent(CameraComponent)

    for (const entity of this.queries[0].entities) { //<- Tranform groups
      if (tar === entity.getComponent(BaseDataComponent).data.name) {
        entity.getComponent(TransformGroupComponent).data.group.getWorldPosition(Constants.WORLD_POS)
        ccomp.data.freeCtrl?.target.copy(Constants.WORLD_POS)
        ccomp.data.freeCtrl?.update() // need to implement system?
      }
    }

    this.world.needsFocus = false
  }
}