let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let solider = document.querySelector(".solider");

let canves = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

const horn = new Audio();
horn.src = "horn.mp3";
const popSound = new Audio();
popSound.src = "popSound.m4a";
const wishesSound = new Audio();
wishesSound.src = "wishesSound.m4a";

window.onload = function () {
  document.getElementById("song").play();
  let firstWish = setTimeout(wish(), 50000);
};

function wish() {
  horn.play();
  wishesSound.play();
  popSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 600,
  });
}
next.addEventListener("click", function () {
  horn.play();
  popSound.play();
  wishesSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 600,
  });
  let slides = document.querySelectorAll(".slides");
  solider.appendChild(slides[0]);
});
prev.addEventListener("click", function () {
  horn.play();
  popSound.play();
  wishesSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 600,
  });
  let slides = document.querySelectorAll(".slides");
  solider.prepend(slides[slides.length - 1]);
});
