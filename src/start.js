const mouseUpSound = new Audio("../sounds/mouse_up.mp3");

document.addEventListener("mouseup", () => {
  mouseUpSound.play();
});

document.querySelector("button").addEventListener("click", function () {
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
