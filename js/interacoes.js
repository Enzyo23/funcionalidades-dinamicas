const app = document.getElementById('app');


app.addEventListener('click' , function(evento) {
    const card = evento.target.closest('.projeto') ;
    if (card) {
        // sua linha aqui
    card.classList.toggle('destacado');
    }
});

