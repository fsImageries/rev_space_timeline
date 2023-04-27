import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export function setCameraTarget(tarObj:THREE.Object3D, cameraCtrl: OrbitControls) {
    cameraCtrl.target.copy(tarObj.position)
    cameraCtrl.update()
}

export function jumpToTarget(target: THREE.Object3D, cameraCtrl: OrbitControls) {
    if (target.userData) {
        cameraCtrl.object.position.copy(target.userData["idlePosition"])
        cameraCtrl.update()
    }
}

export function jumpCloseToTarget(target: THREE.Object3D, cameraCtrl: OrbitControls) {
    if (target.userData) {
        cameraCtrl.object.position.copy(target.position.clone().sub(new THREE.Vector3(-15, 0, -15)))
        cameraCtrl.update()
    }
}