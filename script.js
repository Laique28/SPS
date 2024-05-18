let choices = ['stone', 'paper', 'scissors']
let userDisplay = document.getElementById('userDisplay')
let computerDisplay = document.getElementById('computerDisplay')
let resultDisplay = document.getElementById('resultDisplay')
let userPoint = document.getElementById('userPoint')
let computerPoint = document.getElementById('computerPoint')
let upoints = 0
let cpoints = 0
function play(userChoice) {
    let compterChoice = choices[Math.floor(Math.random() * 3)];
    console.log(compterChoice)
    let result = ''
    if (userChoice === compterChoice) {
        result = 'Its Tie'
    }
    else {
        switch (userChoice) {
            case 'stone':
                result = (compterChoice === 'scissors') ? 'You Win' : 'You Lose'
                if (result == 'You Win') {
                    upoints++;
                    resultDisplay.style.color = 'green'
                } else if (result === 'You Lose') {
                    cpoints++;
                    resultDisplay.style.color = 'red'
                } else {
                    resultDisplay.style.color = 'blue'
                }
                break;
            case 'paper':
                result = (compterChoice === 'stone') ? 'You Win' : 'You Lose'
                if (result == 'You Win') {
                    upoints++;
                    resultDisplay.style.color = 'green'
                } else if (result === 'You Lose') {
                    cpoints++;
                    resultDisplay.style.color = 'red'
                } else {
                    resultDisplay.style.color = 'blue'
                }
                break;
            case 'scissors':
                result = (compterChoice === 'paper') ? 'You Win' : 'You Lose'
                if (result == 'You Win') {
                    upoints++;
                    resultDisplay.style.color = 'green'
                } else if (result === 'You Lose') {
                    cpoints++;
                    resultDisplay.style.color = 'red'
                } else {
                    resultDisplay.style.color = 'blue'
                }
                break;
        }


    }
    // if (resultDisplay.textContent === 'You Win') {
    //     resultDisplay.style.color = 'green'

    // }
    // else if (resultDisplay.textContent === 'You Lose') {
    //     resultDisplay.style.color = 'red'

    // }
    // else {
    //     resultDisplay.style.color = 'blue'

    // }
    userDisplay.textContent = `Player :${userChoice}`;
    computerDisplay.textContent = `Computer :${compterChoice}`;
    resultDisplay.textContent = result
    userPoint.textContent = `User Point:${upoints}`
    computerPoint.textContent = `Computer Point:${cpoints}`
    if (resultDisplay.textContent === 'Its Tie') {
        resultDisplay.style.color = 'blue'
    }

}