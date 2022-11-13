# <h1 align="center">NLW Copa ⚽️ Projeto Mobile Frontend </h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <a href="https://github.com/RodrigoLuigi" target="_blank">Author</a>
</p>

## <img id="sobre" src="https://imgur.com/VhTBbHg.png" alt="imagem de um notebook" align="center" width="30px"> _**O que desenvolvemos neste Projeto?**_

NLW Copa - web é um aplicativo para criar bolões descentralizados dos Jogos da Copa do Mundo. O usuário poderá criar seu próprio bolão e compartilhar o código de acesso para que outros usuários possam participar. Cada usuário poderá dar apenas um único palpite sobre cada jogo.

## :sparkles: Features ##

:heavy_check_mark: Criação de Bolões\
:heavy_check_mark: Criação de Palpites por Bolão\
:heavy_check_mark: Compartilhar Bolão com amigos!\
:hammer_and_wrench: Mostrar Ranking por Bolão

## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas neste projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## 📚️ Bibliotecas ##

As seguintes bibliotecas foram usadas neste projeto:

- [fastify]()
- [prisma]()
- [short-unique-id]()
- [zod]()

## 📝 Requisitos ##

- [Git](https://git-scm.com) 
- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [server](https://github.com/RodrigoLuigi/NLW-Copa/tree/main/server)

## :checkered_flag: Iniciando ##

```bash
# Clone este projeto (server)
$ git clone https://github.com/RodrigoLuigi/NLW-Copa/tree/main/server.git
# Acesse o projeto
$ cd server
# Instale as dependências
$ npm install
# Criar arquivo .env e configurar variáveis de ambiente para autenticação com o Google
CLIENT_ID: xxxxxxxxxxxxx
# Execute o projeto com npm
$ npm run dev
# O Server irá inicializar em http://localhost:3333
```

## 🔗 Rotas ##

```bash
# [GET] todos os bolões
/polls
# [GET] Bolão por id
/polls/:id
# [GET] Contagem de usuários
/users/count
...
```

##
_**Feito por <a href="https://github.com/RodrigoLuigi" target="_blank">Rodrigo Luigi</a>**_  👨‍🚀

&#xa0;

<a href="#top">Back to top</a>