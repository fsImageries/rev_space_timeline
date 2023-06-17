import {
  AdditiveBlending,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  Points,
  PointsMaterial,
  ShaderMaterial
} from "three";
import CelestialBase from "../Classes/CelestialBase";
import Internal3DObject from "../Classes/Internal3DObject";
import { ParticleRing } from "../Models/ParticleRing";
import Constants from "../helpers/Constants";
import { uuidv4 } from "../helpers/utils";
import { SystemObjectData } from "../jsonInterfaces";

import PWorker from "../workers/ParticleWorker?worker";

function getMaterial(data: SystemObjectData) {
  if (!data.draw.pointShader) {
    return new ShaderMaterial({
      blending: AdditiveBlending,
      // depthTest: false,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      uniforms: {
        dist: { value: 1.0 },
        dist_div: { value: data.draw.distDiv },
        size: { value: 2 },
        scale: { value: 1 },
        color: { value: [1, 1, 1] }
      },
      vertexShader: `
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
  
      // varying vec3 vColor;
  
      void main() {
        vColor = color;
  
        #ifdef USE_POINTS_UV
  
          vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  
        #endif
  
        #include <color_vertex>
        #include <morphcolor_vertex>
        #include <begin_vertex>
        #include <morphtarget_vertex>
        #include <project_vertex>
  
        gl_PointSize = size;
  
        #ifdef USE_SIZEATTENUATION
  
          bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  
          if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
  
        #endif
  
        #include <logdepthbuf_vertex>
        #include <clipping_planes_vertex>
        #include <worldpos_vertex>
        #include <fog_vertex>
      }
      `,
      fragmentShader: `
          float rand(vec2 co){
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
          }
  
          // uniform vec3 color;
          uniform float dist;
          uniform float dist_div;
  
          varying vec3 vColor;
  
          void main() {
              vec2 xy = gl_PointCoord.xy - vec2(0.5);
              float ll = length(xy);
              gl_FragColor = vec4(vColor, step(ll, 0.5));
  
              float falloff = dist_div / (dist * dist);
              // float falloff = 1.0;
              falloff = clamp(0.0 + falloff, 0.0, 0.5);
              gl_FragColor.a = falloff;
          }
          `
    });
  }
  return new PointsMaterial({
    color: "white",
    opacity: 0.4,
    transparent: true,
    depthWrite: false
  });
}

export default async function build(data: SystemObjectData) {
  Constants.LOAD_MANAGER.itemStart(`://${data.name}_particleRing`);

  const material = getMaterial(data);

  let points: Points;
  let parentGrp: Group;
  if (!data.draw.cache) {
    const geometry = new BufferGeometry();
    points = new Points(geometry, material);
    parentGrp = new Group();
    parentGrp.add(points);
    parentGrp.name = `${data.name}_parentGrp`;
    points.name = `${data.name}_masterGrp`;

    const radius = data.distanceToParent / Constants.DISTANCE_SCALE;
    const end = data.draw.end ? data.draw.end : undefined;
    const worker = new PWorker();
    Constants.LOAD_MANAGER.itemStart(`://${data.name}_worker`);
    worker.postMessage({
      type: data.type,
      radius,
      end,
      count: data.draw.count,
      height: data.draw.height,
      genColor: data.draw.genColor
    });
    worker.onmessage = (event) => {
      Constants.LOAD_MANAGER.itemEnd(`://${data.name}_worker`);
      geometry.setAttribute("position", new Float32BufferAttribute(event.data[0], 3));
      if (event.data.length > 1) geometry.setAttribute("color", new Float32BufferAttribute(event.data[1], 3));
    };
  } else {
    [points, parentGrp] = await loadCache(data.draw.cache);
    (points as Points).material = material;
  }

  const celestialData = new CelestialBase({
    id: uuidv4(),
    name: data.name,
    type: data.type,
    tilt: data.tilt,
    parent: data.parent,
    radius: data.radius,
    texts: data.texts,
    orbitalPeriod: data.orbitalPeriod,
    rotationPeriod: data.rotationPeriod,
    distanceToParent: data.distanceToParent,
    drawRadius: data.draw.radius
  });

  if (data.draw.orbInvert) celestialData.invertAngularOrbVel();

  const internalObject = new Internal3DObject({
    parentGrp,
    masterGrp: points
  });

  const ring = new ParticleRing(
    {
      data: celestialData,
      object: internalObject
    },
    data.draw.count,
    data.draw.height
  );
  Constants.LOAD_MANAGER.itemEnd(`://${data.name}_planet`);

  return ring;
}

function loadCache(path: string): Promise<[Points, Group]> {
  return new Promise((resolve) => {
    Constants.GLTF_LOADER.load(path, (gltf) => {
      const parentGrp = gltf.scene.children[0] as Group;
      const points = gltf.scene.children[0].children[0] as Points;

      resolve([points, parentGrp]);
    });
  });
}
