function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    return(choice)
}

function getHumanChoice () {
    const humanChoice = prompt('Rock, paper, scissors?', '').toLowerCase(); 

    if (humanChoice == 'rock') {
        return(1)
    } else if (humanChoice == 'paper') {
        return(2)
    } else if (humanChoice == 'scissors') {
        return(3)
    } else {
        alert('Opción inválida')
    }
}

let humanScore = 0;
let computerScore = 0; 