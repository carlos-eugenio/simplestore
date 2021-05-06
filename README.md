<h1 align="center">
    Simple Store
</h1>

<h4 align="center">
  App de loja virtual simples construído com React Native. 
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/carlos-eugenio/simplestore?style=flat-square">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/carlos-eugenio/simplestore?style=flat-square">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/carlos-eugenio/simplestore?style=flat-square">
  <a href="https://github.com/carlos-eugenio/simplestore/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/carlos-eugenio/simplestore?style=flat-square">
  </a>

  <a href="https://github.com/carlos-eugenio/simplestore/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/carlos-eugenio/simplestore?style=flat-square">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/carlos-eugenio/simplestore?style=flat-square">
</p>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#licença">Licença</a>
</p>

---

## Sobre

SimpleStore - Loja virtual mobile desenvolvida com o intuito de colocar em prática o conteúdo estudado durante o curso [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp).

---

## Funcionalidades

- [x] Tela inicial com categorias dos produtos
- [x] Categorias de produtos
- [x] Pesquisa
- [x] - Por categoria ou produto
- [x] Lista de desejos
- [x]  - Mostra produtos, permite navegação ou exclusão de produtos da lista 
- [x] Carrinho de compras
- [x] - Selecionar quantidade dos produtos ou excluir do carrinho 
- [x] Produto
- [x] - Galeria de fotos, avaliações e descrição do produto 
- [x] - Adicionar ou excluir produto da Lista de desejos
- [x] - Adicionar produto no Carrinho de compras
- [x] Categorias e produtos são dinâmicos - busca na API (Json Server)

---

## Tecnologias

-  [Typescript](https://www.typescriptlang.org/)
-  [React Native](https://reactnative.dev/)
-  [Styled Components](https://styled-components.com/)
-  [React Navigation](https://reactnavigation.org/)
-  [Async Storage](https://github.com/react-native-async-storage/async-storage)
-  [Axios](https://github.com/axios/axios)
-  [Json Server - FakeAPI](https://github.com/typicode/json-server)
-  [Git](https://git-scm.com/)
-  [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
-  [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
-  [Android Studio](https://developer.android.com/studio)
-  [VS Code][vscode] com [EditorConfig][editorconfig] e [ESLint][eslint]


---

## Como executar o projeto

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git][git], [Node.js][nodejs], [Yarn][yarn], [Android Studio][androidstudio].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

```bash
# Clone este repositório
$ git clone https://github.com/carlos-eugenio/simplestore

# Acesse a pasta do projeto no terminal/cmd
$ cd simplestore

# Instale as dependências
$ yarn install

# Execute o Json Server 
$ json-server --watch server.json --port 3333

# Execute a aplicação
$ yarn start

# Execute o emulador do android (Android)
$ yarn android
```
---

## Licença

Este projeto está sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Carlos Eugênio 👋🏽 [Entre em contato!](https://www.linkedin.com/in/carlos-eugenio-a494101a6/)

---

[androidstudio]: https://developer.android.com/studio
[git]: https://git-scm.com/
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[editorconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
