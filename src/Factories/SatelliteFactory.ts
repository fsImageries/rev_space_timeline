import * as THREE from "three"
import { CelestialChildrenJson } from "../jsonInterfaces";
import { inSphere } from "../helpers/numericUtils";
import { randFloat } from "three/src/math/MathUtils";


export default function build(data: CelestialChildrenJson, radius:number) {
    switch (data.type) {
        case "particles":
        return build_particle_satellites(data, radius)
    }
}

function createCanvasMaterial(color:string, size:number) {
    var matCanvas = document.createElement('canvas');
    matCanvas.width = matCanvas.height = size;
    var matContext = matCanvas.getContext('2d');
    // create exture object from canvas.
    var texture = new THREE.Texture(matCanvas);
    // Draw a circle
    var center = size / 2;
    matContext.beginPath();
    matContext.arc(center, center, size/2, 0, 2 * Math.PI, false);
    matContext.closePath();
    matContext.fillStyle = color;
    matContext.fill();
    // need to set needsUpdate
    texture.needsUpdate = true;
    // return a texture made from the canvas
    return texture;
  }

function build_particle_satellites(data: CelestialChildrenJson, radius:number) {
    // let material = new THREE.ShaderMaterial({
    //     transparent: true,
    //     depthWrite: false,
    //     uniforms: {
    //         size: {value: 2},
    //         scale: {value: 1},
    //         color: {value: new THREE.Color('white')}
    //     },
    //     vertexShader: THREE.ShaderLib.points.vertexShader,
    //     fragmentShader: `
    //     uniform vec3 color;
    //     void main() {
    //         vec2 xy = gl_PointCoord.xy - vec2(0.5);
    //         float ll = length(xy);
    //         gl_FragColor = vec4(color, step(ll, 0.5));
    //         gl_FragColor.a = .5;
    //     }
    //     `
    // });
    // TODO get distance from camera and calc light falloff from there
    
    const map = new THREE.TextureLoader().load( '/circle-solid.png' );
    const material = new THREE.PointsMaterial({
        color: "white",
        // map: map,
        // alphaMap: map,
        // opacity: .5,
        size: 0.05,
        transparent: true,
    })
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

    vertexs = relaxTorusPoints(vertexs, 5)

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertexs, 3))

    return {topGrp:points}
}


function relaxTorusPoints(points: number[], rad: number = 1) {
    for (let cur_i = 0; cur_i < points.length; cur_i += 3) {
        points[cur_i + 1] += randFloat(-rad, rad)     // y
        points[cur_i] += randFloat(-rad * 2, rad * 2)   // x
        points[cur_i + 2] += randFloat(-rad * 2, rad * 2) // z
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
