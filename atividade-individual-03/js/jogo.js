const pPlayer1 = document.querySelector('.jogador1');
const pPlayer2 = document.querySelector('.jogador2');


window.onload = () => {
    const playerName1 = localStorage.getItem('player1');
    const playerName2 = localStorage.getItem('player2');

    pPlayer1.innerHTML = 'Jogador 1: ' + playerName1;
    pPlayer2.innerHTML = 'Jogador 2: ' +playerName2;
  
  }