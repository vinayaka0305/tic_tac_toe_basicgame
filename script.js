let player1 = `<span id="player1">X</span>`
let player2 = `<span id="player2">O</span>`

let turn = 1;
let emptyBox = 9;
// to find the winner we have to store it in 2d array

const currentBoard = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
]


for (let i = 1; i <= 9; i++) {
    const box = document.getElementById(i);
    box.addEventListener('click', onClick);
}

function onClick(event) {
    if (emptyBox > 0) {
        let currentDiv = event.target;//it will give the current clicked div
        let id = Number(currentDiv.getAttribute("id"))
        const i = Math.floor((id - 1) / 3); // it will give index of 2d array (clicked id box data)
        const j = (id - 1) % 3;// it will give index of 2d array (clicked id box data)
        if (turn === 1) {
            currentBoard[i][j] = 1;
            currentDiv.innerHTML = player1;
            turn = 2;
        } else if (turn === 2) {
            currentBoard[i][j] = 2
            currentDiv.innerHTML = player2;
            turn = 1;
        }
        emptyBox -= 1;//the emptybox will decreases
        const winner = findWinner();

        if (winner === 1) {
            alert("congratulations ! Player1 wins")
        } else if (winner === 2) {
            alert("congratulations ! Player2 wins")
        }
        if (emptyBox === 0 && findWinner() === 0) {
            alert("Draw!");
        }
    }

}

// fuction to find the winner

function findWinner() {
    // it will take one object to check the score
    let currentScore = {
        1: 0,// it represents player1
        2: 0 // this is for player2;
    }

    // to check row wise (first)
    for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard[i].length; j++) {
            if (currentBoard[i][j] === 1) {
                currentScore[1] += 1;
            } else if (currentBoard[i][j] === 2) {
                currentScore[2] += 1;
            }
        }
        if (currentScore[1] === 3) {
            return 1;
        } else if (currentScore[2] === 3) {
            return 2;
        }
        currentScore = { // reseting the scores back to zeros
            1: 0,
            2: 0
        }

    }
    // to check coloumn wise(second);
    for (let j = 0; j < currentBoard.length; j++) {
        for (let i = 0; i < currentBoard[j].length; i++) {
            if (currentBoard[i][j] === 1) {
                currentScore[1] += 1;
            } else if (currentBoard[i][j] === 2) {
                currentScore[2] += 1;
            }
        }
        if (currentScore[1] === 3) {
            return 1;
        } else if (currentScore[2] === 3) {
            return 2;
        }
        currentScore = {
            1: 0,
            2: 0
        }
    }
    // to check diagonal(third)
    for (let i = 0; i < currentBoard.length; i++) {
        let j = i;
        if (currentBoard[i][i] === 1) {
            currentScore[1] += 1;
        } else if (currentBoard[i][j] === 2) {
            currentScore[2] += 1;
        }
    }
    if (currentScore[1] === 3) {
        return 1;
    } else if (currentScore[2] === 3) {
        return 2;
    }
    currentScore ={
        1:0,
        2:0
    }

    // to check diagonal(fourth)

    for (let i = 0; i < currentBoard.length; i++) {
        let j = currentBoard.length - 1 - i;
        if (currentBoard[i][j] === 1) {
            currentScore[1] += 1;
        } else if (currentBoard[i][j] === 2) {
            currentScore[2] += 1;
        }
    }
    if (currentScore[1] === 3) {
        return 1;
    } else if (currentScore[2] === 3) {
        return 2;
    }
    return 0;
}