

// Código original comentado: rodava direto ao carregar a página,
// mas quebrava na SPA porque form/modal só existem depois que
// o template de Cadastro é injetado na main. Virou a função abaixo.
/*
const form = document.querySelector('form');
const modal = document.getElementById('modal-confirmacao');
const fecharModal = document.getElementById('fechar-modal');

form.addEventListener('submit' , function(evento) {
    evento.preventDefault() ;
    modal.classList.add('aberto');
});

fecharModal.addEventListener('click' , function() {
    modal.classList.remove('aberto');
});

*/






/* Executando  Hash*/

/*function renderizarRota() {
    const hash = window.location.hash;
    const partes = hash.split("/")
    console.log(partes[1]);
}

renderizarRota(); /* linha temporária , só para testar.*/




