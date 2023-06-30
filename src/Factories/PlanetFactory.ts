import { SystemObjectData } from "../jsonInterfaces";

import { randFloat } from "three/src/math/MathUtils";
import Constants from "../helpers/Constants";
import atmoFrag from "./../glsl/planet_atmo.frag.glsl?raw";
import atmoVert from "./../glsl/planet_atmo.vert.glsl?raw";
import { AdditiveBlending, BackSide, Color, Group, Mesh, MeshPhongMaterial, NearestFilter, ShaderMaterial, Vector3 } from "three";
import { Entity } from "../ecs/Entity";
import { AxisRotComponent, DistanceToParentComponent, RadiusComponent } from "../baseclasses/CelestialComponents";
import { BaseDataComponent, BaseDataData, PlanetTypeComponent, UniformsComponent, UniformsData } from "../baseclasses/CommonComponents";
import { AtmoComponent, MeshComponent, RotGroupComponent, TransformGroupComponent } from "../baseclasses/MeshComponents";

export function buildPlanet(entity: Entity, data: SystemObjectData) {
    Constants.LOAD_MANAGER.itemStart(`://${data.name}_components`);

    const [mesh, atmo, transformGrp, rotGrp, uniforms] = buildMeshes(data)

    if (data.rotationPeriod) entity.addComponent(AxisRotComponent, AxisRotComponent.getDefaults(data.rotationPeriod));
    if (data.distanceToParent)
        entity.addComponent(DistanceToParentComponent, DistanceToParentComponent.getDefaults(data.distanceToParent));

    entity
        .addComponent(UniformsComponent, uniforms)
        .addComponent(MeshComponent, { mesh: mesh as Mesh })
        .addComponent(TransformGroupComponent, TransformGroupComponent.getDefaults(transformGrp))
        .addComponent(RotGroupComponent, RotGroupComponent.getDefaults(rotGrp, data.draw?.initRot)) // implement random start rot
        .addComponent(AtmoComponent, {mesh:atmo})
        .addComponent(RadiusComponent, RadiusComponent.getDefaults(data.radius))
        .addComponent(BaseDataComponent, {
            name: data.name,
            uuid: crypto.randomUUID() as string,
            texts: data.texts
        } as BaseDataData)
        .addComponent(PlanetTypeComponent);


    Constants.LOAD_MANAGER.itemEnd(`://${data.name}_components`);

    return entity;
}

function buildMeshes(data: SystemObjectData): [Mesh, Mesh, Group, Group, UniformsData] {
    Constants.LOAD_MANAGER.itemStart(`://${data.name}_meshes`);

    const albedo = Constants.TEX_LOAD(data.draw?.albedoPath as string);
    albedo.magFilter = NearestFilter;

    const normal = Constants.TEX_LOAD(data.draw?.normalPath as string);
    normal.magFilter = NearestFilter;

    const sphereMaterial = new MeshPhongMaterial({
        map: albedo,
        normalMap: normal
    });

    const mesh = new Mesh(Constants.SPHERE_GEOM, sphereMaterial);
    mesh.castShadow = true;
    mesh.name = `${data.name}_mesh`;

    const uniforms = {
        intensityMult: { value: data.draw?.glowIntensity as number },
        viewVector: { value: new Vector3() },
        glowColor: { value: new Color(parseInt(data.draw?.glowColor as string)) }
        // glowColor: { value: new Color(0xffffff) }
    }

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

    const atmo = new Mesh(Constants.SPHERE_GEOM, atmoMat);
    atmo.name = `${data.name}_atmo`;
    // atmo.castShadow = true;
    atmo.scale.setScalar(1.025);

    const transformGrp = new Group();
    transformGrp.name = `${data.name}_transformGrp`;

    const rotGrp = new Group();
    rotGrp.name = `${data.name}_rotGrp`;

    Constants.LOAD_MANAGER.itemEnd(`://${data.name}_meshes`);
    return [mesh, atmo, transformGrp, rotGrp, uniforms];
}