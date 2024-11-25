function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return('Rock')
    } else if (choice == 1){
        return('Paper')
    } else {
        return('Scissors')
    }

}

function getHumanChoice () {
    const humanChoice = prompt('Rock, paper, scissors?', ''); 

    if (humanChoice == 'Rock' || humanChoice == 'rock') {
        return(1)
    } else if (humanChoice == 'Paper' || humanChoice == 'paper') {
        return(2)
    } else if (humanChoice == 'Scissors' || humanChoice == 'scissors') {
        return(3)
    } else {
        alert('Opción inválida')
    }
}