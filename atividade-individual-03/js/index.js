const form = document.querySelector('.index_form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const jogador1 = document.getElementById('jogador1').value;
  const jogador2 = document.getElementById('jogador2').value;

  localStorage.setItem('player1', jogador1);
  localStorage.setItem('player2', jogador2);

  window.location = 'jogo.html';
});
