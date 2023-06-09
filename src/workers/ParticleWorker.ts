function randFloat( low:number, high:number ) {
	return low + Math.random() * ( high - low );
}

const inSphere = (pos: number[], spherePos: number[], rad: number) => {
  const diff = spherePos.map((sp, idx) => sp - pos[idx]);
  const dist = Math.sqrt(diff[0] ** 2 + diff[1] ** 2 + diff[2] ** 2);
  return dist < rad;
};

const randSpherePoint = (mult = 1) => {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random());
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  const x = r * sinPhi * cosTheta;
  const y = r * sinPhi * sinTheta;
  const z = r * cosPhi;
  // return {x: x, y: y, z: z};
  return [x * mult, y * mult, z * mult];
};

function relaxRingPoints(points: number[], rad = 1) {
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

const randSpherePointExcludes = (r: number, mult = 1) => {
  const base = [0, 0, 0];
  let pnt = [0, 0, 0];
  while (inSphere(pnt, base, r)) {
    pnt = randSpherePoint(mult);
  }
  return pnt;
};

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
