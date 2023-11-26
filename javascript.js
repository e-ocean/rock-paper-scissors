//get computer random choice of rock, paper, or scissors, convert to lowercase



function getComputerChoice(){ 
    const choices = ["Rock" , "Paper", "Scissors"]
    let randomChoice = choices[Math.floor(Math.random() * 3)]
    return randomChoice
}




function caseInsensitize(string){
    let casePlayerSelection = string.toLowerCase()
    let firstCap = casePlayerSelection[0].toUpperCase()
    let cleanChoice = casePlayerSelection.replace(casePlayerSelection[0], firstCap)
    return cleanChoice
}


function getPlayerChoice(){
    let playerInput = prompt("Choose Rock, Paper, or Scissors")

    if (playerInput){
        playerInput = caseInsensitize(playerInput)
    }

    if ((playerInput != "Rock" && playerInput != "Paper" && playerInput != "Scissors") || playerInput === undefined){
        alert("Please pick a valid choice")
        return getPlayerChoice()
    }

 
    return playerInput
}




// let computerSelection = getComputerChoice()
// let playerSelection = getPlayerChoice()


function playRound(computerSelection, playerSelection){
    let playerWin 
    if (computerSelection === playerSelection){
        alert(`It's a draw. You both chose ${computerSelection}`)
        return `It's a draw. You both chose ${computerSelection}`
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        playerWin = true
        return playerWin
    } else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors")){
        alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        playerWin = false
        return playerWin
        
    }   
}


// console.log(playRound(computerSelection, playerSelection))


function game(){
    let playerScore = 0
    let compScore = 0

    for (i = 0; i < 5; i++){
        let computerSelection = getComputerChoice()
        let playerSelection = getPlayerChoice()
        if (playRound(computerSelection, playerSelection) === true){
            playerScore++
        } else {
            compScore++
        }
    }

    if (playerScore > compScore){
        return `You win the game! Your score is ${playerScore}, the computer's score is ${compScore}`
    } else if (playerScore < compScore){
        return `You lost the game. Your score is ${playerScore}, the computer's score is ${compScore}`
    } else{
        return `It's a tie. Both players' score is ${playerScore}`
    }

}


console.log(game())

//play a game, using previous function to play 5 rounds.



