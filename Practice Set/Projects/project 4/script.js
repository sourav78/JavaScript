let randomNum = parseInt(Math.random()*100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const chances = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let guesses = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 0 || guess > 100){
        alert("Please enter a valid number")
    }else if(guess === ''){
        alert("Please enter a number")
    }else{
        guesses.push(guess)
        if(numGuess === 10){
            checkGuess(guess)
            displayMessage(`Game Over!!! The number was ${randomNum}`)
            endGame()
        }else{
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage("You guessed it right")
        endGame()
    }else if(guess < randomNum){
        displayMessage("The guessed number is LOW")
    }else if(guess > randomNum){
        displayMessage("The guessed number is HIGH")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML = guesses
    chances.innerHTML = 10 - numGuess
    numGuess += 1
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')

    p.classList.add("button")
    p.innerHTML = `<h3 id="startgame">Start New Game</h3>`
    p.style.border = "2px solid white"
    p.style.borderRadius = "10px"
    p.style.padding = "5px 10px"
    p.style.maxWidth = "200px"
    p.style.maxHeight = "60px"
    p.style.textAlign = "center"
    p.style.margin = "auto"
    p.style.cursor = "pointer"
    startOver.appendChild(p)

    playGame = false
    newGame()
}

function newGame(){
    const startGame = document.querySelector("#startgame")
    startGame.addEventListener("click", function(e){
        randomNum = parseInt(Math.random()*100 + 1)
        let guesses = []
        let numGuess = 1
        guessSlot.innerHTML = ''
        chances.innerHTML = 10
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHigh.innerHTML = ''
        playGame = true
    })
    
}