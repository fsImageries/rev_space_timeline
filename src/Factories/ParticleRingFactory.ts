import { BufferAttribute, BufferGeometry, Color, Mesh, Points, ShaderMaterial } from "three";
import { randFloat } from "three/src/math/MathUtils";
import {
  CSSMarkerComponent,
  MeshComponent,
  ParentComponent,
  ParticleRingComponent,
  RotGroupComponent,
  TransformGroupComponent
} from "../baseclasses/MeshComponents";
import {
  BaseDataComponent,
  DistanceToParentComponent,
  OrbitRotComponent,
  ParticleRingTypeComponent,
  RadiusComponent,
  UniformsComponent,
  UniformsData
} from "../baseclasses/imports";
import { Entity } from "../ecs/Entity";
import { SystemObjectData } from "../dataInterfaces";
import { Store } from "../ecs/Store";

const vertexShader = `
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

varying vec3 vPosition;
varying vec3 vvPosition;
varying vec3 vColor;
attribute vec3 color;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
    vPosition = position;
    vColor = color;

    vec4 localPosition = vec4( position, 1.);
    vec4 worldPosition = modelMatrix * localPosition;
    vec4 viewPosition = viewMatrix * worldPosition;
    vvPosition = worldPosition.xyz;
    
	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

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

    `;

const fragmentShader = `
    float lightStrength = .07;
    uniform vec3 color;
    uniform vec3 lightPos;
    uniform vec3 basePos;

    uniform float maxRad;
    uniform float minRad;

    varying vec3 vPosition;
    varying vec3 vvPosition;
    varying vec3 vColor;

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

        // need a vector pointing to the light
        float v = map(vvPosition.x - basePos.x, minRad, maxRad * 5., 0., 1.0);
        // float distanceToLightSource = distance(v, lightPos.x);
        // vec3 lighterColor = color * distanceToLightSource * lightStrength;
        
        // vec3 actualPos = v3map(vPosition, vec3(minRad), vec3(maxRad), vec3(0.0), vec3(1.0));
        // float distanceToLightSource = distance(lightPos, actualPos);
        // vec3 lighterColor = color * distanceToLightSource * lightStrength;

        // gl_FragColor = vec4(lighterColor, 1.0);
        v = map((v * -1.0), -1., -.5, .75, 1.1);
        // v = map((v * -1.0), -1., 0., 0.0, 1.);
        gl_FragColor = vec4(vColor, 1.0) * v;
    }
    `;

const COLOR = new Color("#fff");
const C1 = 0.01;
const C2 = 0.5;
function genCol(col: number[]) {
  return [(col[0] + randFloat(C1, C2)) % 1, (col[1] + randFloat(C1, C2)) % 1, (col[2] + randFloat(C1, C2)) % 1];
}

export function buildParticlering(entity: Entity, data: SystemObjectData) {
  const [mesh, uniforms] = buildParticleSystem(data);

  return entity
    .addComponent(UniformsComponent, uniforms as UniformsData)
    .addComponent(OrbitRotComponent, OrbitRotComponent.getDefaults(data.orbitalPeriod as number, data.draw?.orbInvert))
    .addComponent(BaseDataComponent, BaseDataComponent.getDefaults(data))
    .addComponent(
      DistanceToParentComponent,
      DistanceToParentComponent.getDefaults(data.distanceToParent as number, false)
    )
    .addComponent(RadiusComponent, {
      radius: data.distanceToParent as number,
      drawRadius: (data.distanceToParent as number) * Store.getInstance().state.DISTANCE_SCALE
    })
    .addComponent(MeshComponent, { mesh })
    .addComponent(TransformGroupComponent, TransformGroupComponent.getDefaults())
    .addComponent(RotGroupComponent, RotGroupComponent.getDefaults())
    .addComponent(ParentComponent)
    .addComponent(ParticleRingComponent)
    .addComponent(ParticleRingTypeComponent)
    .addComponent(CSSMarkerComponent);
}

function buildParticleSystem(data: SystemObjectData): [Mesh, UniformsData] {
  const particlesPerPosition = 4; // Number of particles per position
  const randomRange = 0.15;
  const numParticles = Math.round((data.draw?.count as number) / particlesPerPosition);
  const ringRadius = (data.distanceToParent as number) * Store.getInstance().state.DISTANCE_SCALE;
  const ringWidth = ringRadius;
  const maxHeight = data.draw?.height as number; // Maximum height value
  const minHeight = -maxHeight; // Minimum height value
  const col = data.draw?.genColor;

  const geometry = new BufferGeometry();
  const positions = new Float32Array(numParticles * particlesPerPosition * 3);

  let colors;
  if (col) colors = new Float32Array(numParticles * particlesPerPosition * 3);

  for (let i = 0; i < numParticles; i++) {
    const progress = i / numParticles;
    const angle = progress * Math.PI * 2;

    for (let j = 0; j < particlesPerPosition; j++) {
      const radiusOffset = Math.random() * randomRange - randomRange / 2;
      const heightOffset = Math.random() * (maxHeight - minHeight) + minHeight; // Random height within the range

      const x =
        Math.cos(angle) * (ringRadius + ringWidth / 2 + radiusOffset + radiusOffset * 25 * randFloat(-1.25, 1.25));
      // const x = Math.cos(angle) * ringRadius;
      const y = heightOffset;
      const z =
        Math.sin(angle) * (ringRadius + ringWidth / 2 + radiusOffset + radiusOffset * 25 * randFloat(-1.25, 1.25));
      // const z = Math.sin(angle) * ringRadius;

      const index = (i * particlesPerPosition + j) * 3;

      if (colors && col) {
        const [r, g, b] = genCol([COLOR.r, COLOR.g, COLOR.b]);
        colors[index] = r;
        colors[index + 1] = g;
        colors[index + 2] = b;
      }
      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = z;
    }
  }

  const uniforms = {
    size: { value: 1 },
    scale: { value: 20 },
    color: { value: [1, 1, 1] },
    lightPos: { value: [0, 0, 0] },
    basePos: { value: [0, 0, 0] },
    maxRad: { value: ringRadius + ringWidth / 2 + 10 },
    minRad: { value: -(ringRadius + ringWidth / 2 + 10) }
  };

  const mat = new ShaderMaterial({
    transparent: true,
    uniforms,
    vertexShader,
    fragmentShader
  });

  const attr = new BufferAttribute(positions, 3);
  geometry.setAttribute("position", attr);
  if (colors && col) geometry.setAttribute("color", new BufferAttribute(colors, 3));
  return [new Points(geometry, mat) as unknown as Mesh, uniforms];
}
