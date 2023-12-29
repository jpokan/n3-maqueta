import * as THREE from 'three'
import { lineBasicMaterial } from '../materials';

export function createOutline(geometry) {
	try {
		// Make edges
		const edgesGeometry = new THREE.EdgesGeometry(geometry, 1);
		const edgesInteriorMesh = new THREE.LineSegments(
			edgesGeometry,
			lineBasicMaterial
		);
		edgesInteriorMesh.renderOrder = 99;
		return edgesInteriorMesh
	} catch {

	}
}
