import * as THREE from "three"
import { CelestialChildrenJson } from "../jsonInterfaces";
import { inSphere } from "../helpers/numericUtils";
import { randFloat } from "three/src/math/MathUtils";


export default function build(data: CelestialChildrenJson, radius:number) {
    // switch (data.type) {
    //     case "particles":
    //     return build_particle_satellites(data, radius)
    // }
    return build_particle_satellites(data, radius)
}

function build_particle_satellites(data: CelestialChildrenJson, radius:number) {
    let material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
            dist: {value: 1.0},
            dist_div: {value: data.draw.distDiv},
            size: {value: 2},
            scale: {value: 1},
            color: {value: [1,1,1]}
        },
        vertexShader: THREE.ShaderLib.points.vertexShader,
        fragmentShader: `
        uniform vec3 color;
        uniform float dist;
        uniform float dist_div;

        void main() {
            vec2 xy = gl_PointCoord.xy - vec2(0.5);
            float ll = length(xy);
            gl_FragColor = vec4(color, step(ll, 0.5));

            float falloff = dist_div / (dist * dist);
            falloff = clamp(0.0 + falloff, 0.0, 0.5);
            gl_FragColor.a = falloff;
        }
        `
    });
    
    const geometry = new THREE.BufferGeometry()
    const points = new THREE.Points(geometry, material)
    radius = radius * data.draw.radiusMult

    let vertexs = []
    const base = 360 / data.draw.count
    for (let i = 0; i < data.draw.count; i++) {
        const n = base * i
        const[x,y,z] = [Math.sin(n * (Math.PI / 180)) * radius, 0, Math.cos(n * (Math.PI / 180)) * radius]
        vertexs.push(x, y, z)
    }

    vertexs = relaxTorusPoints(vertexs, data.draw.height)
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertexs, 3))

    return {topGrp:points}
}

function relaxTorusPoints(points: number[], rad: number = 1) {
    for (let cur_i = 0; cur_i < points.length; cur_i += 3) {
        points[cur_i + 1] += randFloat(-rad, rad)           // y
        points[cur_i] += randFloat(-rad * 12.5, rad * 12.5)       // x
        points[cur_i + 2] += randFloat(-rad * 9.5, rad * 9.5)   // z
        const cur = [points[cur_i], points[cur_i + 1], points[cur_i + 2]]

        for (let other_i = 0; other_i < points.length; other_i += 3) {
            if (cur_i == other_i) continue
            const other = [points[other_i], points[other_i + 1], points[other_i + 2]]
            if (inSphere(other, cur, rad)) {
                points[other_i + 1] += randFloat(-rad, rad)
            }
        }
    }
    return points
}
