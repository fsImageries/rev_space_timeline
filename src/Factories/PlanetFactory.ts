import {
  AdditiveBlending,
  BackSide,
  Color,
  Group,
  Mesh,
  MeshPhongMaterial,
  NearestFilter,
  ShaderMaterial
} from "three";
import {
  AtmoComponent, MeshComponent,
  OrbitLineComponent, PlanetTypeComponent, RotGroupComponent,
  TransformGroupComponent
} from "../baseclasses/imports";
import { Entity } from "../ecs/Entity";
import GLOBALS from "../helpers/Constants";

import { initCelestialComponents } from "../Levels/Common";
import { MoonTypeComponent } from "../baseclasses/CommonComponents";
import { DrawData, SystemObjectData } from "../dataInterfaces";
import atmoFrag from "./../glsl/planet_atmo.frag.glsl?raw";
import atmoVert from "./../glsl/planet_atmo.vert.glsl?raw";
import { buildOrbit } from "./OrbitFactory";

export function buildPlanet(entity: Entity, data: SystemObjectData) {
  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}_components`);

  const [mesh, atmo, transformGrp, rotGrp] = buildMeshes(data);
  const orbit = buildOrbit(data.draw as DrawData);

  entity
    // .addComponent(UniformsComponent, uniforms)
    .addComponent(MeshComponent, { mesh: mesh as Mesh })
    .addComponent(TransformGroupComponent, TransformGroupComponent.getDefaults(transformGrp))
    .addComponent(RotGroupComponent, RotGroupComponent.getDefaults(rotGrp, data.draw?.initRot)) // implement random start rot
    .addComponent(AtmoComponent, { mesh: atmo })
    .addComponent(OrbitLineComponent, { mesh: orbit })
    
    initCelestialComponents(entity, data)

  data.type === "planet" ? entity.addComponent(PlanetTypeComponent) : entity.addComponent(MoonTypeComponent);

  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}_components`);

  return entity;
}

function buildMeshes(data: SystemObjectData): [Mesh, Mesh, Group, Group] {
  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}_meshes`);

  const albedo = GLOBALS.TEX_LOAD(data.draw?.albedoPath as string);
  albedo.magFilter = NearestFilter;

  const normal = GLOBALS.TEX_LOAD(data.draw?.normalPath as string);
  normal.magFilter = NearestFilter;

  const sphereMaterial = new MeshPhongMaterial({
    map: albedo,
    normalMap: normal
  });

  const mesh = new Mesh(GLOBALS.SPHERE_GEOM, sphereMaterial);
  mesh.castShadow = true;
  mesh.name = `${data.name}_mesh`;

  const uniforms = {
    intensityMult: { value: data.draw?.glowIntensity as number },
    glowColor: { value: new Color(parseInt(data.draw?.glowColor as string)) }
  };

  const atmoMat = new ShaderMaterial({
    uniforms,
    vertexShader: atmoVert,
    fragmentShader: atmoFrag,
    side: BackSide,
    blending: AdditiveBlending,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -4
  });

  const atmo = new Mesh(GLOBALS.SPHERE_GEOM, atmoMat);
  atmo.name = `${data.name}_atmo`;
  // atmo.castShadow = true;
  atmo.scale.setScalar(1.025);

  const transformGrp = new Group();
  transformGrp.name = `${data.name}_transformGrp`;

  const rotGrp = new Group();
  rotGrp.name = `${data.name}_rotGrp`;

  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}_meshes`);
  return [mesh, atmo, transformGrp, rotGrp];
}
