uniform vec3 glowColor;
uniform float intensityMult;
// varying float intensity;

// // void main() {
// //   vec3 glow = (glowColor - .2) * intensity * intensityMult + .01;
// //   gl_FragColor = vec4( glow, 1.0 );
// // }

// varying vec3 vNormal;
// void main() {
// float ins = pow( 0.8 - dot( vNormal, vec3( 0, 0, .5 ) ), 12.0 );
// gl_FragColor = vec4( glowColor, 1.0 ) * ins;
// }


varying vec3 vertexNormal;
void main() {
  float intensity = pow(.7 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);
  gl_FragColor = vec4(glowColor, 1.0) * intensity * intensityMult;
}