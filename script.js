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
        for (let i=0; i < createBoard().length; i++) {
            for (let j=0; j < createBoard()[i].length; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.textContent = board[i][j];
                boardContainer.appendChild(cell);
            }
        }
    }

    return { createBoard, displayBoard };
})();

console.log(gameBoard.createBoard());
gameBoard.displayBoard();
