const gameBoard = (() => {
    // Creates array of tic tac toe spots
    let _board= new Array(9);
    // displays board contents
    const displayBoard = () => {
        for (let i=0; i < _board.length; i++) {
            const boardButton= document.createElement('button');
            boardButton.classList.add('board-button')
        }
    }
    return {displayBoard};
})();
gameBoard.displayBoard();