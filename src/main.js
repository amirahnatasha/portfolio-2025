import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createOldPC } from "./pc.js";

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

// pc model
const oldPC = createOldPC();
scene.add(oldPC);

//lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// orthographic camera
const aspect = window.innerWidth / window.innerHeight;
const d = 6;
const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 0.1, 100);
camera.position.set(10, 10, 10);
camera.lookAt(0, 1, 0);

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
  const aspect = window.innerWidth / window.innerHeight;
  camera.left = -d * aspect;
  camera.right = d * aspect;
  camera.top = d;
  camera.bottom = -d;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
