import * as THREE from "three"
import { randFloat } from "three/src/math/MathUtils"
import { RandStats } from "../interfaces"


export const randFloatExcludes = function (start: number, end: number, excludeStart: number, excludeEnd: number) {
    let number = 0
    while ((number >= start && number <= end) && (excludeStart <= number && number <= excludeEnd)) {
        number = randFloat(start, end)
    }
    return number
}


export const randomizeMatrix = function () {

    const position = new THREE.Vector3();
    const rotation = new THREE.Euler();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    const rand = (stats: RandStats) => {
        return randFloatExcludes(
            -stats.distanceEnd,
            stats.distanceEnd,
            -stats.distanceStart,
            stats.distanceStart)
    }

    return function (matrix: THREE.Matrix4, stats: RandStats) {

        // position.x = randFloat(stats.distanceStart, stats.distanceEnd);
        // position.y = randFloat(stats.distanceStart, stats.distanceEnd);
        // position.z = randFloat(stats.distanceStart, stats.distanceEnd);

        position.x = rand(stats)
        position.y = rand(stats)
        position.z = rand(stats)

        rotation.x = Math.random() * 2 * Math.PI;
        rotation.y = Math.random() * 2 * Math.PI;
        rotation.z = Math.random() * 2 * Math.PI;

        quaternion.setFromEuler(rotation);

        scale.x = scale.y = scale.z = randFloat(2, 1000);

        matrix.compose(position, quaternion, scale);

    };

}();