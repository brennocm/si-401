const pPlayer1 = document.querySelector('.jogador1');
const pPlayer2 = document.querySelector('.jogador2');
const vezJogador = document.querySelector('.vezDoJogador');

let currentPlayer;
let player1Name;
let player2Name;

window.onload = () => {
    player1Name = localStorage.getItem('player1');
    player2Name = localStorage.getItem('player2');
    currentPlayer = 'X';

    pPlayer1.innerHTML = 'Jogador 1 ("X"): ' + player1Name;
    pPlayer2.innerHTML = 'Jogador 2 ("O"): ' + player2Name;

    vezJogador.innerHTML = 'Vez do jogador: ' + player1Name + " (X)";

    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) {
                cell.textContent = currentPlayer;

                if (checkWinner(currentPlayer)) {
                    setTimeout(function() {
                        const ganhador = currentPlayer === 'X' ? player1Name : player2Name;
                        localStorage.setItem('pWinner', ganhador);
                        window.location = 'winner.html';
                    }, 100);
                } else if (checkTie()) {
                    setTimeout(function() {
                        localStorage.setItem('pWinner', 'Empatou');
                        window.location = 'winner.html';
                    }, 100);
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    updatePlayerDisplay();
                    if (currentPlayer === 'X'){
                      vezJogador.innerHTML = 'Vez do jogador: ' + player1Name + " (X)";
                    } else{
                      vezJogador.innerHTML = 'Vez do jogador: ' + player2Name + " (O)";
                    }
                }
            }
        });
    });

    function checkWinner(player) {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winCombos) {
            const [a, b, c] = combo;
            if (cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player) {
                return true;
            }
        }

        return false;
    }

    function checkTie() {
        for (const cell of cells) {
            if (!cell.textContent) {
                return false;
            }
        }

        return true;
    }

    function updatePlayerDisplay() {
        pPlayer1.classList.toggle('active');
        pPlayer2.classList.toggle('active');
        
    }
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    updatePlayerDisplay();
}