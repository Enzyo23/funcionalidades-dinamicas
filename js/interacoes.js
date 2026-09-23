const app = document.getElementById('app');

// Monitora clicks na tela
app.addEventListener('click' , function(evento) {
    
    //O 'closest' funciona como um "detector de radar" que sobe no HTML.
    // Ele olha onde a pessoa clicou (texto, imagem, botão) e "sobe" procurando
    // até achar a caixa maior que representa o projeto inteiro ('.projeto').
    const card = evento.target.closest('.projeto') ; 
    
    // Se ele achou a caixa do projeto, adiciona ou remove o visual de destaque.
    if (card) {
        // 
    card.classList.toggle('destacado');
    }
    
});    
// Monitora o teclado(acessibiliade)
app.addEventListener('keydown', function(evento) {
    //Se a pessoa apertar a tecla 'Enter'
    if (evento.key==='Enter') {
        //// Faz a mesma busca de radar: acha o projeto onde o usuário estava navegando.
        const card = evento.target.closest('.projeto');
        if (card) {
            card.classList.toggle('destacado') ;
        }
    
}
});

