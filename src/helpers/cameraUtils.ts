import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let worldPos = new THREE.Vector3()

export function setCameraTarget(target: THREE.Object3D, cameraCtrl: OrbitControls) {
    if (target instanceof THREE.Group) { target = getMasterParent(target) }

    target.getWorldPosition(worldPos)
    cameraCtrl.target.copy(worldPos)
    cameraCtrl.update()
}

export function jumpToTarget(target: THREE.Object3D, cameraCtrl: OrbitControls) {
    target = getMasterParent(target)

    if (Object.hasOwn(target.userData, "idlePosition")) {
        target.getWorldPosition(worldPos)

        const pos = target.userData["idleAdd"] as THREE.Vector3
        const pos2 = worldPos.clone().add(pos)
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