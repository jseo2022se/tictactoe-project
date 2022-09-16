// alert('yolo')

let squares = document.querySelectorAll('.square')

let container = document.querySelector('.container')

let winForm = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


class Person {

    constructor(name, wins) {
        this.name = name;
        this.wins = wins;
    }
}

let person1 = new Person('James', 0)

let person2 = new Person('John', 0)


let playerOne = document.querySelector('.player-one')

let playerTwo = document.querySelector('.player-two')

let scoreOne = document.querySelector('.score-one')

let scoreTwo = document.querySelector('.score-two')

let turn = true


startGame()


function startGame () {

    playerOne.textContent = `${person1.name}`

    playerTwo.textContent = `${person2.name}`

    squares.forEach(square => {

        let red = 'red'
        let blue = 'blue'
        
        if (square.classList.contains(red)) {
            square.classList.remove(red)

        } else if (square.classList.contains(blue)) {
            square.classList.remove(blue)
        }
    
        square.addEventListener('click', selectSquare)
    })
    
}


function selectSquare (event) {

    if (turn) {

        let factor = 'red'
        event.target.classList.add(factor)

        let check 
        check = win(factor)

        if(check) {

            person1.wins++

            scoreOne.textContent = `Wins: ${person1.wins}`

            if (person1.wins == 3) {

                setTimeout(() => {

                    alert(`Congratulations to ${person1.name}! You have won!`)

                    if(confirm('Would you like to play again?')) {

                        alert('Resetting game...')
                        location.reload()
                        
                    } else {

                        alert('Thank you for playing. Good bye.')
                        window.close()
                    }
                }, '350')
                
            } else {

                setTimeout(() => {

                alert(`${person1.name} wins!`)
                alert('Resetting board')
                startGame()

            }, '350')
        }

        } else {

            setTimeout(() => {

                draw()
            }, '350')

        }

    } else {

        let factor = 'blue'
        event.target.classList.add(factor)

        let check 
        check = win(factor)


        if(check) {

            person2.wins++

            scoreTwo.textContent = `Wins: ${person2.wins}`

            if (person2.wins == 3) {

                setTimeout(() => {

                    alert(`Congratulations to ${person2.name}! You have won!`)
    
                    if(confirm('Would you like to play again?')) {

                        alert('Resetting game...')
                        location.reload()

                    } else {
    
                        alert('Thank you for playing. Good bye.')
                        window.close()
                    }
                }, '350')

            } else { 

                setTimeout(() => {

                alert(`${person2.name} wins!`)
                alert('Resetting board...')
                startGame()

            }, '350')

        }

        } else {

            setTimeout(() => {
                draw()
            }, '350')

        }

    }

    turn = !turn

    event.target.removeEventListener('click', selectSquare)

}


function win(factor) {
    
    if(squares[winForm[0][0]].classList.contains(factor) && squares[winForm[0][1]].classList.contains(factor) && squares[winForm[0][2]].classList.contains(factor)) {
        return true

    } else if (squares[winForm[1][0]].classList.contains(factor) && squares[winForm[1][1]].classList.contains(factor) && squares[winForm[1][2]].classList.contains(factor)) {
        return true

    } else if (squares[winForm[2][0]].classList.contains(factor) && squares[winForm[2][1]].classList.contains(factor) && squares[winForm[2][2]].classList.contains(factor)) {
        return true

    } else if (squares[winForm[3][0]].classList.contains(factor) && squares[winForm[3][1]].classList.contains(factor) && squares[winForm[3][2]].classList.contains(factor)) {
        return true

    } else if (squares[winForm[4][0]].classList.contains(factor) && squares[winForm[4][1]].classList.contains(factor) && squares[winForm[4][2]].classList.contains(factor)) {
        return true

    } else if (squares[winForm[5][0]].classList.contains(factor) && squares[winForm[5][1]].classList.contains(factor) && squares[winForm[5][2]].classList.contains(factor)) {
        return true

    } else if (squares[winForm[6][0]].classList.contains(factor) && squares[winForm[6][1]].classList.contains(factor) && squares[winForm[6][2]].classList.contains(factor)) {
        return true

    } else if (squares[winForm[7][0]].classList.contains(factor) && squares[winForm[7][1]].classList.contains(factor) && squares[winForm[7][2]].classList.contains(factor)) {
        return true

    } else {
        return false
    }
}


function draw() {

    if((squares[winForm[0][0]].classList.contains('red') || squares[winForm[0][0]].classList.contains('blue')) &&  
            (squares[winForm[0][1]].classList.contains('red') || squares[winForm[0][1]].classList.contains('blue')) && 
            (squares[winForm[0][2]].classList.contains('red') || squares[winForm[0][2]].classList.contains('blue')) &&
            (squares[winForm[1][0]].classList.contains('red') || squares[winForm[1][0]].classList.contains('blue')) &&
            (squares[winForm[1][1]].classList.contains('red') || squares[winForm[1][1]].classList.contains('blue')) &&
            (squares[winForm[1][2]].classList.contains('red') || squares[winForm[1][2]].classList.contains('blue')) &&
            (squares[winForm[2][0]].classList.contains('red') || squares[winForm[2][0]].classList.contains('blue')) &&
            (squares[winForm[2][1]].classList.contains('red') || squares[winForm[2][1]].classList.contains('blue')) &&
            (squares[winForm[2][2]].classList.contains('red') || squares[winForm[2][2]].classList.contains('blue')) &&
            (squares[winForm[3][0]].classList.contains('red') || squares[winForm[3][0]].classList.contains('blue')) &&
            (squares[winForm[3][1]].classList.contains('red') || squares[winForm[3][1]].classList.contains('blue')) &&
            (squares[winForm[3][2]].classList.contains('red') || squares[winForm[3][2]].classList.contains('blue')) &&
            (squares[winForm[4][0]].classList.contains('red') || squares[winForm[4][0]].classList.contains('blue')) &&
            (squares[winForm[4][1]].classList.contains('red') || squares[winForm[4][1]].classList.contains('blue')) &&
            (squares[winForm[4][2]].classList.contains('red') || squares[winForm[4][2]].classList.contains('blue')) &&
            (squares[winForm[5][0]].classList.contains('red') || squares[winForm[5][0]].classList.contains('blue')) &&
            (squares[winForm[5][1]].classList.contains('red') || squares[winForm[5][1]].classList.contains('blue')) &&
            (squares[winForm[5][2]].classList.contains('red') || squares[winForm[5][2]].classList.contains('blue')) &&
            (squares[winForm[6][0]].classList.contains('red') || squares[winForm[6][0]].classList.contains('blue')) &&
            (squares[winForm[6][1]].classList.contains('red') || squares[winForm[6][1]].classList.contains('blue')) &&
            (squares[winForm[6][2]].classList.contains('red') || squares[winForm[6][2]].classList.contains('blue')) &&
            (squares[winForm[7][0]].classList.contains('red') || squares[winForm[7][0]].classList.contains('blue')) &&
            (squares[winForm[7][1]].classList.contains('red') || squares[winForm[7][1]].classList.contains('blue')) &&
            (squares[winForm[7][2]].classList.contains('red') || squares[winForm[7][2]].classList.contains('blue'))) {
                alert('Draw')
                alert('Reloading page')
                turn = true
                startGame()
            }
}