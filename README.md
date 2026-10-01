# Instituto Patas Solidárias

SPA (Single Page Application) para a ONG fictícia Instituto Patas Solidárias, dedicada ao resgate, cuidado e adoção responsável de animais em situação de abandono.

**Site publicado:** https://enzyo23.github.io/funcionalidades-dinamicas/

## Sobre o Projeto

Aplicação de página única desenvolvida com HTML5 semântico, CSS3 (com variáveis de design system) e JavaScript ES6 Modules, utilizando Day.js para formatação de datas.

## Funcionalidades

- Roteamento por hash (SPA)
- Templates dinâmicos renderizados via JavaScript
- Validação de formulário com feedback visual
- Persistência de dados com localStorage
- Conformidade com WCAG 2.1 (Nível AA): navegação por teclado, atributos ARIA, skip link, contraste de cores validado
- Modo escuro (automático via `prefers-color-scheme` e alternância manual)

## Estrutura de Pastas
├── html/ # Páginas HTML
├── css/ # Estilos e design system (variáveis CSS)
├── js/ # Módulos ES6: router, templates, cadastro, menu, interações
├── public/ # Imagens e arquivos estáticos (copiados diretamente na build)
└── dist/ # Build de produção (gerada, não versionada)
## Pré-requisitos e Instalação

**Desenvolvimento local:**
1. Clone o repositório: `git clone https://github.com/Enzyo23/funcionalidades-dinamicas.git`
2. Instale a extensão **Live Server** no VS Code
3. Clique com o botão direito em `html/index.html` → "Open with Live Server"

> Obrigatório usar Live Server (ou outro servidor local): os módulos ES6 não funcionam abrindo o arquivo diretamente via `file://`.

**Build de produção (com Vite):**
```bash
npm install
npm run build      # gera a pasta dist/
npm run preview    # testa a build localmente
```

## Estratégia de Versionamento

O projeto segue o fluxo **GitFlow**:
- `main` — código estável, pronto para produção
- `develop` — desenvolvimento contínuo
- `feature/*` — uma branch por funcionalidade (ex: `feature/acessibilidade-wcag`, `feature/modo-escuro`)
- `hotfix/*` — correções urgentes aplicadas diretamente sobre a `main` e propagadas de volta à `develop`

Commits seguem mensagens descritivas, integrações são feitas via **Pull Requests** revisados, e releases são marcadas com tags seguindo **versionamento semântico** (ex: `v1.0.0`).

## Deploy e CI/CD

Deploy automático via **GitHub Actions** (`.github/workflows/deploy.yml`), disparado a cada push na `main`:
1. Checkout do código
2. Configuração do Node.js 20
3. Instalação de dependências (`npm install`)
4. Build de produção com Vite (`npm run build`), minificando HTML, CSS e JS
5. Publicação automática do conteúdo de `dist/` no GitHub Pages