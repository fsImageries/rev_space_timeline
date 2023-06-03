import * as THREE from "three";

export default function build(length:number= 180) {
    var points = [];

    // const radius = distance / Constants.DISTANCE_SCALE;
    const radius = 1;
    for (let i = 0; i <= 360; i++) {
        points.push(new THREE.Vector3(Math.sin(i * (Math.PI / 360)) * radius, Math.cos(i * (Math.PI / 360)) * radius, 0));
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(points);
    geometry.computeBoundingBox()

    var material = new THREE.ShaderMaterial({
        uniforms: {
            bboxMin: {
                value: geometry.boundingBox.min
            },
            bboxMax: {
                value: geometry.boundingBox.max
            }
        },
        vertexShader: `
            uniform vec3 bboxMin;
            uniform vec3 bboxMax;
        
            varying vec2 vUv;

            void main() {
                vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
        `,
        fragmentShader: `
            varying vec2 vUv;
            
            void main() {
                vec4 col = vec4(mix(vec3(1), vec3(0), vUv.y), 1);
                gl_FragColor = vec4(1);
                gl_FragColor.a = 1.0 - vUv.y;
            }
        `,
        transparent: true
    });

    const line = new THREE.Line(geometry, material);
    line.rotateX(Math.PI / 2)
    return line
}