import { Group, Mesh, ShaderMaterial, SphereGeometry } from "three";
import { AxisRotComponent, DistanceToParentComponent } from "../baseclasses/CelestialComponents";
import { BaseDataComponent, SunTypeComponent, UniformsComponent, UniformsData } from "../baseclasses/CommonComponents";
import { MeshComponent, ObjectGroupComponent, PointLightComponent, RadiusComponent, RotGroupComponent } from "../baseclasses/MeshComponents";
import { Entity } from "../ecs/Entity";
import Constants from "../helpers/Constants";
import { SunData } from "../jsonInterfaces";
import sunFrag from "./../glsl/sun_frag.glsl?raw";
import sunVert from "./../glsl/sun_vert.glsl?raw";

const GEOM = new SphereGeometry(1, 30, 30);

export function buildSun(entity: Entity, data: SunData) {
    const [mesh, objectGrp, rotGrp, uniforms] = buildMeshes(data)

    Constants.LOAD_MANAGER.itemStart(`://${data.name}_components`);
    if (data.rotationPeriod) entity.addComponent(AxisRotComponent, AxisRotComponent.getDefaults(data.rotationPeriod))
    if (!data.disableLight) entity.addComponent(PointLightComponent, PointLightComponent.getDefaults("#fff", 1, 100))
    if (data.distanceToParent)
        entity.addComponent(DistanceToParentComponent, DistanceToParentComponent.getDefaults(data.distanceToParent))

    entity
        .addComponent(UniformsComponent, uniforms)
        .addComponent(MeshComponent, { mesh: mesh as Mesh })
        .addComponent(ObjectGroupComponent, ObjectGroupComponent.getDefaults(objectGrp))
        .addComponent(RotGroupComponent, RotGroupComponent.getDefaults(rotGrp))
        .addComponent(RadiusComponent, RadiusComponent.getDefaults(data.radius))
        .addComponent(BaseDataComponent, { name: data.name, uuid: crypto.randomUUID() as string })
        .addComponent(SunTypeComponent)

    Constants.LOAD_MANAGER.itemStart(`://${data.name}_components`);

    return entity
}

function buildMeshes(data: SunData): [Mesh, Group, Group, UniformsData] {
    Constants.LOAD_MANAGER.itemStart(`://${data.name}_planet`);

    const uniforms = {
        time: { value: 1.0 },
        scale: { value: 2.5 },
        highTemp: { value: data.highTemp },
        lowTemp: { value: data.lowTemp }
    }

    const mat = new ShaderMaterial({
        uniforms: uniforms,
        vertexShader: sunVert,
        fragmentShader: sunFrag,
        depthWrite: true,
        depthTest: true,
        transparent: false
    });

    const mesh = new Mesh(GEOM, mat);
    mesh.scale.setScalar(data.radius * Constants.SIZE_SCALE);
    mesh.name = `${data.name}_mesh`;

    const objectGrp = new Group();
    const rotGrp = new Group();
    objectGrp.name = `${data.name}_objectGrp`;
    rotGrp.name = `${data.name}_rotGrp`;


    Constants.LOAD_MANAGER.itemEnd(`://${data.name}_planet`);

    return [mesh, objectGrp, rotGrp, uniforms]
}
