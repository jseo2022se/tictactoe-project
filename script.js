
// DOM elements
let squares = document.querySelectorAll('.square')

let container = document.querySelector('.container')

let playerOne = document.querySelector('.player-one')

let playerTwo = document.querySelector('.player-two')

let scoreOne = document.querySelector('.score-one')

let scoreTwo = document.querySelector('.score-two')


// Visual guide of win conditions for tic-tac-toe
//
// let winForm = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]


class Person {

    constructor(name, wins) {
        this.name = name;
        this.wins = wins;
    }
}


let name1 = window.prompt("Enter player one's name: ")

let name2 = window.prompt("Enter player two's name: ")


let person1 = new Person(name1, 0)

let person2 = new Person(name2, 0)


// variable that determines players' turns (True => Player 1, False => Player 2)
let turn = true


startGame()


// function for starting the game
function startGame () {

    playerOne.textContent = `${person1.name}` 

    playerTwo.textContent = `${person2.name}`

    squares.forEach(square => {

        let red = 'red' 
        let blue = 'blue'
        

        // checks for whether the square already has class red/blue and removes it 
        // wipes the board whenever a new round is initiated
        if (square.classList.contains(red)) { //
            square.classList.remove(red)

        } else if (square.classList.contains(blue)) {
            square.classList.remove(blue)
        }
    
        square.addEventListener('click', selectSquare)
    })
    
}


// function that assigns classes that contain the images/symbols to the square 
// also invokes the win and draw functions
function selectSquare (event) {

    // player one's turn
    if (turn) {

        playerTwo.classList.remove('player-two-shadow')

        playerOne.classList.add('player-one-shadow')

        let factor = 'red'

        event.target.classList.add(factor)

        let check 

        check = win(factor)


        // if player one wins round, score incremented and updated
        if(check) {

            person1.wins++

            scoreOne.textContent = `Wins: ${person1.wins}`


            // if # of wins is 3, player 1 is overall winner and is given option to replay or exit
            if (person1.wins == 3) {

                scoreOne.classList.add('score-shadow')

                setTimeout(() => {

                    alert(`Congratulations to ${person1.name}! You have won!`)

                    if(confirm('Would you like to play again?')) {

                        alert('Resetting game...')
                        location.reload() // if player wants to play again, reloads the entire page, resetting all data
                        
                    } else {

                        alert('Thank you for playing. Good bye.')
                        window.close() // exits window tab
                    }

                }, '350')
                

            // else is read when the # of wins is not 3 
            // resets the board and starts the next round    
            } else {

                setTimeout(() => {

                alert(`${person1.name} wins!`)
                alert('Resetting board')
                startGame()

            }, '350')
        }

        // if the square is not a win for the player, a draw check is done
        } else {

            setTimeout(() => {

                draw()
            }, '350')

        }


      // player two's turn  
    } else {

        playerOne.classList.remove('player-one-shadow')

        playerTwo.classList.add('player-two-shadow')

        let factor = 'blue'

        event.target.classList.add(factor)

        let check 

        check = win(factor)


        // if player two wins round, score incremented and updated
        if(check) {

            person2.wins++

            scoreTwo.textContent = `Wins: ${person2.wins}`


            // if # of wins is 3, player 1 is overall winner and is given option to replay or exit
            if (person2.wins == 3) {

                scoreTwo.classList.add('score-shadow')
                
                setTimeout(() => {

                    alert(`Congratulations to ${person2.name}! You have won!`)
    
                    if(confirm('Would you like to play again?')) {

                        alert('Resetting game...')
                        location.reload() // if player wants to play again, reloads the entire page, resetting all data

                    } else {
    
                        alert('Thank you for playing. Good bye.')
                        window.close() // exits window tab
                    }
                }, '350')


            // else is read when the # of wins is not 3 
            // resets the board and starts the next round    
            } else { 

                setTimeout(() => {

                alert(`${person2.name} wins!`)
                alert('Resetting board...')
                startGame()

            }, '350')

        }


        // if the square is not a win for the player, a draw check is done
        } else {

            setTimeout(() => {
                draw()
            }, '350')

        }

    }


    // after the current player's turn, the variable 'turn' is set to the opposite 
    turn = !turn


    // event listener is removed to stop it from running
    event.target.removeEventListener('click', selectSquare)
}


// function that checks for the win condition after a user clicks on a square 
// checks for whether three squares (as shown in the visual guide for win condition) contain the same class 
function win(factor) {
    
    if(squares[0].classList.contains(factor) && squares[1].classList.contains(factor) && squares[2].classList.contains(factor)) {
        return true

    } else if (squares[3].classList.contains(factor) && squares[4].classList.contains(factor) && squares[5].classList.contains(factor)) {
        return true

    } else if (squares[6].classList.contains(factor) && squares[7].classList.contains(factor) && squares[8].classList.contains(factor)) {
        return true

    } else if (squares[0].classList.contains(factor) && squares[3].classList.contains(factor) && squares[6].classList.contains(factor)) {
        return true

    } else if (squares[1].classList.contains(factor) && squares[4].classList.contains(factor) && squares[7].classList.contains(factor)) {
        return true

    } else if (squares[2].classList.contains(factor) && squares[5].classList.contains(factor) && squares[8].classList.contains(factor)) {
        return true

    } else if (squares[0].classList.contains(factor) && squares[4].classList.contains(factor) && squares[8].classList.contains(factor)) {
        return true

    } else if (squares[2].classList.contains(factor) && squares[4].classList.contains(factor) && squares[6].classList.contains(factor)) {
        return true

    } else {
        return false
    }
}


// a function that checks after the win function, to determine whether the game is now a draw
// checks whether every square has either class ('red' or 'blue') 
// and if it does considers it a draw and resets the board
function draw() {

    if((squares[0].classList.contains('red') || squares[0].classList.contains('blue')) &&  

            (squares[1].classList.contains('red') || squares[1].classList.contains('blue')) && 

            (squares[2].classList.contains('red') || squares[2].classList.contains('blue')) &&

            (squares[3].classList.contains('red') || squares[3].classList.contains('blue')) &&

            (squares[4].classList.contains('red') || squares[4].classList.contains('blue')) &&

            (squares[5].classList.contains('red') || squares[5].classList.contains('blue')) &&

            (squares[6].classList.contains('red') || squares[6].classList.contains('blue')) &&

            (squares[7].classList.contains('red') || squares[7].classList.contains('blue')) &&

            (squares[8].classList.contains('red') || squares[8].classList.contains('blue'))) {

                alert('Draw')
                alert('Resetting board...')
                turn = true
                startGame()
            }
}