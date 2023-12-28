import * as THREE from 'three'
import { src_scene } from './scene';
import { camera } from './camera';
import { canvas } from './canvas';
import { selection } from './helpers';
export const raycaster = new THREE.Raycaster()

export const pointer = new THREE.Vector2();

let select = false

function onPointerUp(event) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(pointer, camera)
	const intersects = raycaster.intersectObjects(src_scene.children);

	if (intersects.length > 0) {
		for (let i = 0; i < selection.items.length; i++) {
			selection.items[i].dispose()
		}
		selection.items = []
		selection.items = push(intersects[0].object)
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

