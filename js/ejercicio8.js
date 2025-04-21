const calcularMayor = (num1, num2) => {
  let may;
  if (num1 > num2) {
    may = `Numero mayor: ${num1}.`;
  } else if (num2 > num1) {
    may = `Numero mayor: ${num2}.`;
  } else may = `Son iguales: ${num1}.`;
  return may;
};
console.log(calcularMayor(8, 10));
