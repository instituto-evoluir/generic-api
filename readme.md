# Generic API

Esta é uma API genérica de demonstração desenvolvida para exercícios dos cursos de programação do Instituto Evoluir. Foi construída utilizando JavaScript com [ExpressJS](https://expressjs.com/), persistência em memória com [LowDB](https://github.com/typicode/lowdb) e autenticação [JWT](https://jwt.io).

## Running

Para executar a API na tua máquina é necessário possuir o [Docker](https://www.docker.com) instalado.

### Run from docker hub

```sh
$ docker run -d -p 3000:3000 --name generic-api-from-hub thvieiraid/generic-api:latest
```

### Run from local docker

First, build the Docker image: 

```sh
$ docker build . -t="generic-api"
```

Then run with Docker: 

```sh
$ docker run -d -p 3000:3000 --name generic-api generic-api
```

## Documentation

O módulo de itens genéricos disponibiliza operações de CRUD simples:

| Serviço             | Descrição                        |
| ------------------- | -------------------------------- |
| `GET /items`        | Listar todos items.              |
| `GET /items/:id`    | Ler informações de um determinado item individualmente |.
| `POST /items`       | Cadastrar novo item.             |
| `PATCH /items/:id`  | Editar informações de um item.   |
| `DELETE /items/:id` | Remover um item permanentemente. |

O módulo de autenticação disponibiliza a possibilidade de controle de sessão através de um token JWT para acesso às rotas de escrita da API.

| Serviço             | Descrição                        |
| ------------------- | -------------------------------- |
| `POST /signup`       | Registrar-se.                    |
| `POST /auth`        | Autenticar=se.                   |

## Informações adicionais

Para dúvidas e exemlpos de uso, contatem o instrutor.
