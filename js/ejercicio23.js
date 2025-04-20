const radios = document.querySelectorAll('input[name="lenguaje"]');
const seleccionado = document.getElementById("seleccionado");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const valor = radio.value;
    seleccionado.textContent = `Seleccionaste: ${valor}`;
    console.log(`Lenguaje seleccionado: ${valor}`);
  });
});
