function playGame() {
  // Variables to store scores
  let playerScore = 0;
  let computerScore = 0;

  // Play for 5 rounds
  for (let i = 0; i < 3; i++) {
    const roundResult = playRound(); // Call playRound to get round outcome
    
    // Update scores based on round result
    if (roundResult === "win") {
      playerScore++;
    } else if (roundResult === "lose") {
      computerScore++;
    }
  }

  // Declare winner based on final scores
  let winner = "";
  if (playerScore > computerScore) {
    winner = "You";
  } else if (computerScore > playerScore) {
    winner = "Computer";
  } else {
    winner = "Tie";
  }

  // Announce the winner and scores
  console.log(`Final Scores: Player - ${playerScore}, Computer - ${computerScore}`);
  console.log(`Winner: ${winner}`);
}

// Function to play a single round (modify this based on your game logic)
function playRound() {
  // Simulate computer choice (replace with actual logic)
  const computerSelection = Math.random() > 0.5 ? "rock" : "scissors";
  
  // Prompt user for choice (replace with user input logic)
  const playerSelection = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();

  // Compare selections and determine winner (modify based on game rules)
  let result = "";
  if (playerSelection === computerSelection) {
    result = "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "win";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "win";
  } else {
    result = "lose";
  }

  // Announce round result (modify output as needed)
  console.log(`Round ${ + 1} Result: You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`);

  return result; // Return result for scorekeeping in playGame
}

// Start the game
playGame();