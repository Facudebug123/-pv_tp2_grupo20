const input = document.querySelector("#texto");
const resultado = document.querySelector("#resultado");

input.addEventListener("input", () => {
  resultado.textContent = input.value;
});
