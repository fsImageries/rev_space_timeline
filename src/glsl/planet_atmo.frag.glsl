uniform vec3 glowColor;
uniform float intensityMult;
varying float intensity;

void main() {
  vec3 glow = (glowColor - .2) * intensity * intensityMult;
  gl_FragColor = vec4( glow, 1.0 );
}