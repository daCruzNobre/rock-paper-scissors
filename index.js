
/**
 * Function to get a random number between 0 and 3 and return
 * it, representing the computer choice 0 = rock, 1 = paper and 2= scissors 
 * @returns a integer betwenn 0 and 2
 */
function getComputerChoice() {
    const min = 0; // rounds min value down
    const max = 2;
    let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);  // gets a random value between 0 and 2
    return computerChoice;
}

/**
 * Function that gets player input and returns a corresponding number
 * @returns 
*/
function getHumanChoice(selectedButton) {
    let choice;
    let playerInput;
    playerInput = selectedButton.toLowerCase();
    switch (playerInput) {
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 0;
            break;
        case "scissors":
            choice = 0;
            break;
        default:
            choice = -1;
    }
    return choice
}

/**
 * Function that makes the app wait two seconds
 * @returns a promise object
*/
// function waitTwoSeconds() {
//     return new Promise(resolve => setTimeout(resolve, 2000));
// }
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";



document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.querySelector("div.mainDiv");
    // Your remaining JavaScript code here...
    mainContainer.appendChild(rockButton);
    mainContainer.appendChild(paperButton);
    mainContainer.appendChild(scissorsButton);
    mainContainer.appendChild(resultDiv);
    mainContainer.appendChild(scoreDiv);
    
    rockButton.addEventListener("click", function() {
        playRound(this);
    });
    paperButton.addEventListener("click", function() {
        playRound(this);
    });
    scissorsButton.addEventListener("click", function() {
        playRound(this);
    });
});

let computerScore = 0;
let humanScore = 0;
let round = 0;

/**
 * Main function, that initiantes the game
*/
/**
 * Function that plays a round of the game
 * @param {*} event * 
 * @returns 
 */
function playRound(event) {
    computerChoice = getComputerChoice();
    buttonText = event.textContent
    humanChoice = getHumanChoice(buttonText);
    if (humanChoice === -1) {
        resultDiv.textContent = "Input not valid, please enter a one of the three options";
        return
    } else if (humanChoice === computerChoice) {
        resultDiv.textContent  = "It's a draw!!";
        round++;
    } else if (humanChoice === 0 && computerChoice === 2 ||
        humanChoice === 1 && computerChoice === 0 ||
        humanChoice === 2 && computerChoice === 1) {
            resultDiv.textContent = "You win!";
            humanScore++;
            round++;
        }
        else {
            resultDiv.textContent  = "Computer wins!";
            computerScore++;
            round++;
    }
    countRounds()
}
function countRounds() {   
       
    scoreDiv.textContent = "You have won " + humanScore + " times!!\n Computer have won " + computerScore + " times!!";
    if (round === 5) {
        scoreDiv.textContent = "You have won " + humanScore+ " times!!\n Computer have won " + computerScore + " times!!\n Game is over!";
        humanScore = 0;
        computerScore = 0;
        round = 0;            
    }  
    
}






