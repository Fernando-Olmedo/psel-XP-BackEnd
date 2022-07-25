# psel-XP-BackEnd
Desafio Técnico do processo seletivo da Turma XP – Trybe.

<details>
<summary><strong>Orientações</strong></summary><br />

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-018-a-project-blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd psel-XP-BackEnd`

2. Instale as dependências
  * `npm install`

3. Crie um arquivo `.env` na raíz do projeto conforme modelo abaixo
  > :warning: Esse é apenas um modelo
```javascript
    #### SERVER VARS
    NODE_ENV=development
    PORT=3000

    #### DATABASE VARS  
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_DB_NAME=XP_psel
    MYSQL_USER=root
    MYSQL_PASSWORD=123456

    #### SECRECT VARS
    JWT_SECRET=XPIncTrybePSel
```
4. Execute os comandos `npm prestart` e `npm seed` para criar o banco de dados, executar as migrations e popular o banco com exemplos.

5. Execute o comando `npm start` para iniciar

 > :point_right: se preferir utilizar em modo de desenvolvimente utilize o comando `npm run debug`.

6. A aplicação pode ser acessada por meio da url `https://xp-psel-back-end.herokuapp.com`,

 <br />
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Uma aplicação que se assemelha ao dia a dia da XP, um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

  Nesse projeto foram desenvolvidas todas as camadas da aplicação (Models, Service e Controllers) e, por meio dessa aplicação, é possível realizar as operações básicas que podem ser feitas em um determinado banco de dados.

  **Requisitos Obrigatórios**
  - Endpoints listados abaixo, na seção de Contratos de
  Serviços;
  - Criar uma lista de ações que passe às informações para
  Front-End (inclusive as informações da quantidade
  investida em cada ação)

  **Requisitos Opcionais**
  - Testes unitários
  - Deploy da API
  - Autenticação e autorização JWT
  - Documentação da API (Swagger)

  <br />
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />

  • Serão `10` dias de projeto
  • Data de entrega para avaliação final do projeto: `24/07/2022 23:59`

  <br />
</details>

# Representação Gráfica do Desafio

<details>
  <summary><strong>Topologia</strong></summary><br />

  ![topologia-da-aplicacao](https://github.com/Fernando-Olmedo/psel-XP-BackEnd/blob/main/src/public/topologia_aplicacao.png?raw=true)

  <br />
</details>

<details>
  <summary><strong>Exemplificação</strong></summary><br />

  ![exemplo-de-app](https://github.com/Fernando-Olmedo/psel-XP-BackEnd/blob/main/src/public/exemplo_app.png?raw=true)

  <br />
</details>

<strong>Diagrama entidade-relacionamento</strong>

Na imagem a seguir é possível observar as tabelas criadas e o relacinamento entre as mesmas.

![diagrama-entidade-relacionamento](https://github.com/Fernando-Olmedo/psel-XP-BackEnd/blob/main/src/public/db_diagram.png?raw=true)

# Requisitos Obrigatórios

## Contratos de Serviços

## 01 - Crie um endpoint para ordens de compra

- O endpoint é acessível através do caminho (` POST /investimentos/comprar`);

- O endpoint deve receber a seguinte estrutura:
  ```json
    { "codCliente": 1, "codAtivo": 102, "qtdeAtivo": 1000 }
  ```
- a API responde com status http `201` e a seguinte estrutura no `body`:
  ```json
    { 
      "dataTransacao": "2022-07-24T02:19:22.099Z",
      "id": 21,
      "codCliente": 1,
      "codAtivo": 102,
      "qtdeAtivo": 1000,
      "tipo": 1 
    }
  ```
 > :point_right: será validado que a quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora.


## 02 - Crie um endpoint para ordens de venda

- O endpoint é acessível através do caminho (` POST /investimentos/vender`);

- O endpoint deve receber a seguinte estrutura:
  ```json
    { "codCliente": 1, "codAtivo": 102, "qtdeAtivo": 1000 }
  ```
- a API responde com status http `201` e a seguinte estrutura no `body`:
  ```json
    { 
      "dataTransacao": "2022-07-24T02:19:22.099Z",
      "id": 21,
      "codCliente": 1,
      "codAtivo": 102,
      "qtdeAtivo": 1000,
      "tipo": 2 
    }
  ```
> :point_right: será validado que a quantidade de ativo a ser vendida não pode ser maior que a quantidade disponível na carteira.

## 03 - Crie um endpoint para consultar a carteira de um cliente

- O endpoint é acessível através do caminho (` GET /clientes/ativos/{codCliente}`);

- Apenas os ativos do cliente com o `codCliente` presente na URL deve ser retornado;

- a API responde com status http `200` e a seguinte estrutura no `body`:
  ```json
    [
      {
        "codCliente": 1,
        "codAtivo": 102,
        "qtdeAtivo": 100,
        "valor": 94.31
      },
      {
        "codCliente": 1,
        "codAtivo": 101,
        "qtdeAtivo": 200,
        "valor": 22.55
      }
    ]
  ```

## 04 - Crie um endpoint para consultar um ativos da corretora

- O endpoint é acessível através do caminho (` GET /assets/ativos/{codAtivo}`);

- Apenas o ativo da corretora com o `codAtivo` presente na URL deve ser retornado;

- a API responde com status http `200` e a seguinte estrutura no `body`:
  ```json
    { 
      "codAtivo": 102,
      "qtdeAtivo": 10000,
      "valor": 29.05 
    }
  ```

## 05 - Crie um endpoint para depositar dinheiro em uma conta

- O endpoint é acessível através do caminho (` POST /conta/deposito`);

- O endpoint deve receber a seguinte estrutura:
  ```json
    { "codCliente": 1, "valor": 100.54 }
  ```
- a API responde com status http `201` e a seguinte estrutura no `body`:
  ```json
    { "codCliente": 1, "valor": 100.54, "tipo": "deposit" }
  ```
> :point_right: será validado que a quantidade a ser depositada não poderá ser negativa ou igual a zero.

## 06 - Crie um endpoint para sacar dinheiro da conta

- O endpoint é acessível através do caminho (` POST /conta/saque`);

- O endpoint deve receber a seguinte estrutura:
  ```json
    { "codCliente": 1, "valor": 100.54 }
  ```
- a API responde com status http `201` e a seguinte estrutura no `body`:
  ```json
    { "codCliente": 1, "valor": 100.54, "tipo": "withdrawal" }
  ```
  > :point_right: será validado que a quantidade a ser sacada não poderá ser maior que o saldo da conta; não pode ser negativa e não pode ser igual a zero.

## 07 - Crie um endpoint para buscar o saldo da conta do cliente

- O endpoint é acessível através do caminho (` GET /conta/{codCliente}`);

- Apenas o saldo da conta do cliente com o `codCliente` presente na URL deve ser retornado;

- a API responde com status http `200` e a seguinte estrutura no `body`:
  ```json
    { "codCliente": 1, "saldo": 100.54 }
  ```

## 08 - Criar uma lista de ações que passe às informações para Front-End

- O endpoint é acessível através do caminho (` GET /clientes/ativos/list/{codCliente}`);

- Todos os ativos da corretora devem ser retornados, indicando quais ativos um cliente possui e qual a quantidade.

- a API responde com status http `200` e a seguinte estrutura no `body`:
  ```json
    [
      {
        "codAtivo": 101,
        "sigla": "ITUB4",
        "valor": 22.55,
        "estaNaCarteira": "sim",
        "qtdeAtivo": 5
      },
      {
        "codAtivo": 102,
        "sigla": "XPBR31",
        "valor": 94.31,
        "estaNaCarteira": "não",
        "qtdeAtivo": 0
      },
      {
        "codAtivo": 103,
        "sigla": "PETR4",
        "valor": 27.96,
        "estaNaCarteira": "não",
        "qtdeAtivo": 0
      }
    ]
  ```

# Requisitos Opcionais

## 09 - Testes unitários 🚧 

> :warning: Requisito em desenvolvimento

- Escreve testes para cobrir 100% das camadas da api

- Utiliza o mocha, chai e sinon para escrever os testes;

## 10 - Autenticação e autorização JWT

- A aplicação tem o endpoint POST `/login`

- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "johndoe@xpi.com",
    "password": "123456"
  }
  ```
- Se a requisição receber um par de `email` e `password` errados/inexistentes, não é possível realizar "login"

 - Se o login foi feito com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
  ```
  > :warning: O token anterior é fictício, o token é gerado a partir da variável de ambiente `JWT_SECRET`, do `payload` da requisição e não contém o atributo `password` em sua construção, apenas o `passwordHash`.

## 11 - Deploy da API

- A aplicação tem o docker configurado. O docker executa os comandos `prestart` e `seed`, de modo que a aplicação possa ser testada. O comando `npm start` para inicia a aplicação via `CMD`.`

- A aplicação tem o arquivo heroku.yml. O arquivo inicia um servidor do tipo `web`. O run deve executa o servidor utilizando o `node`.

- A aplicação pode ser acessada por meio da url `https://xp-psel-back-end.herokuapp.com`, especificando as rotas definidas nos requisitos anteriores.

- O banco de dados foi criado utlizando o add-on `JawsDB` no heroku.


## 12 - Documentação da API (Swagger) 🚧 

  > :warning: Requisito em desenvolvimento

- Documentar todas as rotas da api.

- As rotas devem conter um modele de requisição e resposta

- Os códigos de sucesso e erro devem estar disponíveis

 > :point_right: A documentação da api pode ser conferida localmente nesse endereço `http://localhost:3000/docs` ou online nesse `https://xp-psel-back-end.herokuapp.com/docs`.




