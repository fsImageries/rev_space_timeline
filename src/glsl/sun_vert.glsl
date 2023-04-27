varying vec2 vUv;
varying vec3 vPosition;
varying vec3 eyeVector;
varying vec3 vNormal;

float Fresnel(vec3 eyeVector, vec3 worldNormal) {
  return pow(1.0 + dot(eyeVector, worldNormal), 3.0);
}

void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normal;

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  eyeVector = normalize(worldPosition.xyz - cameraPosition);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}