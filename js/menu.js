const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu-principal');

botaoMenu.addEventListener('click',function() {
const menuAberto = menu.classList.toggle('aberto');
botaoMenu.setAttribute('aria-expanded', menuAberto);
});