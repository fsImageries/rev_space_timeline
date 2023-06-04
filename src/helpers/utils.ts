import * as THREE from "three"

export function getMasterParent(target: THREE.Object3D) {
    if (!(target.parent instanceof THREE.Scene) && !target.name.includes("_masterGrp")) {
        while (true) {
            if (target.parent instanceof THREE.Group) {
                target = target.parent as THREE.Object3D
                if (target.name.includes("_masterGrp")) break
            } else break
        }
    }
    return target
}

export function uuidv4() {
    const w: any = [1e7]
    return (w + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
        renderer.setSize(width, height, false)
    }
    return needResize
}