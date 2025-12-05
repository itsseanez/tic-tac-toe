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
    let board = [];

    const createBoard = () => {
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = '';
            }
        }
        return board;
    }

    let displayBoard = () => {
        const boardContainer = document.getElementById('game-board');
        boardContainer.innerHTML = ''; // Clear previous board if any
        let currentPlayer= gameController.switchPlayer(); // Initialize current player
        let board = createBoard();
        for (let i=0; i < board.length; i++) {
            for (let j=0; j < board[i].length; j++) {
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
                    currentPlayer = gameController.switchPlayer();
                    console.log(`It's now ${currentPlayer.name}'s turn.`);
                });
            }
        }
    }

    return { createBoard, displayBoard };
})();

console.log(gameBoard.createBoard());
gameBoard.displayBoard();
