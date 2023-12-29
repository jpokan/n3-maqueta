import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutlineShader } from "./outlineShader";

export const OutlinePass = new ShaderPass(OutlineShader);

