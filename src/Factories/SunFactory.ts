import { Group, Mesh, ShaderMaterial, SphereGeometry } from "three";
import Constants from "../helpers/Constants";
import { SunData } from "../jsonInterfaces";
import sunFrag from "./../glsl/sun_frag.glsl?raw";
import sunVert from "./../glsl/sun_vert.glsl?raw";
import { Entity } from "../ecs/Entity";
import { AxisRotComponent } from "../baseclasses/CelestialComponents";
import { MeshComponent, ObjectGroupComponent, PointLightComponent, RotGroupComponent } from "../baseclasses/MeshComponents";
import { UniformsComponent, UniformsData } from "../baseclasses/CommonComponents";

const GEOM = new SphereGeometry(1, 30, 30);

export function buildSun(entity: Entity, data: SunData) {
    const [mesh, objectGrp, rotGrp, uniforms] = buildMeshes(data)
    mesh.scale.multiplyScalar(1000)

    Constants.LOAD_MANAGER.itemStart(`://${data.name}_components`);
    entity
        .addComponent(AxisRotComponent, AxisRotComponent.getDefaults(data.rotationPeriod))
        .addComponent(UniformsComponent, uniforms)
        .addComponent(MeshComponent, { mesh: mesh as Mesh })
        .addComponent(ObjectGroupComponent, ObjectGroupComponent.getDefaults())
        .addComponent(RotGroupComponent, RotGroupComponent.getDefaults())
        .addComponent(PointLightComponent, PointLightComponent.getDefaults("#fff", 1, 100))

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
    mesh.scale.setScalar(data.radius / Constants.SIZE_SCALE);
    mesh.name = `${data.name}_mesh`;

    const objectGrp = new Group();
    const rotGrp = new Group();
    objectGrp.name = `${data.name}_objectGrp`;
    rotGrp.name = `${data.name}_rotGrp`;


    Constants.LOAD_MANAGER.itemEnd(`://${data.name}_planet`);

    return [mesh, objectGrp, rotGrp, uniforms]
}
