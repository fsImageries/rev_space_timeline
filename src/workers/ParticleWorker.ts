import { randFloat } from "three/src/math/MathUtils";
import { randSpherePointExcludes, relaxRingPoints } from "../helpers/numericUtils";
import {Color } from "three"

interface Data {
  type: string;
  radius: number;
  count?: number;
  height?: number;
  distanceToParent: number;
  distScale: number;
}

const PNTCOUNT = 100_000;
const RANGE = 6731900000000;
const C1 = .01
const C2 = .5

function genCol(col:number[]) {
  return [(col[0] + randFloat(C1, C2)) % 1, (col[1] + randFloat(C1, C2)) % 1, (col[2] + randFloat(C1, C2)) % 1]
}

function oort(data: Data) {
  const dist = data.distanceToParent + RANGE;
  const range = (dist - data.distanceToParent) / data.distScale;
  const distanceEnd = dist / data.distScale;

  const vertexs = [];
  for (let i = 0; i < PNTCOUNT; i++) {
    const [x, y, z] = randSpherePointExcludes(distanceEnd, distanceEnd + range);
    vertexs.push(x, y, z);
  }

  return [vertexs];
}

function ring(data: Data) {
  let vertexs = [];
  const colors = []

  const color = new Color("#ffffff")
  const base = 360 / data.count;
  for (let i = 0; i < data.count; i++) {
    const n = base * i;
    // const [x, y, z] = [Math.sin(n * (Math.PI / 180)), 0, Math.cos(n * (Math.PI / 180))];
    const [x, y, z] = [Math.sin(n * (Math.PI / 180)) * data.radius, 0, Math.cos(n * (Math.PI / 180)) * data.radius];
    vertexs.push(x, y, z);

    // color.setHSL(i / data.count, 1.0, .5)
    colors.push(...genCol([color.r, color.g, color.b]))
  }

  vertexs = relaxRingPoints(vertexs, data.height);
  return [vertexs, colors];
}

onmessage = ({ data }) => {
  let res: number[][];
  switch (data.type) {
    case "oortcloud":
      res = oort(data);
      break;
    case "particlering":
      res = ring(data);
  }

  // const res = ring(event.data)
  if (res) postMessage(res);
};
