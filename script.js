function createGrid(gridCount = 16) {
  const gridContainer = document.querySelector("#grid-container");
  const rows = gridCount;
  const cols = gridCount;
  totalBoxes = rows * cols;

  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    boxSize = 960 / cols;
    box.style.minWidth = `${boxSize}px`;
    box.style.minHeight = `${boxSize}px`;
    gridContainer.appendChild(box);
  }
}

document.addEventListener("onload", createGrid(16));
