function retornarMes(numero) {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  if (numero >= 1 && numero <= 12) {
    return meses[numero - 1];
  } else {
    return "No es un mes válido";
  }
}

console.log(retornarMes(4));
console.log(retornarMes(12));
