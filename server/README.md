inicializando projeto 
$npm init -y

instalando as dependencias do typescript
$npm i typescript -D

inicializando setup de config do typescript
$npx tsc --init

insstalando o fastify (alternativa ao express.js)
$npm i fastify

instalando a dependencia de desenvolvimento que cuidará da converção de TS para JS
$npm i tsx -D

instalando o prisma 
$npm i prisma -D

ferramenta para trabalhar com banco de dados
$npm i @prisma/client

configurando o setup para trabalhar com banco de dados SQLite
$npx prisma init --datasource-provider SQLite

rodando as migrations de versionamento do DB , e cria table Pool no banco de dados
$npx prisma migrate dev

criando entidade de relacionamento entre tabelas do banco de dados ERD
o mermaid é utilizado para gerar diagramas de entidade de relacionamento
$npm i prisma-erd-generator @mermaid-js/mermaid-cli -D

inicializando prisma-erd-generator
$npx prisma generate

Instalando 'CORS' fastify/cors 
$npm i @fastify/cors
