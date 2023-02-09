const gameBoard = (() => {
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
                        boardButton.textContent= playerChoice;
                    }
                    gameController.checkWin();
                    gameController.checkTie();
                });
            }
        }
        return board;
    }

    //Player Starts with x
    let playerChoice= 'X';
    const xButton= document.getElementById('x');
    xButton.classList.add('main-text', 'clicked');
    xButton.classList.remove('button');

    //Decide player choice
    const oButton= document.getElementById('o');

    xButton.addEventListener('click', function() {
        if(playerChoice=== 'O') {
            oButton.classList.remove('clicked');
        }
        playerChoice= 'X';
        xButton.classList.remove('button');
        xButton.classList.add('main-text', 'clicked');
        oButton.classList.add('button', 'main-text');
    });

    oButton.addEventListener('click', function() {
        if(playerChoice=== 'X') {
            xButton.classList.remove('clicked');
        }
        playerChoice= 'O';
        oButton.classList.remove('button');
        oButton.classList.add('main-text', 'clicked');
        xButton.classList.add('button', 'main-text');
    });

    return {createBoard};
})();



const gameController = (() => {
    const winningText= document.querySelector('.winning-text');
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

    return {checkWin, checkTie};
})(); 

