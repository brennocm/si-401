const button = document.querySelector('.botaoForm');
const pGanhador = document.getElementById('jogador');

window.onload = () => {
    const ganhador = localStorage.getItem('player1');

    pGanhador.innerHTML = ganhador;
    
  }

  button.addEventListener('click', function() {

    window.location = 'index.html';
    
});