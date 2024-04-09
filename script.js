let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let status = document.getElementById('status');
let endScreen = document.getElementById('endScreen');
let endMessage = document.getElementById('endMessage');
let restartButton = document.getElementById('restartButton');
let closeButton = document.getElementById('closeButton');


restartButton.style.display = 'none';
closeButton.style.display = 'none';

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        if (cells[combo[0]].innerText !== '' &&
            cells[combo[0]].innerText === cells[combo[1]].innerText &&
            cells[combo[1]].innerText === cells[combo[2]].innerText) {
            return cells[combo[0]].innerText;
        }
    }

    return null;
}

function checkDraw() {
    return Array.from(cells).every(cell => cell.innerText !== '');
}

function makeMove(cellIndex) {
    if (cells[cellIndex].innerText === '' && !checkWinner()) {
        cells[cellIndex].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        let winner = checkWinner();
        if (winner) {
            endMessage.innerText = `Player ${winner} wins!`;
            endScreen.style.display = 'flex';
            // Display reset button and close button
            restartButton.style.display = 'block';
            closeButton.style.display = 'block';
        } else if (checkDraw()) {
            endMessage.innerText = "It's a draw!";
            endScreen.style.display = 'flex';
            // Display reset button and close button
            restartButton.style.display = 'block';
            closeButton.style.display = 'block';
        } else {
            status.innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function resetGame() {
    cells.forEach(cell => {
        cell.innerText = '';
    });
    endScreen.style.display = 'none';
    // Hide the reset button and close button after resetting the game
    restartButton.style.display = 'none';
    closeButton.style.display = 'none';
    status.innerText = `Player ${currentPlayer}'s turn`;
}

function closePopup() {
    endScreen.style.display = 'Res';
}
