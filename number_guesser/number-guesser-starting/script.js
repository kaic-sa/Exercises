let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = num =>{
    return Math.floor(Math.random()*9)
}

const compareGuesses = (human, computer, secret)=>{
if (human-secret > computer-secret){
    return false
} else if ( human-secret > computer-secret){
    return true
} else return true
}
console.log(compareGuesses(6,5,2));