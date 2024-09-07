const container = document.getElementById("container");
const btn = document.getElementById("new-grid");

function askGrid(gridNum) {
  gridNum = Number(gridNum);

  if (isNaN(gridNum) || gridNum < 0) {
    alert("invalid Input");
    return null;
  }

  return gridNum;
}

btn.addEventListener("click", () => {
  const gridNum = prompt("pick grid size");
  const gridInput = askGrid(gridNum);

  if (!gridInput) return;

  container.innerHTML = "";

  const gridSize = 100 / gridInput;

  for (let i = 0; i < gridInput * gridInput; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");

    div.style.height = `${gridSize}%`;
    div.style.width = `${gridSize}%`;

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
});
