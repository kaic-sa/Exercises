let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = num => {
    return Math.floor(Math.random() * 9)
}

const compareGuesses = (human, computer, secret) => {
    if (human < 0 || human > 9) {
        alert('Numero nao permitido')
        window.location.reload(true);
    }
    if (secret - human > secret - computer) {

        return false
    } else if (secret - human < secret - computer) {
        return true
    } else return true
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else computerScore += 1;
}
const advanceRound = () => {
    currentRoundNumber + 1;
}