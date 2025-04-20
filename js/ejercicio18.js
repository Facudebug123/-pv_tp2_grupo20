const boton = document.getElementById('cambiarTextoBtn');
const parrafo = document.getElementById('miParrafo');

boton.addEventListener('click', () => {
  parrafo.textContent = '¡El texto ha sido cambiado exitosamente!';
});
