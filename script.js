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



let turn = true


startGame()


function startGame () {


    squares.forEach(square => {

        console.log(square)
    
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

            alert('Player One wins!')
            alert('Reload page')
            location.reload()

        } else {

            draw()
             
        }

    } else {

        let factor = 'blue'
        event.target.classList.add(factor)

        let check 
        check = win(factor)


        if(check) {

            alert('Player Two wins!')
            alert('Reload page')
            location.reload()

        } else {

            draw()

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
                location.reload()
            }
}