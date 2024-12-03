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
const winnerDiv = document.querySelector("#winnerDiv");
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

  const scoreMessage = `Puntaje: Tú = ${humanScore} - Computadora = ${computerScore}`;

  resultMessageDiv.textContent = resultMessage;
  scoreDiv.textContent = scoreMessage;

  if (humanScore === 5 || computerScore === 5) {
    resultMessageDiv.textContent = resultMessage;
    scoreDiv.textContent = scoreMessage;
    const winner =
      humanScore === 5
        ? "¡Felicidades! Ganaste el juego."
        : "Perdiste... La computadora gana el juego.";
    winnerDiv.textContent = winner;

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    const resetButtonDiv = document.createElement("div");
    resetButtonDiv.setAttribute("id", "resetButtonDiv");

    const resetButton = document.createElement("button");
    resetButton.setAttribute("id", "reseteButton");

    resetButton.textContent = "Reset game";

    //Añade el botón al div y el div al DOM
    resetButtonDiv.appendChild(resetButton);
    resultsDiv.appendChild(resetButtonDiv);

    resetButton.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      resultMessage = "";
      resultMessageDiv.textContent = "";
      scoreDiv.textContent = "";
      winnerDiv.textContent = "";

      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;

      resetButton.remove();
    });
  }
}

rockButton.addEventListener("click", () => playRound(1));
paperButton.addEventListener("click", () => playRound(2));
scissorsButton.addEventListener("click", () => playRound(3));
