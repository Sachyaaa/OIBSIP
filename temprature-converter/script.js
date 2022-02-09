let topInput = document.querySelector(".top-input");
let bottomInput = document.querySelector(".bottom-input");
let topUnit = document.querySelector("#top-unit");
let bottomUnit = document.querySelector("#bottom-unit");
let body = document.querySelector("body");

function ftoc(f) {
  return (parseInt(f) - 32) / 1.8;
}
function ftok(f) {
  return (5 / 9) * (parseInt(f) + 459.67);
}
function ctof(c) {
  return parseInt(c) * 1.8 + 32;
}
function ctok(c) {
  return parseInt(c) + 273.15;
}
function ktoc(k) {
  return parseInt(k) - 273.15;
}
function ktof(k) {
  return ((parseInt(k) - 273.15) * 1.8) + 32;
}

function bottmChange() {
  if (topUnit.value === "f") {
    if (bottomUnit.value === "f") {
      bottomInput.value = topInput.value;
    } else if (bottomUnit.value === "c") {
      bottomInput.value = ftoc(topInput.value);
    } else if (bottomUnit.value === "k") {
      bottomInput.value = ftok(topInput.value);
    }
  } else if (topUnit.value === "c") {
    if (bottomUnit.value === "f") {
      bottomInput.value = ctof(topInput.value);
    } 
    else if (bottomUnit.value === "c") {
        bottomInput.value = topInput.value;
    } 
    else if (bottomUnit.value === "k") {
      bottomInput.value = ctok(topInput.value);
    }
  } else if (topUnit.value === "k") {
    if (bottomUnit.value === "f") {
      bottomInput.value = ktof(topInput.value);
    } else if (bottomUnit.value === "c") {
      bottomInput.value = ktoc(topInput.value);
    } else if (bottomUnit.value === "k") {
        bottomInput.value = topInput.value;
    }
  }
}

body.addEventListener("change", bottmChange);
topInput.addEventListener("keyup", bottmChange);
