import * as THREE from "three";
// import { GLTFExporter } from "three/examples/jsm/exporters/gltfExporter"

export function getMasterGrp(target: THREE.Object3D) {
  if (!(target.parent instanceof THREE.Scene) && !target.name.includes("_masterGrp")) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (target.parent instanceof THREE.Group) {
        target = target.parent as THREE.Object3D;
        if (target.name.includes("_masterGrp")) break;
        if (target.name.includes("_parentGrp")) {
          target = target.children.reduce((acc, cur) => (acc.name.includes("_masterGrp") ? acc : cur));
          break;
        }
      } else break;
    }
  }
  return target;
}

export function uuidv4() {
  const w = 1e7;
  return `${w}${-1e3}${-4e3}${-8e3}${-1e11}`.replace(/[018]/g, (c) => {
    const ic = parseInt(c);
    return (ic ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (ic / 4)))).toString(16);
  });
}

export function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// function save(blob: Blob, filename: string) {
//   const link = document.createElement('a');
//   link.style.display = 'none';
//   document.body.appendChild(link); // Firefox workaround, see #6594

//   link.href = URL.createObjectURL(blob);
//   link.download = filename;
//   link.click();

//   document.body.removeChild(link)
// }

// function saveArrayBuffer(buffer: ArrayBuffer, filename: string) {
//   save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
// }

// export function exportGLTF(input: THREE.Object3D) {
//   console.log("Starting to save incoming input: ", input.name || input.type)
//   const gltfExporter = new GLTFExporter();

//   gltfExporter.parse(
//     input,
//     function (result) {
//       if (result instanceof ArrayBuffer) {
//         saveArrayBuffer(result, 'scene.glb');
//       }
//     },
//     function (error) {
//       console.log('An error happened during parsing', error);
//     },
//     { binary: true }
//   );
// }
