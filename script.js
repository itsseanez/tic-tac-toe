const Player = (name, marker) => {
    return { name, marker };
}

const gameController = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    let currentPlayer = player2;

    const switchPlayer = () => {
        return currentPlayer = (currentPlayer === player1) ? player2 : player1;
    }

    return { switchPlayer };
})();

const gameBoard = (() => {
    const createBoard = () => {
        let board = [];
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = '';
            }
        }
        return board;
    }

    const checkWinner = (board) => {
        // Check rows, columns, and diagonals for a win
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
            }
            if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return board[0][i];
            }
        }
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2];
        }
        return null;
    }

    let displayBoard = () => {
        const boardContainer = document.getElementById('game-board');
        boardContainer.innerHTML = ''; // Clear previous board if any
        let currentPlayer = gameController.switchPlayer(); // Initialize current player
        let board = createBoard();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const cell = document.createElement('button');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.textContent = board[i][j];
                boardContainer.appendChild(cell);
                cell.addEventListener('click', () => {
                    if (board[i][j] !== '') return; // Prevent overwriting
                    board[i][j] = currentPlayer.marker;
                    cell.textContent = board[i][j];
                    const winner = checkWinner(board);
                    if (winner) {
                        console.log(`${winner} wins!`);
                        alert(`${currentPlayer.name} wins!`);
                        return;
                    }
                    currentPlayer = gameController.switchPlayer();
                    console.log(`It's now ${currentPlayer.name}'s turn.`);
                });
            }
        }
    }

    return { displayBoard };
})();

gameBoard.displayBoard();
