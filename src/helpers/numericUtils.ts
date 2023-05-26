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

const randSpherePointExcludes = (r: number, mult=1) => {
    let [x,y,z] = [0,0,0]
    while (x**2 + y**2 + x**2 < r**2) {
        [x,y,z] = randSpherePoint(mult)
    }
    return [x,y,z]
}

const randSpherePoint = (mult=1) => {
    var u = Math.random();
    var v = Math.random();
    var theta = u * 2.0 * Math.PI;
    var phi = Math.acos(2.0 * v - 1.0);
    var r = Math.cbrt(Math.random());
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    var sinPhi = Math.sin(phi);
    var cosPhi = Math.cos(phi);
    var x = r * sinPhi * cosTheta;
    var y = r * sinPhi * sinTheta;
    var z = r * cosPhi;
    // return {x: x, y: y, z: z};
    return [x*mult,y*mult,z*mult]
}

// https://karthikkaranth.me/blog/generating-random-points-in-a-sphere/

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

        const [x,y,z] = randSpherePointExcludes(stats.distanceStart, stats.distanceEnd)
        // console.log(x,y,z)
        position.x = x
        position.y = y
        position.z = z

        rotation.x = Math.random() * 2 * Math.PI;
        rotation.y = Math.random() * 2 * Math.PI;
        rotation.z = Math.random() * 2 * Math.PI;

        quaternion.setFromEuler(rotation);

        scale.x = scale.y = scale.z = randFloat(2, 1000);

        matrix.compose(position, quaternion, scale);

    };

}();