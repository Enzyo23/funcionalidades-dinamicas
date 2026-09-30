(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`botao-menu`),t=document.getElementById(`menu-principal`),n=document.getElementById(`botao-tema`);e.addEventListener(`click`,function(){let n=t.classList.toggle(`aberto`);e.setAttribute(`aria-expanded`,n)}),n.addEventListener(`click`,function(){document.documentElement.getAttribute(`data-tema`)===`escuro`?document.documentElement.removeAttribute(`data-tema`):document.documentElement.setAttribute(`data-tema`,`escuro`)});var r={inicio:`
        <section>
        <h2>Quem Somos</h2>
            <img src="/funcionalidades-dinamicas/imagens/voluntaria-cao.webp" alt="Voluntário do Instituto Patas Solidárias abraçando um cão resgatado em frente à sede da ONG" width="800" height="450">
            <p>O Instituto Patas Solidárias é uma organização dedicada ao resgate, cuidado e adoção responsável de animais em situação de abandono.</p>
        
        </section>
        
        <section>

            <h2>Faça Parte Dessa Causa</h2>
            <p>Conheça nossos projetos em andamento ou cadastre-se para se tornar um voluntário.</p>
        </section>
        
    `,projetos:` 
        <section>
            <h2>Nossos Projetos</h2>
            <img src="/funcionalidades-dinamicas/imagens/recepcao-instituto.webp" alt="Recepção do Instituto Patas Solidárias, com voluntária alimentando um cão resgatado e mural ilustrado ao fundo" width="800" height="450">
            <div class="grid-projetos">
                <!--
                <div class="projeto" id="adocao">
                    <span class="badge badge-adocao">Adoção</span>
                    <h3>Adoção Responsável</h3>
                    <p>Projeto que conecta animais resgatados a famílias dispostas a oferecer um lar definitivo,com acompanhamento pós adoção.</p>
            </div>
            
            <div class="projeto" id="castracao">
                <span class="badge badge-saude">Saúde</span>
                    <h3>Castração Solidária</h3>
                    <p>Mutirão de Castração gratuita para controlar a população de animais em situação de rua.</p>
            </div>

            <div class="projeto" id="resgate">
                <span class="badge badge-resgate">Resgate</span>
                    <h3>Resgate e Reabilitação</h3>
                    <p>Atendimento veterinário e recuperação de animais feridos ou doentes encontrados nas ruas.</p>
            </div>
                -->
                ${[{id:`adocao`,badge:`badge-adocao`,categoria:`Adoção`,titulo:`Adoção Responsável`,texto:`Projeto que conceta animais resgatados a famílias dispostas a oferecer um lar definitivo,com acompanhamento pós adoção.`},{id:`castracao`,badge:`badge-saude`,categoria:`Saúde`,titulo:`Castração Solidária`,texto:`Mutirão de Castrção gratuita para controlar a populção de animais em situação de rua`},{id:`resgate`,badge:`badge-resgate`,categoria:`Resgate`,titulo:`Resgate e Reabilitação`,texto:`Atendimento veterinário e recuperação de animais feridos ou doentes encontrados nas ruas`}].map(function(e){return`
        <div class="projeto" id="${e.id}" tabindex="0">
            <span class="badge ${e.badge}">${e.categoria}</span>
            <h3>${e.titulo}</h3>
            <p>${e.texto}</p>
        </div>
   `}).join(``)}
            </div>
        </section>
        
        <section>
        <h2>Como Ser Voluntário</h2>
        <p>Voluntários auxiliam em resgates, cuidados diários com os animais e eventos de adoção.</p>
    </section>

    <section>
        <h2>Campanhas de Doação</h2>
        <p>As doações financeiras sustentam a alimentação, tratamentos veterinários e manutenção do abrigo. Também aceitamos doação de ração, cobertores e materiais de limpeza. Cada contribuição é revertida diretamente para cuidado dos animais resgatados.</p>
    </section>

    `,cadastro:`
        <section>
            <h2>Cadastro de Voluntários</h2>
        <div class="alerta">
                <strong>Atenção:</strong> Todos os campos marcados são obrigatórios. Verifique se os dados estão corretos antes de enviar.
            </div>

            <form novalidate>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    
                    <label for ="nome">Nome completo:</label>
                    <input type ="text" id="nome" name="nome" placeholder=" " required aria-describedby="erro-nome">
                    <span class ="erro-mensagem" id="erro-nome" role="alert"></span>
                    
                    <label for ="nascimento">Data de nascimento:</label>
                    <input type ="date" id="nascimento" name="nascimento" placeholder=" " required aria-describedby="erro-nascimento">
                    <span class ="erro-mensagem" id="erro-nascimento" role="alert"></span>

                    <label for ="email">E-mail:</label>
                    <input type ="email" id ="email" name ="email" placeholder =" " required aria-describedby="erro-email">
                    <span class ="erro-mensagem" id="erro-email" role="alert"></span>

                    <label for ="cpf">CPF:</label>
                    <input type ="text" id ="cpf" name ="cpf" pattern ="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required aria-describedby="erro-cpf">
                    <span class ="erro-mensagem" id="erro-cpf" role="alert"></span>

                </fieldset>
                    
                <fieldset>
                    <legend>Contato</legend>

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" placeholder="(00) 00000-0000" required aria-describedby="erro-telefone">
                    <span class ="erro-mensagem" id="erro-telefone" role="alert"></span>

                </fieldset>
                
                <fieldset>
                    <legend>Endereço</legend>
                    
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required aria-describedby="erro-cep">
                    <span class ="erro-mensagem" id="erro-cep" role="alert"></span>

                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" placeholder=" " required aria-describedby="erro-endereco">
                    <span class ="erro-mensagem" id="erro-endereco" role="alert"></span>

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" placeholder=" " required aria-describedby="erro-cidade">
                    <span class ="erro-mensagem" id="erro-cidade" role="alert" ></span>
                </fieldset>
                <button type="submit">Cadastrar</button>
            </form>
            <h3>Voluntários já cadastrados</h3>
            <div id="lista-voluntarios"></div>
        </section>
        
        <div id="modal-confirmacao" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="titulo-modal">
        <div class="modal">
        <h3 id="titulo-modal">Cadastro enviado!</h3>
        <p>Obrigado por se voluntariar. Entraremos em contato em breve.</p>
        <button id="fechar-modal">Fechar</button>
    </div>
</div>
        
    `};dayjs.locale(`pt-br`);function i(){let e=document.querySelector(`form`),t=document.getElementById(`modal-confirmacao`),n=document.getElementById(`fechar-modal`),r=e.querySelector(`button[type="submit"]`);a(),e.addEventListener(`submit`,function(r){r.preventDefault();let i=e.querySelectorAll(`input`),o=!0;if(i.forEach(function(e){let t=document.getElementById(`erro-`+e.id);e.checkValidity()?(e.classList.remove(`campo-invalido`),t.textContent=``):(o=!1,e.classList.add(`campo-invalido`),t.textContent=`Preencha corretamente este campo.`)}),o){let r=localStorage.getItem(`voluntarios`),i=r?JSON.parse(r):[],o={nome:e.querySelector(`#nome`).value,nascimento:e.querySelector(`#nascimento`).value,email:e.querySelector(`#email`).value,cpf:e.querySelector(`#cpf`).value,telefone:e.querySelector(`#telefone`).value,cep:e.querySelector(`#cep`).value,endereco:e.querySelector(`#endereco`).value,cidade:e.querySelector(`#cidade`).value};i.push(o),localStorage.setItem(`voluntarios`,JSON.stringify(i)),a(),t.classList.add(`aberto`),n.focus()}}),n.addEventListener(`click`,function(){t.classList.remove(`aberto`),r.focus()})}function a(){let e=localStorage.getItem(`voluntarios`),t=(e?JSON.parse(e):[]).map(function(e){return`<p>${e.nome}- nascido em ${dayjs(e.nascimento).format(`DD [de] MMMM [de] YYYY`)}</p>`}).join(``),n=document.getElementById(`lista-voluntarios`);n.innerHTML=t}function o(){let e=window.location.hash.split(`/`)[1]||`inicio`,t=r[e];console.log(t);let n=document.getElementById(`app`);n.innerHTML=t,e===`cadastro`&&i()}window.addEventListener(`hashchange`,o),o();var s=document.getElementById(`app`);s.addEventListener(`click`,function(e){let t=e.target.closest(`.projeto`);t&&t.classList.toggle(`destacado`)}),s.addEventListener(`keydown`,function(e){if(e.key===`Enter`){let t=e.target.closest(`.projeto`);t&&t.classList.toggle(`destacado`)}});