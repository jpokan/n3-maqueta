import * as THREE from 'three'
import { lineMaterial, lineBasicMaterial } from '../materials';
import { Line2 } from 'three/addons/lines/Line2.js'
import { LineGeometry } from 'three/addons/lines/LineGeometry.js'
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';

export function createOutline(geometry) {
	// Make edges
	const edgesGeometry = new THREE.EdgesGeometry(geometry, 1);
	const edgesMesh = new THREE.LineSegments(
		edgesGeometry,
		lineBasicMaterial
	);
	edgesMesh.name = 'Edges'
	edgesMesh.layers.set(1)
	edgesMesh.renderOrder = -1;
	return edgesMesh
}

export function createFatOutline(geometry) {
	// Make edges
	const edgesGeometry = new THREE.EdgesGeometry(geometry, 1)
	const lineGeometry = new LineGeometry().setPositions(edgesGeometry.attributes.position.array)
	const edgesMesh = new Line2(
		lineGeometry,
		lineMaterial
	);
	edgesMesh.name = 'Edges'
	edgesMesh.layers.set(1)
	edgesMesh.renderOrder = -1;
	return edgesMesh
}

export function createFatOutline2(geometry) {
	// Make edges
	const edgesGeometry = new THREE.EdgesGeometry(geometry, 1)
	const lineGeometry = new LineSegmentsGeometry().setPositions(edgesGeometry.attributes.position.array)
	const edgesMesh = new LineSegments2(
		lineGeometry,
		lineMaterial
	);
	edgesMesh.name = 'Edges'
	edgesMesh.layers.set(1)
	edgesMesh.renderOrder = -1;
	return edgesMesh
}
