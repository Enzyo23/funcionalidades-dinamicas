const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu-principal');
const botaoTema = document.getElementById('botao-tema') ;

botaoMenu.addEventListener('click',function() {
const menuAberto = menu.classList.toggle('aberto');
botaoMenu.setAttribute('aria-expanded', menuAberto);

});

botaoTema.addEventListener('click',function() {
    if (document.documentElement.getAttribute('data-tema') === 'escuro') {
        document.documentElement.removeAttribute('data-tema');
   
    } else {
        document.documentElement.setAttribute('data-tema','escuro') ;
    }
});