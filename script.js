function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3 + 1);

    return choice
}

function getHumanChoice() {
    while(true) {
    const humanInput = prompt('Piedra, papel o tijeras?', '').toLowerCase(); 

    if (humanInput == 'piedra') return 1;
    if (humanInput == 'papel') return 2;
    if (humanInput == 'tijeras') return 3;
    alert('Opción inválida. Inténtelo nuevamente.')
    }
}

let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {

    let resultMessage = ''; 

    const ROCK = 1;
    const PAPER = 2;
    const SCISSORS = 3;

    if (humanChoice === computerChoice) {
        resultMessage =(`Empate! Ambos eligieron ${humanChoice === ROCK ? 'piedra' : humanChoice === PAPER ? 'papel' : 'tijeras'}`)
    } else if (computerChoice === ROCK && humanChoice === SCISSORS) {
        computerScore += 1 
        resultMessage = 'La computadora eligió piedra. ¡Gana la computadora!'
    } else if (computerChoice === PAPER && humanChoice === ROCK) {
        computerScore += 1
        resultMessage = 'La computadora eligió papel. ¡Gana la computadora!'
    } else if (computerChoice === SCISSORS && humanChoice === PAPER) {
        computerScore += 1
        resultMessage = 'La computadora eligió tijeras. ¡Gana la computadora!'
    } else if (computerChoice === SCISSORS && humanChoice === ROCK) {
        humanScore += 1
        resultMessage = 'La computadora eligió tijeras. ¡Ganas!'
    } else if (computerChoice === ROCK && humanChoice === PAPER) {
        humanScore += 1
        resultMessage = 'La computadora eligió piedra. ¡Ganas!'
    } else if (computerChoice === PAPER && humanChoice === SCISSORS) {
        humanScore +=1
        resultMessage = 'La computadora eligió papel. ¡Ganas!'
    }

    resultMessage += ` Puntaje: Humano = ${humanScore} - Computadora = ${computerScore}`
    return resultMessage; 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

if (humanSelection === null) {
    console.log('Juego cancelado por entrada inválida.')
} else {
    const play = playRound(humanSelection, computerSelection)
    console.log(play)
}