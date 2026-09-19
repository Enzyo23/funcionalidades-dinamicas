import { template } from './templates.js';
import{iniciarCadastro} from './cadastro.js';

function guardarRota() {
    const hash = window.location.hash;
    const partes = hash.split("/")
    const nomedaPagina = partes[1] || "inicio";
    const conteudoHtml = template[nomedaPagina]
    console.log(conteudoHtml)
    const app = document.getElementById('app');
    app.innerHTML = conteudoHtml;

    if (nomedaPagina === "cadastro") {
        iniciarCadastro();
    }
}

//guardarRota(); //Linha tempóraria, so para testar.
window.addEventListener('hashchange', guardarRota);
guardarRota(); //Roda uma vez também ao carregar a página.
