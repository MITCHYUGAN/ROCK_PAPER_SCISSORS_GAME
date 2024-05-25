const rockButton = document.querySelector("#rockButton")
const paperButton = document.querySelector("#paperButton")
const scissorsButton = document.querySelector("#scissorsButton")
const gameResults = document.querySelector(".gameResults")
const gamebuttons = document.querySelectorAll(".gamebuttons")

let humanScore = 0
let computerScore = 0
let gameRounds = 1
let gameRoundsValue = ""

let humanChoice ;
let humanSelection ;
let computerSelection ;

rockButton.addEventListener("click", () => {
    humanChoice = rockButton.textContent
    playRound()
})

paperButton.addEventListener("click", () => {
    humanChoice = paperButton.textContent
    playRound()
})

scissorsButton.addEventListener("click", () => {
    humanChoice = scissorsButton.textContent
    playRound()
})

// Logic to get the computer's choice to start the game
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

// Create and append every round result to the DOM
const gameRoundResult  = document.createElement("h3")
gameResults.appendChild(gameRoundResult)

// Create the game reset button to restart the game
const gameResetBtn = document.createElement("button")
gameResetBtn.className = "gameResetBtn"

function playRound(humanChoiceParam, computerChoiceParam){

    computerChoiceParam = getComputerChoice()
    humanChoiceParam = humanChoice

    // A condition to check the choices and define a winner
    if(humanChoiceParam === "Rock" && computerChoiceParam === "Scissors"){
        gameRoundsValue = "win"
        humanScore++
    } else if (humanChoiceParam === "Rock" && computerChoiceParam === "Paper"){
        gameRoundsValue = "lose"
        computerScore++
    } else if (humanChoiceParam === "Scissors" && computerChoiceParam === "Paper"){
        gameRoundsValue = "win"
        humanScore++
    } else if(humanChoiceParam === "Scissors" && computerChoiceParam === "Rock"){
        gameRoundsValue = "lose"
        computerScore++
    } else if (humanChoiceParam === "Paper" && computerChoiceParam === "Rock"){
        gameRoundsValue = "win"
        humanScore++
    } else if(humanChoiceParam === "Paper" && computerChoiceParam === "Scissors"){
        gameRoundsValue = "lose"
        computerScore++
    } else if(humanChoiceParam === computerChoiceParam){
        gameRoundsValue = "Tie"
    } 


    // Check conditions to get the final game winner
    if (humanScore < 5 && computerScore < 5) {
        gameRoundResult.textContent = `Round ${gameRounds++} Result: you chose ${humanChoiceParam} computer chose ${computerChoiceParam}. ${gameRoundsValue}`
        
    } else if (humanScore >= 5 || computerScore >= 5){
        gameRoundResult.textContent = `Final Result: Human score: ${humanScore}, Computer score: ${computerScore}`
        gameResetBtn.textContent = "Reset Game"
        gameResults.appendChild(gameResetBtn)
        gamebuttons.forEach(button => {
            button.classList.remove("active")
        })
    }

    // Reset the Game logic, to start a new game after winner
    gameResetBtn.addEventListener("click", () => {
        humanScore = 0
        computerScore = 0
        gameRounds = 1
        gameResults.removeChild(gameResetBtn)
        gamebuttons.forEach(button => {
            button.classList.add("active")
        })
        gameRoundResult.textContent = "Click any button above to restart"
    })
}