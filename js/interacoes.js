const app = document.getElementById('app');

// Monitora clicks na tela
app.addEventListener('click' , function(evento) {
    //"funciona como um radar que sobe da peça exata clicada, 
    // até achar o card .projeto que a contém."
    const card = evento.target.closest('.projeto') ; 
    
    if (card) { 
    card.classList.toggle('destacado');
    }
    
});    
// Monitora o teclado se aperta alguma tecla(acessibiliade)
//Sem esse listener,o usuario não conseguiria interagir com os cards.
app.addEventListener('keydown', function(evento) {
    //verificamos Enter porque é a tecla que confirma/ativa ,
    // o que está selecionado (focado) no momento.
    if (evento.key==='Enter') {
        const card = evento.target.closest('.projeto');
        if (card) {
            card.classList.toggle('destacado') ;
        }
    
}
});

