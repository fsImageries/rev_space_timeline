import { BufferGeometry, Group, Points, ShaderLib, ShaderMaterial } from "three";
import { randFloat } from "three/src/math/MathUtils";
import CelestialBase from "../Models/CelestialBase";
import Internal3DObject from "../Models/Internal3DObject";
import { ParticleRing } from "../Models/ParticleRing";
import { inSphere } from "../helpers/numericUtils";
import { uuidv4 } from "../helpers/utils";
import { SystemObjectData } from "../jsonInterfaces";
import Constants from "../helpers/Constants";

export default function build(data: SystemObjectData) {
  Constants.LOAD_MANAGER.itemStart(`://${data.name}_particleRing`)
  
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

            // float falloff = dist_div / (dist * dist);
            float falloff = 1.0;
            falloff = clamp(0.0 + falloff, 0.0, 0.5);
            gl_FragColor.a = falloff;
        }
        `
  });

  const geometry = new BufferGeometry();
  const points = new Points(geometry, material);
  // const radius = data.distanceToParent / Constants.DISTANCE_SCALE;

  // let vertexs = [];
  // const base = 360 / data.draw.count;
  // for (let i = 0; i < data.draw.count; i++) {
  //   const n = base * i;
  //   // const [x, y, z] = [Math.sin(n * (Math.PI / 180)), 0, Math.cos(n * (Math.PI / 180))];
  //   const [x, y, z] = [Math.sin(n * (Math.PI / 180)) * radius, 0, Math.cos(n * (Math.PI / 180)) * radius];
  //   vertexs.push(x, y, z);
  // }

  // vertexs = relaxRingPoints(vertexs, data.draw.height);
  // geometry.setAttribute("position", new Float32BufferAttribute(vertexs, 3));

  const parentGrp = new Group();
  parentGrp.add(points);
  parentGrp.name = `${data.name}_parentGrp`;
  points.name = `${data.name}_masterGrp`;

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

  const ring =  new ParticleRing({
    data: celestialData,
    object: internalObject,
  }, data.draw.count, data.draw.height);
  Constants.LOAD_MANAGER.itemEnd(`://${data.name}_planet`)
  
  return ring
}

export function relaxRingPoints(points: number[], rad = 1) {
  for (let cur_i = 0; cur_i < points.length; cur_i += 3) {
    points[cur_i + 1] += randFloat(-rad, rad); // y
    points[cur_i] += randFloat(-rad * 12.5, rad * 12.5); // x
    points[cur_i + 2] += randFloat(-rad * 9.5, rad * 9.5); // z
    const cur = [points[cur_i], points[cur_i + 1], points[cur_i + 2]];

    for (let other_i = 0; other_i < points.length; other_i += 3) {
      if (cur_i == other_i) continue;
      const other = [points[other_i], points[other_i + 1], points[other_i + 2]];
      if (inSphere(other, cur, rad)) {
        points[other_i + 1] += randFloat(-rad, rad);
      }
    }
  }
  return points;
}
