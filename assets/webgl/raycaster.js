import * as THREE from 'three'
import { src_scene } from './scene';
import { camera } from './camera';
import { canvas } from './canvas';
import { selected } from './helpers';
import { outlinePass } from './postprocessing';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// Extension functions for bvh
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

export const raycaster = new THREE.Raycaster()

export const pointer = new THREE.Vector2();

let select = false;

function onPointerUp(event) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(pointer, camera)
	// this firstHitOnly is from three-mesh-bvh
	raycaster.firstHitOnly = true;
	const intersects = raycaster.intersectObjects(src_scene.children);

	// clear selected items
	selected.items = []
	selected.materials = []
	outlinePass.selectedObjects = selected.items

	if (intersects.length > 0) {
		selected.items.push(intersects[0].object)
		outlinePass.selectedObjects = selected.items
		selected.materials.push(intersects[0].object.material)
	}
}

export function initRaycaster() {
	canvas.addEventListener('pointerdown', () => { select = true })
	canvas.addEventListener('pointermove', () => { select = false })
	canvas.addEventListener('pointerup', (e) => {
		if (select) {
			onPointerUp(e)
		}
		select = false
	})
}

