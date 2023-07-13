import { Vector3 } from "three";
import {
  RenderComponent,
  SceneComponent,
  CameraComponent,
  DistanceToParentComponent,
  AxisRotComponent,
  BaseDataComponent,
  BaseDataData,
  RadiusComponent,
  CSSMarkerComponent,
  OrbitRotComponent,
  ParentComponent,
  ParentComponentData
} from "../baseclasses/imports";
import { World } from "../ecs/World";
import { Entity } from "../ecs/Entity";
import { SystemObjectData } from "../dataInterfaces";

export function initCommonEntities(world: World, camPos?: Vector3) {
  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getDefaults());

  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getDefaults());

  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getDefaults(camPos));
}

export function initCelestialComponents(entity: Entity, data: SystemObjectData, marker = true) {
  if (data.rotationPeriod) entity.addComponent(AxisRotComponent, AxisRotComponent.getDefaults(data.rotationPeriod));
  if (data.orbitalPeriod)
    entity.addComponent(OrbitRotComponent, OrbitRotComponent.getDefaults(data.orbitalPeriod, data.draw?.orbInvert)); // TODO combine common component assignments for easy reuse (sun) like asp with servicecollection
  if (data.distanceToParent)
    entity.addComponent(DistanceToParentComponent, DistanceToParentComponent.getDefaults(data.distanceToParent));
  if (data.parent) entity.addComponent(ParentComponent, ParentComponent.getDefaults() as ParentComponentData); // <- determine if dynamic?

  entity.addComponent(RadiusComponent, RadiusComponent.getDefaults(data.radius)).addComponent(BaseDataComponent, {
    name: data.name,
    uuid: crypto.randomUUID() as string,
    texts: data.texts,
    parent: data.parent
  } as BaseDataData);

  if (marker) entity.addComponent(CSSMarkerComponent);
}
