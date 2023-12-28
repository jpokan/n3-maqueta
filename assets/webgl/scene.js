import * as THREE from "three"

// Create scene
// omni_scene is used by the renderer
export const omni_scene = new THREE.Scene()
omni_scene.name = 'omni_scene'

/**
 * Structure of the omni_scene
 * [0] src_scene - where user defined objects are
 * [1] helpers_group - objects displayed but are not part of the src_scene
 * */

export const src_scene = new THREE.Scene()
src_scene.name = 'src_scene'
omni_scene.add(src_scene)

export const helpers_group = new THREE.Group()
helpers_group.name = 'helpers_group'
omni_scene.add(helpers_group)

