uniform vec3 visibleEdgeColor;
uniform vec3 hiddenEdgeColor;
varying vec4 vNormal;

void main() {
    vec3 normal = normalize(vNormal.xyz);
    float rim = 1.0 - abs(dot(normal, normalize(vec3(1.0, 1.0, 1.0))));
    vec3 edgeColor = mix(hiddenEdgeColor, visibleEdgeColor, rim);
    gl_FragColor = vec4(edgeColor, 1.0);
}
