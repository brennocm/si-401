const pPlayer1 = document.querySelector('.jogador1');
const pPlayer2 = document.querySelector('.jogador2');


window.onload = () => {
    const playerName1 = localStorage.getItem('player1');
    const playerName2 = localStorage.getItem('player2');

    pPlayer1.innerHTML = 'Jogador 1 (" X "):  ' + playerName1;
    pPlayer2.innerHTML = 'Jogador 2 (" O "): ' +playerName2;
  
  }

  const cells = document.querySelectorAll('.cell');
  let currentPlayer = 'X'; // Começar com o jogador 1 (X)

// Adicione um evento de clique a cada célula
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    // Verifique se a célula já foi preenchida
    if (!cell.textContent) {
      cell.textContent = currentPlayer; // Preencha a célula com o símbolo do jogador atual

      // Verifique se alguém venceu
      if (checkWinner(currentPlayer)) {

        setTimeout(function() {
          window.location = 'winner.html';
          resetBoard();

        }, 500);

       
        //empate
      } else if (checkTie()) {

        setTimeout(function() {

          localStorage.setItem('pWinner', "Empatou");
          //window.location = 'winner.html'; 
          //resetBoard();

        }, 5000);
     
      } else {
        // Alternar para o próximo jogador
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updatePlayerDisplay();
      }
    }
  });
});

// Função para verificar se um jogador venceu
function checkWinner(player) {
  // Array de todas as possíveis combinações vencedoras no tabuleiro
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  // Verifica se alguma das combinações vencedoras foi alcançada pelo jogador atual
  for (const combo of winCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player) {
      return true; // O jogador venceu
    }
  }

  return false; // Nenhuma combinação vencedora alcançada
}

// Função para verificar se o jogo empatou
function checkTie() {
  // Verifica se todas as células estão preenchidas
  for (const cell of cells) {
    if (!cell.textContent) {
      return false; // Ainda há uma célula vazia, o jogo não empatou
    }
  }
  
  return true; // Todas as células estão preenchidas, o jogo empatou
}


// Função para reiniciar o tabuleiro
function resetBoard() {
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  updatePlayerDisplay();
}

// Você precisará implementar as funções checkWinner e checkTie de acordo com a lógica do jogo da velha
