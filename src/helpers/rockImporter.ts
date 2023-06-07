import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// rocks downloaded from:
// https://www.cgtrader.com/free-3d-models/scanned/various/rock-pack-vol-2-free

const paths = [
  "rocks/moss rock 08 sketchfab",
  "rocks/moss rock 09 sketchfab",
  "rocks/moss rock 10 sketchfab",
  "rocks/moss rock 11 sketchfab",
  "rocks/moss rock 12 sketchfab",
  "rocks/moss rock 13 sketchfab",
  "rocks/moss rock 14 sketchfab"
];
const lookup = ["decimated_0.01.obj.glb", "normal", "color", "roughness", "heights"];
const texLoader = new THREE.TextureLoader();

export default async function importMain() {
  return await importRocksAsync(paths);
}

export async function importRocksAsync(folderpaths: string[]) {
  const meshes = [];

  for (const folderpath of folderpaths) {
    let curMesh;
    const textures: { [key: string]: THREE.Texture } = {};
    for (const name of lookup) {
      const path = `${folderpath}\\${name}`;

      if (name === lookup[0]) {
        curMesh = await importMeshAsync(path);
        curMesh.geometry.center();
        meshes.push(curMesh);
        continue;
      }

      const tex = await importTextureAsync(path);
      textures[name] = tex;
    }

    const mat = new THREE.MeshStandardMaterial({
      map: textures["color"],
      normalMap: textures["normal"],
      roughnessMap: textures["roughness"]
    });
    mat.depthWrite = false;
    mat.polygonOffset = false;

    if (curMesh) curMesh.material = mat;
  }
  // console.log(meshes)
  return meshes;
}

async function importMeshAsync(path: string) {
  return (await (
    await new GLTFLoader().loadAsync(path)
  ).scene.children[0]) as THREE.Mesh;
  // console.log(wut)
  // return (await new OBJLoader().loadAsync(path)).children[0] as THREE.Mesh
}

async function importTextureAsync(path: string) {
  let tex;
  try {
    tex = await texLoader.loadAsync(`${path}.png`);
  } catch {
    tex = await texLoader.loadAsync(`${path}.jpg`);
  }
  return tex;
}
