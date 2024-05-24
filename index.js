// Work on
// Make your function’s humanSelection parameter case-insensitive


let humanScore = 0
let computerScore = 0
let timesToPlayGame = 5

let humanSelection ;
let computerSelection ;

function playRound(humanChoice, computerChoice){

    // Get the Player chain from the prompt
    function getHumanChoice(userChoiceParam){
        userChoiceParam = prompt("Write a valid input: Rock, Paper or Scissors")
        return userChoiceParam
    }

    // Randomly Get the Computer Choice 
    function getComputerChoice(randomNumber) {
        randomNumber = Math.random();
        if(randomNumber < 0.3){
            return "Rock"
        } else if(randomNumber < 0.6) {
            return "Paper"
        } else {
            return "Scissors"
        }
    }

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    
    // A condition to check the choices and define a winner
    if(humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log(`won! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    } else if (humanChoice === "Rock" && computerChoice === "Paper"){
        console.log(`lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log(`won! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log(`lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        console.log(`won! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log(`lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    } else if(humanChoice === computerChoice){
        console.log("It's a tie");
    } else {
        alert("Input a valid value")
    }
}



function playGame(){
    for (let i = 0; i < timesToPlayGame; i++) {
        playRound()
    }

    if (humanScore > computerScore) {
        console.log(`Final Result: You won!! Human Score: ${humanScore} is greater than ${computerScore}`)
    } else if (humanScore < computerScore){
        console.log(`Final Result: You Lose! Computer Score: ${computerScore} is greater than ${humanScore}`)
    } else if (humanScore == computerScore){
        console.log(`Final Result: It was a Tie! Computer Score: ${computerScore} is the same ${humanScore}`);
    }
}

playGame()