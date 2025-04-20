const nombres = ["Sofía", "Mateo", "Valentina", "Thiago", "Camila", "Benjamín"];
let mayor = nombres[0];
for (let j = 1; j < nombres.length; j++) {
  if (mayor.length < nombres[j].length) {
    mayor = nombres[j];
  }
}
console.log(mayor);
