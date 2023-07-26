import { DEG2RAD } from "three/src/math/MathUtils";
import { DrawData } from "../dataInterfaces";
import { BufferGeometry, Line, Mesh, ShaderMaterial, Vector3 } from "three";

export function buildOrbit(data: DrawData) {
  const points = [];

  const radius = 1;
  const len = data.orbLen ? data.orbLen : 180;
  for (let i = 0; i <= len; i++) {
    points.push(new Vector3(radius * Math.sin(i * DEG2RAD), radius * Math.cos(i * DEG2RAD), 0));
  }

  const geometry = new BufferGeometry();
  geometry.setFromPoints(points);
  geometry.computeBoundingBox();
  geometry.computeVertexNormals();

  if (!geometry.boundingBox) throw new Error("Bounding box can't be calculated.");

  const material = new ShaderMaterial({
    uniforms: {
      bboxMin: {
        value: geometry.boundingBox.min
      },
      bboxMax: {
        value: geometry.boundingBox.max
      }
    },
    vertexShader: `
            uniform vec3 bboxMin;
            uniform vec3 bboxMax;

            varying vec2 vUv;

            void main() {
                vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
        `,
    fragmentShader: `
            varying vec2 vUv;

            void main() {
                vec4 col = vec4(mix(vec3(1), vec3(0), vUv.y), 1);
                gl_FragColor = vec4(1);
                gl_FragColor.a = (1.0 - vUv.y) * ${data.orbOpacity ? data.orbOpacity : 0.5};
            }
        `,
    transparent: true,
    depthWrite: false
  });

  const line = new Line(geometry, material);
  line.scale.x = data.orbInvert ? -1 : 1;
  line.rotateY((180 - len) * (data.orbInvert ? -1 : 1) * DEG2RAD);
  line.rotateX(Math.PI * 0.5);
  line.rotateZ(Math.PI * 0.5);
  line.updateMatrixWorld();
  return line as unknown as Mesh;
}
