
/**
 * Function to get a random number between 0 and 3 and return
 * it, representing the computer choice 0 = rock, 1 = paper and 2= scissors 
 * @returns a integer betwenn 0 and 2
 */
function getComputerChoice ()
{
    const min = 0; // rounds min value down
    const max = 2;
    let computerChoice= Math.floor(Math.random() * (max - min + 1) + min);  // gets a random value between 0 and 2
    return computerChoice; 
}
computerChoice = getComputerChoice();

/**
 * Function that gets player input and returns a corresponding number
 * @returns 
 */
function getHumanChoice()
{
    let choice;
    let playerInput;
    playerInput = prompt("What do you choose? Rock, paper or scissors? ");
    playerInput = playerInput.toLowerCase();
    switch (playerInput)
    {
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
function waitTwoSeconds()
{
    return new Promise(resolve => setTimeout(resolve, 2000));
}

/**
 * Main function, that initiantes the game
 */
function playGame()
{
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

/**
 * Function that plays a round of the game
 * @param {*} computerChoice 
 * @param {*} humanChoice 
 * @returns 
 */
function playRound(computerChoice, humanChoice)
{
    if (humanChoice === -1)
    {
        console.log("Input not valid, please enter a one of the three options")
        return
    }else if (humanChoice === computerChoice)
    {
        console.log("It's a draw!!")
    }else if (humanChoice === 0 && computerChoice === 2 || 
            humanChoice === 1 && computerChoice === 0 ||
            humanChoice === 2 && computerChoice === 1) 
            {
                console.log("You win!")
                humanScore ++;    
            }
    else
    {
        console.log("Computer wins!")
        computerScore ++;
    }        
}
    /**
     * Assynchronous function that makes tha game loops 5 times
     */
    async function gameLoop()
    {
        while (roundNumber <=5)
        {
            let computerChoice = getComputerChoice();
            let humanChoice = getHumanChoice();

            playRound(computerChoice, humanChoice);

            console.log("You have won " + humanScore + " times!!" )
            console.log("Computer have won " + computerScore + " times!!" )
            if (roundNumber === 5)
            {
                console.log("Game is over!")
            }
            await waitTwoSeconds(); // makes the lopp stop for two seconds before next execution
            roundNumber ++;
        }
    }
    gameLoop() // call game loop function
}      

// call main function
playGame();
      



