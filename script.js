const gameBoard = (() => {
    // Creates array of tic tac toe spots
    let board= new Array(3);
    for(let i=0; i < 3; i++) {
        board[i]= new Array(3);
    }
    
    // displays board contents
    const displayBoard = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const boardButton= document.createElement('button');
                const board= document.querySelector('#game-board');
                boardButton.classList.add('board-button', 'regular-text');
                board.appendChild(boardButton);

                //Adds player choice to button
                boardButton.addEventListener('click', function() {
                    if(boardButton.textContent === '') {
                        boardButton.textContent= playerChoice;
                    }
                });
            }
        }
    }

    //Decide player choice
    const xButton= document.getElementById('x');
    const oButton= document.getElementById('o');
    let playerChoice;

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

    return {displayBoard};
})();

const game = (() => {
    
    
    return {};
})(); 

gameBoard.displayBoard();

