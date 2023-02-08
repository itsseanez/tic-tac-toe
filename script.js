const gameBoard = (() => {
    // Creates array of tic tac toe spots
    let board= new Array(9);
    // displays board contents
    const displayBoard = () => {
        for (let i=0; i < board.length; i++) {
            const boardButton= document.createElement('button');
            const board= document.querySelector('#game-board');
            boardButton.classList.add('board-button', 'regular-text');
            board.appendChild(boardButton);
            boardButton.addEventListener('click', function() {
                console.log(playerChoice);
                boardButton.textContent= playerChoice;
            });
        };
    }

    const xButton= document.getElementById('x');
    const oButton= document.getElementById('o');
    let playerChoice;
    xButton.addEventListener('click', function() {
        if(playerChoice= 'O') {
            oButton.classList.remove('clicked');
        }
        playerChoice= 'X';
        xButton.classList.remove('button');
        xButton.classList.add('main-text', 'clicked');
        oButton.classList.add('button', 'main-text');
    });

    oButton.addEventListener('click', function() {
        if(playerChoice= 'X') {
            xButton.classList.remove('clicked');
        }
        playerChoice= 'O';
        oButton.classList.remove('button');
        oButton.classList.add('main-text', 'clicked');
        xButton.classList.add('button', 'main-text');
    });
    return {displayBoard};
})();

const game = (() => {
    
    
    return {};
})(); 

gameBoard.displayBoard();

