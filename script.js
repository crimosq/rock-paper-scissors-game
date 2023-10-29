
const userChoiceDisplay = document.getElementById('user-Choice');

const computerChoiceDisplay= document.getElementById('computer-Choice');

const resultDisplay = document.getElementById('result');

const outcomes = document.querySelectorAll('button');

const userPointsDisplay = document.getElementById('userPoints')

const cpuPointsDisplay = document.getElementById('cpuPoints')

let userChoice

let computerChoice

let results

let number = 0 ;

let cpuNumber = 0;

// Generate random number 1-3 
function generateComputerChoice () {
    let randomNum =  Math.floor(Math.random() * 3) + 1

    if (randomNum === 1) {
        computerChoice = 'rock'
    }

    if (randomNum === 2) {
        computerChoice = 'paper'
    }

    if (randomNum === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults() {
    
    if(computerChoice === userChoice) {
        results = 'Draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        results = 'You Win!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        results = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        results = 'You Win!'
    }
    if(computerChoice === 'paper' && userChoice=== 'rock') {
        results = 'You Lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        results = 'You Lose!'
    }
   
    resultDisplay.innerHTML = results
}

outcomes.forEach(outcome => outcome.addEventListener("click", (e) => {
    userChoice = e.currentTarget.id

    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
    userCounter()
    cpuCounter()

}))

function userCounter() {
    if (results == 'You Win!') {
        number ++ ;
       userPointsDisplay.innerHTML = number 
   } 
}
function cpuCounter() {
    if (results == 'You Lose!') {
        cpuNumber ++ ;
        cpuPointsDisplay.innerHTML = cpuNumber
    } 
}
