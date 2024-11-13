const words = [
  { word: "A", type: "letras altas y bajas" },
  { word: "s", type: "letras bajas" },
  { word: "e", type: "letras altas y bajas" },
  { word: "o", type: "letras bajas" }
];

let currentWordIndex = 0;

// Función para mostrar la palabra actual y su información de letras
function showWord() {
  const wordObj = words[currentWordIndex];
  document.getElementById("word").innerText = wordObj.word;
  document.getElementById("letter-info").innerText = `Esta palabra contiene ${wordObj.type}.`;
}

// Función para verificar si la imagen seleccionada es correcta
function checkMatch(image) {
  const wordObj = words[currentWordIndex];
  const resultElement = document.getElementById("result");

  if (image.dataset.word === wordObj.word) {
    document.getElementById("correct-sound").play();
    resultElement.innerText = "¡Correcto!";
  } else {
    document.getElementById("incorrect-sound").play();
    resultElement.innerText = "Intenta de nuevo.";
  }
}

// Cambiar al juego cuando el botón "Iniciar Juego" se presiona
document.getElementById("start-game").addEventListener("click", () => {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";
  showWord();  // Mostrar la primera palabra
});

// Avanzar a la siguiente palabra
document.getElementById("next").addEventListener("click", () => {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  showWord();
  document.getElementById("result").innerText = "";
});

// Agregar evento de clic para cada imagen
document.querySelectorAll(".game-img").forEach(img => {
  img.addEventListener("click", () => checkMatch(img));
});

// Mostrar la primera palabra al cargar el juego (después de iniciar)
showWord();
