# Generic API

Esta é uma API genérica de demonstração desenvolvida para exercícios dos cursos de programação do Instituto Evoluir. Foi construída utilizando JavaScript com [ExpressJS](https://expressjs.com/), persistência em memória com [LowDB](https://github.com/typicode/lowdb) e autenticação [JWT](https://jwt.io).

## Run from docker hub

```sh
$ docker run -d -p 3000:3000 --name generic-api-from-hub thvieiraid/generic-api:latest
```

## Run from local docker

First, build the Docker image: 

```sh
$ docker build . -t="generic-api"
```

Then run with Docker: 

```sh
$ docker run -d -p 3000:3000 --name generic-api generic-api
```
