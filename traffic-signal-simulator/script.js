const redBtn = document.getElementById("red-btn");
const yellowBtn = document.getElementById("yellow-btn");
const greenBtn = document.getElementById("green-btn");

let toggled1 = false;
let toggled2 = false;
let toggled3 = false;

function goRed() {
  if (!toggled1) {
    document.getElementById("p1").style.backgroundColor = "red";
    redBtn.innerHTML = "Go Back";
    toggled1 = true;
  } else {
    document.getElementById("p1").style.backgroundColor = "gray";
    redBtn.innerHTML = "Stop";
    toggled1 = false;
  }
}

function goYellow() {
  if (!toggled2) {
    document.getElementById("p2").style.backgroundColor = "yellow";
    yellowBtn.innerHTML = "Go Back";
    toggled2 = true;
  } else {
    document.getElementById("p2").style.backgroundColor = "gray";
    yellowBtn.innerHTML = "Wait";
    toggled2 = false;
  }
}

function goGreen() {
  if (!toggled3) {
    document.getElementById("p3").style.backgroundColor = "green";
    greenBtn.innerHTML = "Go Back";
    toggled3 = true;
  } else {
    document.getElementById("p3").style.backgroundColor = "gray";
    greenBtn.innerHTML = "Go";
    toggled3 = false;
  }
}
