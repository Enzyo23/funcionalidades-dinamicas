dayjs.locale('pt-br');
export function iniciarCadastro() {
    const form = document.querySelector('form');
    const modal = document.getElementById('modal-confirmacao');
    const fecharModal = document.getElementById('fechar-modal');

    carregarVoluntarios(); //mostra alista assi mque a página carrega.

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        //modal.classList.add('aberto');
        const inputs = form.querySelectorAll('input');
        let formularioValido =true;
        
        inputs.forEach(function(input) {
            const spanErro = document.getElementById('erro-' + input.id);
            if (!input.checkValidity()) {
                formularioValido = false;
                input.classList.add('campo-invalido');
                spanErro.textContent = 'Preencha corretamente este campo.';
             
            } else {
               // vamos adicionar aqui: limpar erro,se houver
               input.classList.remove('campo-invalido') ;
               spanErro.textContent = '' ; 
            }
    });
        
        if (formularioValido) {
            const dadosSalvos = localStorage.getItem('voluntarios');
            const listaVoluntarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];
            const novoVoluntario = {
                nome: form.querySelector('#nome').value,
                nascimento: form.querySelector('#nascimento').value,
                email: form.querySelector('#email').value,
                cpf: form.querySelector('#cpf').value,
                telefone: form.querySelector('#telefone').value,
                cep: form.querySelector('#cep').value,
                endereco: form.querySelector('#endereco').value,
                cidade: form.querySelector('#cidade').value
            };
            listaVoluntarios.push(novoVoluntario);
            localStorage.setItem('voluntarios', JSON.stringify(listaVoluntarios));
            carregarVoluntarios(); //atualiza a lista na tela com novo cadastro.
        modal.classList.add('aberto') ;
        }
    
    });

    fecharModal.addEventListener('click' , function() {
        modal.classList.remove('aberto');

    });
}    

function carregarVoluntarios() {
    const dadosSalvos = localStorage.getItem('voluntarios') ;
    const listaVoluntarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

    const voluntariosHtml = listaVoluntarios.map(function(voluntario) {
        return `<p>${voluntario.nome}- nascido em ${dayjs(voluntario.nascimento).format('DD [de] MMMM [de] YYYY')}</p>`;
    }).join("") ;
    
    const divLista = document.getElementById('lista-voluntarios') ;
    divLista.innerHTML = voluntariosHtml;
}