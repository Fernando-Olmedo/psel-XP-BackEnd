# psel-XP-BackEnd
Desafio Técnico do processo seletivo da Turma XP – Trybe.

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Uma aplicação que se assemelha ao dia a dia da XP, um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

  Nesse projeto foram desenvolvidas todas as camadas da aplicação (Models, Service e Controllers) e, por meio dessa aplicação, é possível realizar as operações básicas que podem ser feitas em um determinado banco de dados.

  **Requisitos Obrigatórios**
  • Endpoints listados abaixo, na seção de Contratos de
  Serviços;
  • Criar uma lista de ações que passe às informações para
  Front-End (inclusive as informações da quantidade
  investida em cada ação)

  **Requisitos Opcionais**
  • Testes unitários
  • Deploy da API
  • Autenticação e autorização JWT
  • Documentação da API (Swagger)

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

## 1 - Crie um endpoint para ordens de compra

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


## 2 - Crie um endpoint para ordens de venda

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

## 3 - Crie um endpoint para consultar a carteira de um cliente

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

## 4 - Crie um endpoint para consultar um ativos da corretora

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

## 5 - Crie um endpoint para depositar dinheiro em uma conta

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

## 6 - Crie um endpoint para sacar dinheiro da conta

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

## 7 - Crie um endpoint para buscar o saldo da conta do cliente

- O endpoint é acessível através do caminho (` GET /conta/{codCliente}`);

- Apenas o saldo da conta do cliente com o `codCliente` presente na URL deve ser retornado;

- a API responde com status http `200` e a seguinte estrutura no `body`:
  ```json
    { "codCliente": 1, "saldo": 100.54 }
  ```


