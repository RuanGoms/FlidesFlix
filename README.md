<h1 align="center">FlidesFlix</h1>
<p align="center">:card_file_box: Uma API REST para uma locadora de filmes</p>
<img src="https://img.shields.io/static/v1?label=API&message=FlidesFlix&color=E50914&style=for-the-badge&logo=ghost"/>
<div style="float: right">
<img src="https://img.shields.io/badge/Express-4.17.1-blue"/>
<img src="https://img.shields.io/badge/Joi-13.1.0-purple"/>
<img src="https://img.shields.io/badge/Mongoose-6.0.7-green"/>
<div>
<hr>

 <h4 align="center"> 
  🎉 FlidesFlix 🚀 Terminado 🎉
</h4>
  <h3> Features</h3>

  - [x] Rotas HTTP Express 
    - [x] Cadastro de filme
    - [x] Pesquisar filme específico
    - [x] Mostra lista de filmes
    - [x] Atualiza filmes
    - [x] Deleta filmes
  - [x] Filmes armazenados no MongoDB
  
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Express](https://www.npmjs.com/package/express), [Joi](https://www.npmjs.com/package/joi), [MongoDB](https://www.mongodb.com/), [Mongoose](https://www.npmjs.com/package/mongoose).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e um gerenciador de requisições como [Insomnia](https://insomnia.rest/download).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/RuanGoms/FlidesFlix.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd FlidesFlix

# Instale as dependências
$ npm install

# Inicie a aplicação
$ node .\index.js
  
# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
  
# Conecte-se com o mongodb pelo MongoDB Compass com o seguinte URL: "mongodb://localhost/"

# Exemplo de Requisições com o Insomnia:
  GET FlidesFlix - Lista de Filmes:
    http://localhost:3000/api/films/
  
  GET FlidesFlix - Filme Específico:
    http://localhost:3000/api/films/1
  
  POST FlidesFlix - Adiciona Filmes:
    http://localhost:3000/api/films/
    Body JSON:
      {
        "name": "The Shining",
        "director": "Stanley Kubrick",
        "genre": [
          "Terror",
          "Psychological Horror"
        ],
        "year": 1980
      }
  
  PUT FlidesFlix - Atualiza Filmes:
    http://localhost:3000/api/films/2
    Body JSON:
      {
        "name": "The Shining",
        "director": "David Fincher",
        "genre": [
          "Romance",
          "Action"
        ],
        "year": 1980
      }
  
  DELETE FlidesFlix - Deleta Filmes:
    http://localhost:3000/api/films/3
  
```
  
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Joi](https://www.npmjs.com/package/joi)
- [Express](https://www.npmjs.com/package/express)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://www.npmjs.com/package/mongoose)
  
### Autor
---

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61697553?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Ruan Gomes</b></sub>

Feito por Ruan Gomes 👋🏽 Entre em contato!

[![Gmail Badge](https://img.shields.io/badge/-ruangomes@edu.unifor.br-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ruangomes@edu.unifor.br)](mailto:tgmarinho@gmail.com)
