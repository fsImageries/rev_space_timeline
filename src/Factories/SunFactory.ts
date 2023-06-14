import { Group, Mesh, MeshBasicMaterial, ShaderMaterial, SphereGeometry } from "three";
import CelestialBase from "../Classes/CelestialBase";
import Internal3DObject from "../Classes/Internal3DObject";
import { Sun } from "../Models/Sun";
import Constants from "../helpers/Constants";
import { uuidv4 } from "../helpers/utils";
import { SunData } from "../jsonInterfaces";
import sunFrag from "./../glsl/sun_frag.glsl?raw";
import sunVert from "./../glsl/sun_vert.glsl?raw";

const GEOM = new SphereGeometry(1, 20, 20);

let SH_MAT:ShaderMaterial;
let MS_MAT:MeshBasicMaterial;

const getMat = (data:SunData) => {
  if (data.isSimple) {
    if (MS_MAT) return MS_MAT
    return new MeshBasicMaterial({
      color: data.color ? data.color : 0xffffff,
    })
  }
  if (SH_MAT) return SH_MAT
  return new ShaderMaterial({
    uniforms: {
      time: { value: 1.0 },
      scale: { value: 2.5 },
      highTemp: { value: data.highTemp },
      lowTemp: { value: data.lowTemp }
    },
    vertexShader: sunVert,
    fragmentShader: sunFrag
  })
}
export default function build(data: SunData) {
  Constants.LOAD_MANAGER.itemStart(`://${data.name}_planet`);


  const mat = getMat(data)
  const mesh = new Mesh(GEOM, mat);
  mesh.scale.setScalar(data.radius / Constants.SIZE_SCALE)
  mesh.name = `${data.name}_mesh`;

  const meshGrp = new Group();
  meshGrp.name = `${data.name}_meshGrp`;
  meshGrp.add(mesh);

  const masterGrp = new Group();
  const parentGrp = new Group();
  masterGrp.name = `${data.name}_masterGrp`;
  parentGrp.name = `${data.name}_parentGrp`;
  masterGrp.add(meshGrp);
  parentGrp.add(masterGrp);

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
    masterGrp,
    meshGrp,
    mesh
  });

  const sun = new Sun({
    data: celestialData,
    object: internalObject,
  }, data.disableLight);
  Constants.LOAD_MANAGER.itemEnd(`://${data.name}_planet`);

  return sun;
}
