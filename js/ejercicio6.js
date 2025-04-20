const edades = [5, 8, 10, 13, 15, 21, 3, 18];
let sum = 0,
  prom;
for (let i = 0; i < edades.length; i++) {
  sum += edades[i];
}
prom = sum / edades.length;
console.log(prom);
