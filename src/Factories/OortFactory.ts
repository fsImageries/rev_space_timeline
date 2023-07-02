import { BufferAttribute, BufferGeometry, Color, Mesh, Points, PointsMaterial, ShaderLib, ShaderMaterial, Vector3, MeshPhongMaterial, RawShaderMaterial } from "three";
import { World } from "../ecs/World";
import { SystemObjectData } from "../jsonInterfaces";
import Constants from "../helpers/Constants";
import { MeshComponent, ParentComponent, ParticleRingComponent, RotGroupComponent, TransformGroupComponent } from "../baseclasses/MeshComponents";
import { Entity } from "../ecs/Entity";
import { BaseDataComponent, ParticleRingTypeComponent, UniformsComponent, UniformsData } from "../baseclasses/imports";
import { AxisRotComponent } from "../baseclasses/imports";
import { randFloat } from "three/src/math/MathUtils";
import { randSpherePointExcludes } from "../helpers/numericUtils";


const COLOR = new Color("#fff");
const C1 = 0.01;
const C2 = 0.5;
function genCol(col: number[]) {
    return [(col[0] + randFloat(C1, C2)) % 1, (col[1] + randFloat(C1, C2)) % 1, (col[2] + randFloat(C1, C2)) % 1];
}

export function buildOortCloud(entity: Entity, data: SystemObjectData) {
    const [mesh, uniforms] = buildParticleSystem(data);

    return entity
        .addComponent(BaseDataComponent, BaseDataComponent.getDefaults(data))
        .addComponent(MeshComponent, { mesh })
        .addComponent(TransformGroupComponent, TransformGroupComponent.getDefaults())
        .addComponent(RotGroupComponent, RotGroupComponent.getDefaults())
        // .addComponent(ParentComponent)
        // .addComponent(ParticleRingComponent)
        // .addComponent(ParticleRingTypeComponent)
}

interface Data {
    type: string;
    radius: number;
    count?: number;
    height?: number;
    distanceToParent: number;
    distScale: number;
    genColor?: boolean;
    end?: number;
}

const PNTCOUNT = 3_000;
const RANGE = 6731900000000;

function buildParticleSystem(data: SystemObjectData): [Mesh, UniformsData] {
    const particlesPerPosition = 3; // Number of particles per position
    const randomRange = 0.1;
    const numParticles = Math.round(data.draw?.count as number / particlesPerPosition);
    const ringRadius = data.distanceToParent as number * Constants.DISTANCE_SCALE;
    const ringWidth = data.draw?.height as number;
    const maxHeight = data.draw?.height as number; // Maximum height value
    const minHeight = -maxHeight; // Minimum height value
    const col = data.draw?.genColor;

    const geometry = new BufferGeometry();
    const positions = new Float32Array(PNTCOUNT);

    let colors;
    if (col) colors = new Float32Array(PNTCOUNT);

    const dist = data.distanceToParent as number;
    const distanceEnd = dist + RANGE;

    for (let i = 0; i < PNTCOUNT; i+=3) {
        const [x, y, z] = randSpherePointExcludes(dist * Constants.DISTANCE_SCALE, distanceEnd * Constants.DISTANCE_SCALE);
        
        positions[i] = x
        positions[i+1] = y
        positions[i+2] = z
        if (colors && col) {
            const [r,g,b] = genCol([COLOR.r, COLOR.g, COLOR.b])
            colors[i] = r
            colors[i+1] = g
            colors[i+2] = b
        }
    }

    const uniforms = {
        size: { value: 100 },
        scale: { value: 1000 },
        color: { value: [1, 1, 1] },
    }

    // const mat = new ShaderMaterial({
    //     transparent: true,
    //     uniforms,
    //     vertexShader: ShaderLib.points.vertexShader,
    //     fragmentShader: ShaderLib.points.fragmentShader
    // })

    const mat = new PointsMaterial({
        color: "#ffffff",
        sizeAttenuation: true,
        size: 0.1,
        transparent: true,
        opacity: .3
    })

    const attr = new BufferAttribute(positions, 3)
    geometry.setAttribute('position', attr);
    if (colors && col) geometry.setAttribute('color', new BufferAttribute(colors, 3));
    return [new Points(geometry, mat) as unknown as Mesh, uniforms];
}