import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let outWorldPos = new THREE.Vector3()

export function setCameraTarget(target: THREE.Object3D, cameraCtrl: OrbitControls) {
    if (target instanceof THREE.Group) { target = getMasterParent(target) }

    target.getWorldPosition(outWorldPos)
    cameraCtrl.target.copy(outWorldPos)
    cameraCtrl.update()
}

export function jumpToTarget(target: THREE.Object3D, cameraCtrl: OrbitControls) {
    target = getMasterParent(target)

    // if (Object.hasOwn(target.userData, "idlePosition")) {
    if ("idlePosition" in target.userData) {        
        target.getWorldPosition(outWorldPos)

        const pos = target.userData["idleAdd"] as THREE.Vector3
        const pos2 = outWorldPos.clone().add(pos)
        cameraCtrl.object.position.copy(pos2)
        cameraCtrl.update()
    }
}

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
    const w:any = [1e7]
    return (w + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c:any) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}