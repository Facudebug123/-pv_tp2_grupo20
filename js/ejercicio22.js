const input = document.querySelector("#texto");
const resultado = document.querySelector("#resultado");
const container = document.querySelector(".container");

input.addEventListener("input", () => {
  const texto = input.value;
  resultado.textContent = texto;

  if (texto.length > 20) {
    container.style.backgroundColor = "#fce4ec"; // rosa suave
  } else {
    container.style.backgroundColor = "white";
  }
});
