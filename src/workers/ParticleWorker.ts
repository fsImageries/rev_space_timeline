import { randSpherePointExcludes, relaxRingPoints } from "../helpers/numericUtils";


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

function oort(data: Data) {
  const dist = (data.distanceToParent + RANGE)
  const range = (dist - data.distanceToParent) / data.distScale;
  const distanceEnd = dist / data.distScale;

  const vertexs = [];
  for (let i = 0; i < PNTCOUNT; i++) {
    const [x, y, z] = randSpherePointExcludes(distanceEnd, distanceEnd + range);
    vertexs.push(x, y, z);
  }

  return vertexs
}

function ring(data: Data) {
  let vertexs = [];
  const base = 360 / data.count;
  for (let i = 0; i < data.count; i++) {
    const n = base * i;
    // const [x, y, z] = [Math.sin(n * (Math.PI / 180)), 0, Math.cos(n * (Math.PI / 180))];
    const [x, y, z] = [Math.sin(n * (Math.PI / 180)) * data.radius, 0, Math.cos(n * (Math.PI / 180)) * data.radius];
    vertexs.push(x, y, z);
  }

  vertexs = relaxRingPoints(vertexs, data.height);
  return vertexs
}

onmessage = ({ data }) => {
  let res: number[];
  switch (data.type) {
    case "oortcloud":
      res = oort(data);
      break;
    case "particlering":
      res = ring(data)
  }

  // const res = ring(event.data)
  if (res)
    postMessage(res)
}
