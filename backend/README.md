
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
