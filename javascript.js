//get computer random choice of rock, paper, or scissors, convert to lowercase





function getComputerChoice(){ 
    const choices = ["Rock" , "Paper", "Scissors"]
    let randomChoice = choices[Math.floor(Math.random() * 3)]
    return randomChoice
}


let playerScore = 0;
let compScore = 0;
let roundCount = 0



const rockBtn = document.querySelector("rock")
const paperBtn = document.querySelector("paper")
const scissorsBtn = document.querySelector("scissors")
const buttons = document.querySelectorAll('button')
let resultsDiv = document.querySelector(".results")

let roundWinnerEl = document.querySelector(".roundwinner")
let scoreEl = document.querySelector("score")
let playerScoreEl = document.querySelector(".playerscoreEl")
let compScoreEl = document.querySelector(".computerScore")


console.log(roundWinnerEl)




function playRound(computerSelection, playerSelection){
    let winner

    if (computerSelection === playerSelection){
        winner = "it's a draw"
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        winner = "player"
    } else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors")){
        winner = "computer"        
    }   
    return winner
}




// function handleClick(){
//     buttonChoices.forEach(function(button){
//         //for each button listen for click, match evt target to player selection var,  

//         button.addEventListener("click", function(evt){
//             playerSelection = evt.target.innerText
//             computerSelection = getComputerChoice()
//             playRound(playerSelection,computerSelection)
//         })
//     })
// }




function handleClick(evt) {
    const playerChoice = evt.target.innerText;
    const computerChoice = getComputerChoice();
    const roundWinner = playRound(playerChoice, computerChoice);
    playerScoreEl.textContent = playerScore
    compScoreEl.textContent = compScore
    // Update scores based on the round result (assuming playerScore and compScore are global variables)
    if (roundWinner === "player") {
        playerScore++;
        let result = `Player chose: ${playerChoice}, Computer chose: ${computerChoice} Round Winner: ${roundWinner}`
        roundWinnerEl.textContent = result
        playerScoreEl.textContent = playerScore
        compScoreEl.textContent = compScore
    } else if (roundWinner === "computer") {
        compScore++;
        let result = `Player chose: ${playerChoice}, Computer chose: ${computerChoice} Round Winner: ${roundWinner}`

        roundWinnerEl.textContent = result
        playerScoreEl.textContent = playerScore
        compScoreEl.textContent = compScore
    } else {
        let result = `Both players chose: ${playerChoice}, it's a draw.`
        roundWinnerEl.textContent = result
        playerScoreEl.textContent = playerScore
        compScoreEl.textContent = compScore
    }

    // Display or handle the result as needed
    // console.log(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}`);
    // console.log(`Round Winner: ${roundWinner}`);
    // console.log(`Player Score: ${playerScore}, Computer Score: ${compScore}`);

    // Increment roundCount
    roundCount++;

    // Check if 5 rounds are completed
    if (roundCount === 5) {
        let createdResults = document.createElement("h1")
        resultsDiv.appendChild(createdResults)
        if (playerScore > compScore) {
            console.log("YOU WIN THE GAME");
            let result = `You won the game! Your score is ${playerScore}, the computer's score is ${compScore}`
            createdResults.textContent = result
            return result;
        } else if (playerScore < compScore) {
            console.log("YOU LOSE THE GAME");
            let result = `You lost the game. Your score is ${playerScore}, the computer's score is ${compScore}`
            createdResults.textContent = result
            return result
        } else {
            let result = `It's a tie - both scores are ${playerScore}`
            createdResults.textContent = result
            return result
        }
    }
}









function game(){
    let finalResult
    // Get player's choice and play 5 round
    if (roundCount === 5){
        if (playerScore > compScore) {
            console.log("YOU WIN THE GAME");
            finalResult = `You win the game! Your score is ${playerScore}, the computer's score is ${compScore}`
            return finalResult;
        } else if (playerScore < compScore) {
            console.log("YOU LOSE THE GAME");
            finalResult = `You lost the game. Your score is ${playerScore}, the computer's score is ${compScore}`
            return finalResult;
        } else {
            console.log();
            finalResult = `It's a tie - both scores are ${playerScore}`
            return finalResult
        }
    
    }
    
    buttons.forEach(function (button) {
        button.addEventListener("click", handleClick);
    });

}





    

game()



