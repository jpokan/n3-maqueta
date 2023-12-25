uniform float thickness;
varying vec4 vNormal;

void main() {
    vNormal = projectionMatrix * modelViewMatrix * vec4(normal, 0.0);
    vec3 pos = position + normal * thickness;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
