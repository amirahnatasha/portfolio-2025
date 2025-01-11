import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// add mouse and keyboard sound
const mouseUpSound = new Audio("../sounds/mouse_up.mp3");

document.addEventListener("mouseup", () => {
  mouseUpSound.play();
});

const keyboardSounds = [
  new Audio("../sounds/key_1.mp3"),
  new Audio("../sounds/key_2.mp3"),
  new Audio("../sounds/key_3.mp3"),
  new Audio("../sounds/key_4.mp3"),
  new Audio("../sounds/key_5.mp3"),
  new Audio("../sounds/key_6.mp3"),
];

document.addEventListener("keydown", () => {
  const randomSound = keyboardSounds[Math.floor(Math.random() * keyboardSounds.length)];

  if (randomSound.paused) {
    randomSound.currentTime = 0;
    randomSound.play();
  }
});

// initialize the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// add objects to scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// Create edges and outline
const edges = new THREE.EdgesGeometry(cubeGeometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2 });
const line = new THREE.LineSegments(edges, lineMaterial);
scene.add(line);

// initialize camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 200);

const aspectRatio = window.innerWidth / window.innerHeight;

//const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 200);
camera.position.z = 5;

// initialize renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//initialize controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
