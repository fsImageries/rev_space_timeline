import { Group, Mesh, ShaderMaterial } from "three";
import { initCelestialComponents } from "../Levels/Common";
import {
  MeshComponent,
  PointLightComponent,
  RotGroupComponent,
  TransformGroupComponent
} from "../baseclasses/MeshComponents";
import { SunTypeComponent, UniformsComponent, UniformsData } from "../baseclasses/imports";
import { SunData } from "../dataInterfaces";
import { Entity } from "../ecs/Entity";
import { Store } from "../ecs/Store";
import GLOBALS from "../helpers/Constants";
import sunFrag from "./../glsl/sun_frag.glsl?raw";
import sunVert from "./../glsl/sun_vert.glsl?raw";

export function buildSun(entity: Entity, data: SunData, marker = true) {
  // GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}`);
  const [mesh, transformGrp, rotGrp, uniforms] = buildMeshes(data);

  // if (data.rotationPeriod) entity.addComponent(AxisRotComponent, AxisRotComponent.getDefaults(data.rotationPeriod));
  if (!data.disableLight) entity.addComponent(PointLightComponent, PointLightComponent.getDefaults("#fff", 1, 1e5));
  // if (data.distanceToParent)
  //   entity.addComponent(DistanceToParentComponent, DistanceToParentComponent.getDefaults(data.distanceToParent));

  entity
    .addComponent(UniformsComponent, uniforms)
    .addComponent(MeshComponent, { mesh: mesh as Mesh })
    .addComponent(TransformGroupComponent, TransformGroupComponent.getDefaults(transformGrp))
    .addComponent(RotGroupComponent, RotGroupComponent.getDefaults(rotGrp, data.draw?.initRot))
    // .addComponent(RadiusComponent, RadiusComponent.getDefaults(data.radius))
    // .addComponent(BaseDataComponent, {
    //   name: data.name,
    //   uuid: crypto.randomUUID() as string,
    //   texts: data.texts
    // } as BaseDataData)
    .addComponent(SunTypeComponent);

  initCelestialComponents(entity, data, marker);

  // GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}`);
  return entity;
}

function buildMeshes(data: SunData): [Mesh, Group, Group, UniformsData] {
  const uniforms = {
    time: { value: 1.0 },
    scale: { value: 2.5 },
    highTemp: { value: data.highTemp },
    lowTemp: { value: data.lowTemp }
  };

  const mat = new ShaderMaterial({
    uniforms: uniforms,
    vertexShader: sunVert,
    fragmentShader: sunFrag,
    depthWrite: true,
    depthTest: true,
    transparent: false
  });

  const mesh = new Mesh(GLOBALS.SPHERE_GEOM, mat);
  mesh.scale.setScalar(data.radius * Store.getInstance().state.SIZE_SCALE);
  mesh.name = `${data.name}_mesh`;

  const transformsGrp = new Group();
  const rotGrp = new Group();
  transformsGrp.name = `${data.name}_transformGrp`;
  rotGrp.name = `${data.name}_rotGrp`;

  return [mesh, transformsGrp, rotGrp, uniforms];
}
