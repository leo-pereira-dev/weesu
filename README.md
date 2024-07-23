
# Backend Application
* Para rodar a api no seu sistema:

1. Executar o comando: ```npm install```
2. Executar as [migrações das tabelas] com o comando ```npm run migration:run``` executado no terminal na pasta do projeto.
3. Para funcionar voce precisa alterar a propriedade ```host``` de 'db' para 'localhost' no arquivo ```/src/shared/infra/typeorm/index.ts```.
4. Executar o comando: ```npm run dev```
5. A api estará rodando em ```http://localhost:3333```

## Como testar a api

* Você pode testar a api utilizando o Insomnia ou PostMan configurando as rotas e tokens. (Lembre-se de adicionar sua url de produção no arquivo openapi.yaml para poder testa-la em produção)

## PostgreSQL
```/src/shared/infra/typeorm/index.ts```.
* Acessar o banco de dados com o usuario postgres e a senha docker e criar o banco de dados weesu.

* Rodar o comando de migrações do typeorm:
```npm run migration:run```
* Esse comando foi personalizado dentro de packge.json

## TypeORM

https://typeorm.io/

* Definição das tabelas no TypeORM: As tabelas no TypeORM são configuradas através das entidades (entities). Essas entidades representam a estrutura das tabelas no banco de dados.

* Uso de repositórios para acessar entidades: Para interagir com essas entidades, você usa repositórios. Você pode obter um repositório de uma entidade com import { getRepository } from 'typeorm';.

* Métodos disponíveis em repositórios: Com os repositórios, você pode realizar várias operações, como encontrar um registro com findOne(), salvar um novo registro com save(), atualizar registros com update(), entre outros métodos.

* Criação de repositórios personalizados: É possível criar repositórios personalizados, onde você pode definir métodos específicos para suas necessidades.

* Campos opcionais nas entidades: Por padrão, todos os campos nas entidades são obrigatórios. Para tornar um campo opcional, você deve adicionar a opção isNullable: true na configuração do campo.


## Comandos CLI

* Comando para criar uma migração com o TypeORM no TypeORM:
```npm run typeorm migration:create NOMEDAMIGRAÇÂO```


* Comando para executar migração no TypeORM no TypeORM:
```npm run typeorm migration:run```


* Comando para desfazer uma migração:
```npm run typeorm migration:revert```

* Comando para mostrar as migrações:
```npm run typeorm migration:show```

# Frontend Application

Este é um projeto frontend criado com React e diversas bibliotecas para fornecer uma experiência completa de desenvolvimento. Abaixo estão as instruções sobre como configurar, usar e contribuir para o projeto.

## Índice

- [Backend Application](#backend-application)
  - [Como testar a api](#como-testar-a-api)
  - [PostgreSQL](#postgresql)
  - [TypeORM](#typeorm)
  - [Comandos CLI](#comandos-cli)
- [Frontend Application](#frontend-application)
  - [Índice](#índice)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Scripts](#scripts)
  - [Dependências](#dependências)
    - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)

## Requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Você pode baixá-los em [Node.js](https://nodejs.org/).

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/leo-pereira-dev/weesu.git
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    # ou, se você estiver usando yarn
    yarn install
    ```

## Scripts

Os seguintes scripts estão disponíveis:

- **Iniciar o servidor de desenvolvimento:**

    ```bash
    npm start
    # ou
    yarn start
    ```

- **Criar uma versão otimizada para produção:**

    ```bash
    npm run build
    # ou
    yarn build
    ```


- **Ejetar a configuração padrão do Create React App:**

    ```bash
    npm run eject
    # ou
    yarn eject
    ```

## Dependências

O projeto utiliza as seguintes bibliotecas principais:

- **React**: Uma biblioteca para construir interfaces de usuário.
- **Material-UI**: Componentes de interface do usuário baseados em Material Design.
- **Axios**: Cliente HTTP para fazer requisições.
- **Yup**: Biblioteca para validação de esquemas.
- **React Router DOM**: Para gerenciamento de rotas.

### Dependências de Desenvolvimento

Inclui ferramentas para linting, testes e suporte a TypeScript:

- **ESLint**: Ferramenta de linting para JavaScript e TypeScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.


---

Sinta-se à vontade para ajustar as seções de acordo com suas necessidades e o contexto do projeto.
