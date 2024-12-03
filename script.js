// Variables globales

let humanScore = 0;
let computerScore = 0;

// Referencias al DOM

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const resultMessageDiv = document.querySelector("#resultMessageDiv");
const scoreDiv = document.querySelector("#scoreDiv");
// Funciones

//Funcion que genera la elección de la computadora
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3 + 1);

  return choice;
}

//Funcion principal que juega una ronda
function playRound(humanChoice) {
  //Llama a la elección de la computadora
  const computerChoice = getComputerChoice();

  // Constantes para las elecciones
  const ROCK = 1;
  const PAPER = 2;
  const SCISSORS = 3;

  //Función interna para obtener el nombre de la elección
  function getChoiceName(choice) {
    if (choice === 1) return "piedra";
    if (choice === 2) return "papel";
    if (choice === 3) return "tijeras";
  }

  //Mensaje del resultado
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `¡Empate! Ambos eligieron ${getChoiceName(humanChoice)}`;
  } else if (
    (computerChoice === ROCK && humanChoice === SCISSORS) ||
    (computerChoice === PAPER && humanChoice === ROCK) ||
    (computerChoice === SCISSORS && humanChoice === PAPER)
  ) {
    computerScore++;
    resultMessage = `La computadora eligió ${getChoiceName(
      computerChoice
    )}. ¡Gana la computadora!`;
  } else {
    humanScore++;
    resultMessage = `La computadora eligió ${getChoiceName(
      computerChoice
    )}. ¡Ganas!`;
  }
  resultMessageDiv.textContent = resultMessage;
  scoreDiv.textContent = `Puntaje: Tú = ${humanScore} - Computadora = ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5
        ? "¡Felicidades! Ganaste el juego."
        : "Perdiste... La computadora gana el juego.";
    resultsDiv.textContent = winner;

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

rockButton.addEventListener("click", () => playRound(1));
paperButton.addEventListener("click", () => playRound(2));
scissorsButton.addEventListener("click", () => playRound(3));
