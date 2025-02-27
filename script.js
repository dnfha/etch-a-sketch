const gridContainer = document.querySelector("#grid-container");

const button = document.querySelector("button");

function updateGridSizeText(gridSize) {
  const gridSizeText = document.querySelector("#grid-size-text");
  gridSizeText.textContent = `Grid: ${gridSize} x ${gridSize}`;
}

function createGrid(gridSize = 16) {
  const rows = gridSize;
  const cols = gridSize;
  totalBoxes = rows * cols;

  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    boxSize = 960 / cols;
    box.style.minWidth = `${boxSize}px`;
    box.style.minHeight = `${boxSize}px`;
    gridContainer.appendChild(box);
  }

  updateGridSizeText(gridSize);
}

function clearGrid() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
}

document.addEventListener("DOMContentLoaded", createGrid());

button.addEventListener("click", () => {
  let gridSize;
  while (gridSize !== null) {
    gridSize = window.prompt("Enter grid size (min 16, max 100)", 16);
    console.log(gridSize);
    if (Number(gridSize) >= 16 && Number(gridSize) <= 100) {
      clearGrid();
      createGrid(gridSize);
      break;
    }
  }
});

gridContainer.addEventListener("mouseenter", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseout", (e) => {
      e.target.classList.add("colored");
    });
  });
});
