const projetosData = [
    {
        id:"adocao",
        badge: "badge-adocao",
        categoria: "Adoção",
        titulo: "Adoção Responsável",
        texto: "Projeto que conceta animais resgatados a famílias dispostas a oferecer um lar definitivo,com acompanhamento pós adoção."

    },
    {
        id: "castracao",
        badge: "badge-saude",
        categoria: "Saúde",
        titulo: "Castração Solidária",
        texto: "Mutirão de Castrção gratuita para controlar a populção de animais em situação de rua",
    },
    {
        id:"resgate",
        badge:"badge-resgate",
        categoria:"Resgate",
        titulo:"Resgate e Reabilitação",
        texto:"Atendimento veterinário e recuperação de animais feridos ou doentes encontrados nas ruas",
    }

]; 
const projetosHtml = projetosData.map(function(projeto) {
    return `
        <div class="projeto" id="${projeto.id}">
            <span class="badge ${projeto.badge}">${projeto.categoria}</span>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.texto}</p>
        </div>
   `;
}).join("");

export const template = {
    inicio: `
        <section>
        <h2>Quem Somos</h2>
            <img src="../imagens/voluntaria-cao.jpg" alt="Voluntário do Instituto Patas Solidárias abraçando um cão resgatado em frente à sede da ONG" width="800" height="450">
            <p>O Instituto Patas Solidárias é uma organização dedicada ao resgate, cuidado e adoção responsável de animais em situação de abandono.</p>
        
        </section>
        
        <section>

            <h2>Faça Parte Dessa Causa</h2>
            <p>Conheça nossos projetos em andamento ou cadastre-se para se tornar um voluntário.</p>
        </section>
        
    `,
    
    projetos:` 
        <section>
            <h2>Nossos Projetos</h2>
            <img src="../imagens/recepcao-instituto.jpg" alt="Recepção do Instituto Patas Solidárias, com voluntária alimentando um cão resgatado e mural ilustrado ao fundo" width="800" height="450">
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
                ${projetosHtml}
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

    `,
    cadastro: `
        <section>
            <h2>Cadastro de Voluntários</h2>
        <div class="alerta">
                <strong>Atenção:</strong> Todos os campos marcados são obrigatórios. Verifique se os dados estão corretos antes de enviar.
            </div>

            <form novalidate>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    
                    <label for ="nome">Nome completo:</label>
                    <input type ="text" id="nome" name="nome" placeholder=" " required>
                    <span class ="erro-mensagem" id="erro-nome"></span>
                    
                    <label for ="nascimento">Data de nascimento:</label>
                    <input type ="date" id="nascimento" name="nascimento" placeholder=" " required>
                    <span class ="erro-mensagem" id="erro-nascimento"></span>

                    <label for ="email">E-mail:</label>
                    <input type ="email" id ="email" name ="email" placeholder =" " required>
                    <span class ="erro-mensagem" id="erro-email"></span>

                    <label for ="cpf">CPF:</label>
                    <input type ="text" id ="cpf" name ="cpf" pattern ="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>
                    <span class ="erro-mensagem" id="erro-cpf"></span>

                </fieldset>
                    
                <fieldset>
                    <legend>Contato</legend>

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" placeholder="(00) 00000-0000" required>
                    <span class ="erro-mensagem" id="erro-telefone"></span>

                </fieldset>
                
                <fieldset>
                    <legend>Endereço</legend>
                    
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>
                    <span class ="erro-mensagem" id="erro-cep"></span>

                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" placeholder=" " required>
                    <span class ="erro-mensagem" id="erro-endereco"></span>

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" placeholder=" " required>
                    <span class ="erro-mensagem" id="erro-cidade"></span>
                </fieldset>
                <button type="submit">Cadastrar</button>
            </form>
            <h3>Voluntários já cadastrados</h3>
            <div id="lista-voluntarios"></div>
        </section>
        
        <div id="modal-confirmacao" class="modal-overlay">
        <div class="modal">
        <h3>Cadastro enviado!</h3>
        <p>Obrigado por se voluntariar. Entraremos em contato em breve.</p>
        <button id="fechar-modal">Fechar</button>
    </div>
</div>
        
    `


};