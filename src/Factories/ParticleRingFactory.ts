import { BufferGeometry, Float32BufferAttribute, Group, Object3D, Points, ShaderLib, ShaderMaterial } from "three";
import CelestialBase from "../Classes/CelestialBase";
import Internal3DObject from "../Classes/Internal3DObject";
import { ParticleRing } from "../Models/ParticleRing";
import Constants from "../helpers/Constants";
import { uuidv4 } from "../helpers/utils";
import { SystemObjectData } from "../jsonInterfaces";

import PWorker from "../workers/ParticleWorker?worker";

export default async function build(data: SystemObjectData) {
  Constants.LOAD_MANAGER.itemStart(`://${data.name}_particleRing`);

  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      dist: { value: 1.0 },
      dist_div: { value: data.draw.distDiv },
      size: { value: 2 },
      scale: { value: 1 },
      color: { value: [1, 1, 1] }
    },
    vertexShader: ShaderLib.points.vertexShader,
    fragmentShader: `
        uniform vec3 color;
        uniform float dist;
        uniform float dist_div;

        void main() {
            vec2 xy = gl_PointCoord.xy - vec2(0.5);
            float ll = length(xy);
            gl_FragColor = vec4(color, step(ll, 0.5));

            float falloff = dist_div / (dist * dist);
            // float falloff = 1.0;
            falloff = clamp(0.0 + falloff, 0.0, 0.5);
            gl_FragColor.a = falloff;
        }
        `
  });

  let points;
  let parentGrp;
  if (!data.draw.cache) {
    const geometry = new BufferGeometry();
    points = new Points(geometry, material);

    const radius = data.distanceToParent / Constants.DISTANCE_SCALE;
    const worker = new PWorker();
    Constants.LOAD_MANAGER.itemStart(`://${data.name}_worker`);
    worker.postMessage({ type: data.type, radius, count: data.draw.count, height: data.draw.height });
    worker.onmessage = (event) => {
      Constants.LOAD_MANAGER.itemEnd(`://${data.name}_worker`);
      geometry.setAttribute("position", new Float32BufferAttribute(event.data, 3));
    };

    parentGrp = new Group();
    parentGrp.add(points);
    parentGrp.name = `${data.name}_parentGrp`;
    points.name = `${data.name}_masterGrp`;
  } else {
    [parentGrp, points] = await loadCache(data.draw.cache);
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

function loadCache(path: string): Promise<Object3D[]> {
  return new Promise((resolve) => {
    Constants.GLTF_LOADER.load(path, (gltf) => {
      const points = gltf.scene.children[0];
      const parentGrp = gltf.scene.children[0].children[0];

      resolve([points, parentGrp]);
    });
  });
}
