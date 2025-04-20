const contarLetraA = (texto) => {
    let contador = 0;
    for (let letra of texto.toLowerCase()) { // Aca le aplico el metodo .toLowerCase, para pasarlas a minisculas y contar todas las posibles coincidencias.
      if (letra === 'a') {
        contador++;
      }
    }
    return contador;
  };
  
  console.log(contarLetraA("Palabra"))