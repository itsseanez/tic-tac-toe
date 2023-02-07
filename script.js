const gameBoard = (() => {
    // Creates array of tic tac toe spots
    let _board= new Array(9);
    // displays board contents
    const displayBoard = () => {
        for (let i=0; i < _board.length; i++) {
            const boardButton= document.createElement('button');
            const board= document.querySelector('#game-board');
            boardButton.classList.add('board-button');
            board.appendChild(boardButton)
        };
    }
    return {displayBoard};
})();
gameBoard.displayBoard();