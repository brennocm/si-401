    const button = document.querySelector('.botaoForm');
    const jogador1 = document.getElementById('jogador1');
    const jogador2 = document.getElementById('jogador2');
    const form = document.querySelector('.index_form');

    const handleSubmit = (event) => {
        event.preventDefault();
      
        localStorage.setItem('player1', jogador1.value);
        localStorage.setItem('player2', jogador2.value);
        window.location = 'jogo.html';
        
      }

      form.addEventListener('submit',handleSubmit);

