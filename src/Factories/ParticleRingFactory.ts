import { BufferAttribute, BufferGeometry, Color, Mesh, Points, PointsMaterial, ShaderLib, ShaderMaterial, Vector3, MeshPhongMaterial, RawShaderMaterial } from "three";
import { World } from "../ecs/World";
import { SystemObjectData } from "../jsonInterfaces";
import Constants from "../helpers/Constants";
import { MeshComponent, ParentComponent, ParticleRingComponent, RotGroupComponent, TransformGroupComponent } from "../baseclasses/MeshComponents";
import { Entity } from "../ecs/Entity";
import { BaseDataComponent, ParticleRingTypeComponent, UniformsComponent, UniformsData } from "../baseclasses/CommonComponents";

const vertexShader = `
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>


uniform mat3 uvTransform;
varying vec3 vPosition;


void main() {
    vPosition = position;
    

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;


    bool isPerspective = isPerspectiveMatrix( projectionMatrix );

    if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );


	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}   
    `

const fragmentShader = `
    float lightStrength = .07;
    uniform vec3 color;
    uniform vec3 lightPos;
    uniform vec3 basePos;

    uniform float maxRad;
    uniform float minRad;

    varying vec3 vPosition;

    float map(float value, float min1, float max1, float min2, float max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
      }

    vec3 v3map(vec3 value, vec3 min1, vec3 max1, vec3 min2, vec3 max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
      }
    
    void main() {
        // vec2 xy = gl_PointCoord.xy - vec2(0.5);
        // float ll = length(xy);
        // gl_FragColor = vec4(color, step(ll, 0.5));


        float v = map(vPosition.x, 0.0, maxRad, 0.0, 1.0);
        // float distanceToLightSource = distance(v, lightPos.x);
        // vec3 lighterColor = color * distanceToLightSource * lightStrength;
        
        // vec3 actualPos = v3map(vPosition, vec3(minRad), vec3(maxRad), vec3(0.0), vec3(1.0));
        // float distanceToLightSource = distance(lightPos, actualPos);
        // vec3 lighterColor = color * distanceToLightSource * lightStrength;

        // gl_FragColor = vec4(lighterColor, 1.0);
        gl_FragColor = vec4(color * (v * -1.0) + vec3(.5), 1.0);
    }
    `

const POINTS_MAT = new ShaderMaterial({
    transparent: true,
    uniforms: {
        size: { value: 1 },
        scale: { value: 1 },
        color: { value: [1, 1, 1] },
        lightPos: { value: [0, 0, 0] },
        basePos: { value: [0, 0, 0] }
    }
})

export function buildParticlering(entity: Entity, data: SystemObjectData) {
    const [mesh, uniforms] = buildParticleSystem(data);

    return entity
        .addComponent(UniformsComponent, uniforms as UniformsData)
        .addComponent(BaseDataComponent, BaseDataComponent.getDefaults(data))
        .addComponent(MeshComponent, { mesh })
        .addComponent(TransformGroupComponent, TransformGroupComponent.getDefaults())
        .addComponent(RotGroupComponent, RotGroupComponent.getDefaults())
        .addComponent(ParentComponent)
        .addComponent(ParticleRingComponent)
        .addComponent(ParticleRingTypeComponent)
}

function buildParticleSystem(data: SystemObjectData): [Mesh, UniformsData] {
    const randomRange = 0.1;
    const numParticles = data.draw?.count as number;
    const ringRadius = data.distanceToParent as number * Constants.DISTANCE_SCALE;
    const ringWidth = data.draw?.height as number;
    const particlesPerPosition = 3; // Number of particles per position
    const minHeight = -1; // Minimum height value
    const maxHeight = 1; // Maximum height value

    const geometry = new BufferGeometry();
    const positions = new Float32Array(numParticles * particlesPerPosition * 3);

    for (let i = 0; i < numParticles; i++) {
        const progress = i / numParticles;
        const angle = progress * Math.PI * 2;

        for (let j = 0; j < particlesPerPosition; j++) {
            const radiusOffset = Math.random() * randomRange - randomRange / 2;
            const heightOffset = Math.random() * (maxHeight - minHeight) + minHeight; // Random height within the range

            const x = Math.cos(angle) * (ringRadius + ringWidth / 2 + radiusOffset) + radiusOffset * 25;
            const y = heightOffset;
            const z = Math.sin(angle) * (ringRadius + ringWidth / 2 + radiusOffset) + radiusOffset * 25;;

            const index = (i * particlesPerPosition + j) * 3;

            positions[index] = x;
            positions[index + 1] = y;
            positions[index + 2] = z;
        }
    }

    const uniforms = {
        size: { value: 1 },
        scale: { value: 1 },
        color: { value: [1, 1, 1] },
        lightPos: { value: [0, 0, 0] },
        basePos: { value: [0, 0, 0] },
        maxRad: { value: ringRadius + (randomRange * 25) },
        minRad: { value: -(ringRadius + (randomRange * 25)) }
    }

    const mat = new ShaderMaterial({
        transparent: true,
        uniforms,
        vertexShader,
        fragmentShader
    })

    const attr = new BufferAttribute(positions, 3)
    geometry.setAttribute('position', attr);
    return [new Points(geometry, mat) as unknown as Mesh, uniforms];
}
