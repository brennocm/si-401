const button = document.querySelector('.botaoForm');
const pGanhador = document.getElementById('jogador');

window.onload = () => {
    const ganhador = localStorage.getItem('pWinner');
    const jogador1 = localStorage.getItem('player1');
    const jogador2 = localStorage.getItem('player2');

    if (ganhador === 'Empatou') {
        pGanhador.innerHTML = 'Empate';
    } else {
        const playerName = ganhador === 'X' ? jogador1 : jogador2;
        pGanhador.innerHTML = ganhador;
    }
}

button.addEventListener('click', function () {
    window.location = 'index.html';
});
