//Player object(s)
const player = (type, choice) => {
    return {type, choice};
};

//let selectComputer= document.querySelector('#checkbox');

let originalPlayer= player('Player', 'X');
let currentPlayer= originalPlayer;
let otherPlayer= player('Player', 'O');
let selectComputer= document.querySelector('#checkbox');

selectComputer.addEventListener('change', function() {
    if(selectComputer.checked) {
        otherPlayer.type='Computer';
    }
    else {
        otherPlayer.type= 'Player';
    }
    console.log(selectComputer.checked)
});


const switchPlayer = () => {
    if(currentPlayer=== originalPlayer) {
        currentPlayer= otherPlayer;
    }
    else {
        currentPlayer= originalPlayer;
    }
}

//Tic tac toe board
const gameBoard = (() => {
    //Player Starts with x
    const xButton= document.getElementById('x');
    const oButton= document.getElementById('o');
    xButton.classList.add('main-text', 'choice-clicked');
    xButton.classList.remove('button');

    //Decide player choice
    xButton.addEventListener('click', function() {
        if(selectComputer.checked) {
            otherPlayer= player('Computer', 'O')
        }
        else {
            otherPlayer= player('Player', 'O')
        }
        originalPlayer.choice= 'X';
        oButton.classList.remove('choice-clicked');
        xButton.classList.remove('button');
        xButton.classList.add('main-text', 'choice-clicked');
        oButton.classList.add('button', 'main-text');
    });

    oButton.addEventListener('click', function() {
        if(selectComputer.checked) {
            otherPlayer= player('Computer', 'X')
        }
        else {
            otherPlayer= player('Player', 'X')
        }
        originalPlayer.choice='O';
        xButton.classList.remove('choice-clicked');
        oButton.classList.remove('button');
        oButton.classList.add('main-text', 'choice-clicked');
        xButton.classList.add('button', 'main-text');
    });

    // displays board contents
    const createBoard = () => {
        // Creates array of tic tac toe spots
        let board= new Array(3);
        for(let i=0; i < 3; i++) {
            board[i]= new Array(3);
        }

        //Fills board
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const boardButton= document.createElement('button');
                const game= document.querySelector('#game-board');
                boardButton.classList.add('board-button', 'regular-text');
                game.appendChild(boardButton);
                board[i][j]=boardButton;
                
                //Adds player choice to button
                boardButton.addEventListener('click', function() {
                    if(boardButton.textContent === '') {
                        boardButton.textContent= currentPlayer.choice;
                        const winningText= document.querySelector('#winning-text');
                        console.log(currentPlayer)
                        if(gameController.checkWin()){
                            winningText.textContent= `${currentPlayer.type} ${currentPlayer.choice} Wins`;
                        }
                        switchPlayer();
                    }
                    boardButton.classList.remove('board-button');
                    boardButton.classList.add('board-button-clicked');
                    //gameController.checkWin();
                    
                    gameController.checkTie();
                });

            }
        }
        return board;
    }

    return {createBoard};
})();

//Controls gameplay
const gameController = (() => {
    const winningText= document.querySelector('#winning-text');
    let board= gameBoard.createBoard();

    //Check for win
    const checkWin = () => {
        if (checkRows(board) || checkColumns(board) || checkDiagonals(board)) {
            return true;
        }
        return false;
    }

    // Check for tie
    const checkTie = () => {
        if (checkWin()) {
            return false;
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
            if (board[i][j].textContent === '') {
                return false;
            }
            }
        }
        winningText.textContent= "It's a Draw";
        return true;
    }

    // Check rows
    const checkRows = (board) => {
        for (let i = 0; i < 3; i++) {
            if (board[i][0].textContent === board[i][1].textContent && board[i][1].textContent === board[i][2].textContent) {
                if(board[i][0].textContent != '') {
                    return true;
                }
            }
        }
    }

    // Check columns
    const checkColumns = (board) => {
        for (let i = 0; i < 3; i++) {
            if (board[0][i].textContent === board[1][i].textContent && board[1][i].textContent === board[2][i].textContent) {
                if(board[0][i].textContent != '') {
                    return true;
                }
            }
        }
    }

    // Check diagonals
    const checkDiagonals = (board) => {
        if (board[0][0].textContent === board[1][1].textContent && board[1][1].textContent === board[2][2].textContent) {
            if(board[0][0].textContent != '') {
                return true;
            }
        }
        if (board[0][2].textContent === board[1][1].textContent && board[1][1].textContent === board[2][0].textContent) {
            if(board[0][2].textContent != '') {
                return true;
            }
        }
    }

    return {checkWin, checkTie, currentPlayer, switchPlayer};
})(); 

