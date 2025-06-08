import * as THREE from "three";

export function createOldPC() {
  const group = new THREE.Group();

  // Monitor
  const monitorGeometry = new THREE.BoxGeometry(3, 2, 1.2);
  const monitorMaterial = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
  const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
  monitor.position.set(0, 1.5, 0);
  group.add(monitor);

  // Monitor screen
  const screenGeometry = new THREE.BoxGeometry(2.2, 1.3, 0.1);
  const screenMaterial = new THREE.MeshLambertMaterial({ color: 0x222233 });
  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0, 1.5, 0.66);
  group.add(screen);

  // Keyboard
  const keyboardGeometry = new THREE.BoxGeometry(2.5, 0.2, 0.8);
  const keyboardMaterial = new THREE.MeshLambertMaterial({ color: 0xbbbbbb });
  const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
  keyboard.position.set(0, 0.5, 1.2);
  group.add(keyboard);

  // Mouse
  const mouseGeometry = new THREE.BoxGeometry(0.4, 0.15, 0.7);
  const mouseMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
  const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
  mouse.position.set(1.2, 0.6, 1.5);
  group.add(mouse);

  // Desk
  const deskGeometry = new THREE.BoxGeometry(6, 0.3, 3);
  const deskMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });
  const desk = new THREE.Mesh(deskGeometry, deskMaterial);
  desk.position.set(0, 0.15, 0.8);
  group.add(desk);

  return group;
}
