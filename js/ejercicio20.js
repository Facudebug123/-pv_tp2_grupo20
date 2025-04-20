const paises = {
  Argentina: "Buenos Aires",
  Brasil: "Brasilia",
  Chile: "Santiago",
  Perú: "Lima",
  Colombia: "Bogotá",
  Uruguay: "Montevideo",
};

const selectPais = document.querySelector("#pais");
const selectCapital = document.querySelector("#capital");

for (let pais in paises) {
  let optionPais = new Option(pais, pais);
  selectPais.add(optionPais);

  let optionCapital = new Option(paises[pais], paises[pais]);
  selectCapital.add(optionCapital);
}

selectPais.addEventListener("change", function () {
  let capitalSeleccionada = paises[selectPais.value];
  selectCapital.value = capitalSeleccionada;
  console.log(
    `País seleccionado: ${selectPais.value}, Capital: ${capitalSeleccionada}`
  );
});
