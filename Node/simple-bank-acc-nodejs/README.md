# Banco Digital API

Esta é uma API simples de um banco digital que permite a criação de contas, gerenciamento de extrato bancário, depósitos, saques e muito mais.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/): Plataforma de tempo de execução JavaScript.
- [Express.js](https://expressjs.com/): Framework web para Node.js.
- [Nodemon](https://nodemon.io/): Utilitário que monitora alterações no código e reinicia o servidor automaticamente.

## Funcionalidades

- [x] Criar uma conta
- [x] Buscar o extrato bancário do cliente
- [x] Realizar um depósito
- [x] Realizar um saque
- [x] Buscar o extrato bancário do cliente por data
- [x] Atualizar os dados da conta do cliente
- [x] Obter dados da conta do cliente
- [x] Deletar uma conta
- [x] Retornar o saldo

## Requisitos

- Node.js
- npm ou yarn

## Endpoints da API

Aqui estão alguns dos principais endpoints da API:

- `POST /account`: Cria uma nova conta.
- `GET /statement`: Obtém o extrato bancário de um cliente.
- `POST /withdraw`: Realiza um saque na conta de um cliente.
- `POST /deposit`: Realiza um depósito na conta de um cliente.
- `GET /statement/date`: Obtém o extrato bancário de um cliente por data.
- `PUT /account`: Atualiza os dados da conta de um cliente.
- `GET /account`: Obtém os dados da conta de um cliente.
- `DELETE /account`: Deleta uma conta.
- `GET /balance`: Obtém o saldo da conta de um cliente.
