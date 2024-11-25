function playGame() {
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

        function getChoiceName (choice) {
            if (choice === 1) return 'piedra';
            if (choice === 2) return 'papel';
            if (choice === 3) return 'tijeras'; 
        }
    
        if (humanChoice === computerChoice) {
            resultMessage =(`Empate! Ambos eligieron ${humanChoice === ROCK ? 'piedra' : humanChoice === PAPER ? 'papel' : 'tijeras'}`)
        } else if (
            (computerChoice === ROCK && humanChoice === SCISSORS) ||
            (computerChoice === PAPER && humanChoice === ROCK) ||
            (computerChoice === SCISSORS && humanChoice === PAPER)
        ) {
            computerScore++; 
            resultMessage  = `La computadora eligió ${getChoiceName(computerChoice)}. Gana la computadora!`; 
        } else if (
            (computerChoice === SCISSORS && humanChoice === ROCK) ||
            (computerChoice === ROCK && humanChoice === PAPER) ||
            (computerChoice === PAPER && humanChoice === SCISSORS)
        ) {
            humanScore++;
            resultMessage = `La computadora eligió ${getChoiceName(computerChoice)}. ¡Ganas!`
        }
    
        resultMessage += ` Puntaje: Humano = ${humanScore} - Computadora = ${computerScore}`
        return resultMessage; 
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice))
    }

    if (humanScore > computerScore) {
        console.log("¡Has ganado el juego!")
    } else if (computerScore > humanScore) {
        console.log('La computadora gana el juego.')
    } else {
        console.log('¡Es un empate!')
    }
}

playGame(); 