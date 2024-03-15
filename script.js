const submitBtn = document.querySelector('button[type="submit"]');
const container = document.getElementById("sketch-container");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let size = e.target.previousElementSibling.value;
  if (size > 0) {
    resetCanvas();
    createCanvas(size);
    const pixels = document.querySelectorAll(".pixels");
    pixels.forEach(pixel => {
      pixel.addEventListener("click", e => {
        changeColor(e.target);
      });
    });
  }
  
});

function resetCanvas() {
  container.innerHTML = '';
}

function createCanvas(size) {
  for (let i = 0; i < (size * size); i++) {
    let div = document.createElement("div");
    div.classList.add("pixels");
    container.appendChild(div);
  }
  container.style.display = 'grid';
  container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
 }


function changeColor(node) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  node.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
