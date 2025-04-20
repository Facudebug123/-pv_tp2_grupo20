const btn = document.getElementById("cambiarColor");
const circle = document.getElementById("circle");

const colores = ["#FFEB3B", "#4CAF50", "#2196F3", "#FF5722", "#9C27B0"];
let indiceColor = 0;

btn.addEventListener("click", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  circle.style.left = `${x - 50}px`;
  circle.style.top = `${y - 50}px`;

  // Trigger animation
  circle.style.transition = "none";
  circle.style.transform = "scale(0)";
  void circle.offsetWidth; // Forzar reflow para reiniciar animación
  circle.style.transition = "transform 0.8s ease-out";
  circle.style.backgroundColor = colores[indiceColor];
  circle.style.transform = "scale(20)";

  // Cambiar color de fondo del body
  document.body.style.backgroundColor = colores[indiceColor];

  console.log("Color cambiado a:", colores[indiceColor]);

  // Avanzar al siguiente color
  indiceColor = (indiceColor + 1) % colores.length;
});
