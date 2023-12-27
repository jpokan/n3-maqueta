import * as THREE from 'three'
import { src_scene } from './scene';
import { camera } from './camera';

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

	console.log(intersects);
}

window.addEventListener('pointerdown', () => { select = true })
window.addEventListener('pointermove', () => { select = false })
window.addEventListener('pointerup', (e) => {
	if (select) {
		onPointerUp(e)
	}
	select = false
})


