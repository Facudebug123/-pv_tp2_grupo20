const sumarRango = (inicio, fin) => {
    if (inicio > fin) {
      console.log("El número inicial debe ser menor o igual que el número final.");
    }
  
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
      suma += i;
    }
  
    return suma;
  };
  

console.log(sumarRango(2, 5))