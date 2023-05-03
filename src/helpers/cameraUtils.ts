import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export function setCameraTarget(target:THREE.Object3D | THREE.Vector3, cameraCtrl: OrbitControls) {
    if (target instanceof THREE.Group) { target = getRootParent(target) }

    cameraCtrl.target.copy(target instanceof THREE.Vector3 ? target : target.position)
    cameraCtrl.update()
}

export function jumpToTarget(target: THREE.Object3D, cameraCtrl: OrbitControls) {
    target = getRootParent(target)

    if (Object.hasOwn(target.userData, "idlePosition")) {
        const v = new THREE.Vector3()
        target.getWorldPosition(v)

        const pos = target.userData["idleAdd"] as THREE.Vector3
        const pos2 = v.clone().add(pos)
        cameraCtrl.object.position.copy(pos2)
        cameraCtrl.update()
    }
}

export function getRootParent(target: THREE.Object3D) {
    if (!(target.parent instanceof THREE.Scene)) {
        while (true) {
            if (target.parent instanceof THREE.Group) {
                target = target.parent as THREE.Object3D
            } else {break}
        }
    }
    return target
}