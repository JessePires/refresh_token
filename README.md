

<h1 align="center">
     API de autenticação de Usuário com Refresh Token.
</h1>

<h3 align="center">
  Projeto criado com base no Code Drops #88 da RocketSeat
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/JessePires/refresh_token?color=%2304D361">
  
  <a href="https://github.com/JessePires/refresh_token/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JessePires/refresh_token">
  </a>
</p>

<h4 align="center">
	🚧  Concluído 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Executando](#user-content--executando)
   * [Tecnologias](#-tecnologias)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
<!--te-->


## 💻 Sobre o projeto

O Projeto foi desenvolvido com o intuito de aplicar o conceito de Refresh Token na prática, ou seja, criar um novo token com base em credenciais quando o 
token anterior tiver expirado. Assim, não é necessário que o usuário fique se autenticando toda vez que o token expirar. Como o foco era simplesmente este,
a aplicação em si é extremamente simples. Trata-se de uma API de autenticação de usuário.

Como mencionado acima, ele foi desenvolvido com base no Code/drops #88 da RocketSeat que pode ser encontrado no canal deles, ou <a href="https://www.youtube.com/watch?v=RaweREhpBX8&t=57s">clicando aqui</a>.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/). Também é bom que se utilize um API Client
como o [Insomnia](https://insomnia.rest/download) ou o [Postman](https://insomnia.rest/download).

#### 🎲 Executando

<p>Abra o terminal e siga os seguintes passos:</p>

```bash

# Clone este repositório
$ git clone git@github.com:JessePires/refresh_token.git

# Acesse a pasta do projeto no terminal/cmd
$ cd refresh_token

# Instale as dependências
# via npm
$ npm install

# Execute a aplicação
$ npm run dev

# via yarn
$ yarn

# Execute a aplicação
$ yarn dev

# O servidor inciará na porta:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Express](https://expressjs.com/)**
-   **[Prisma ORM](https://www.prisma.io/)**
-   **[MySQL](https://www.mysql.com/)**

> Veja o arquivo  [package.json](https://github.com/JessePires/refresh_token/blob/master/package.json)


---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor

<td align="center"><a href="https://github.com/JessePires">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/20424496?s=460&u=87f2870ff153ab88402d6246cb3347a46ae33fe9&v=4" width="100px;" alt=""/>
<br />
 <b>Jessé Pires</b>
 </a> <a href="https://github.com/JessePires" title="Repositorio Jessé"></a>

[![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jesserocha@alunos.utfpr.edu.br)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://br.linkedin.com/in/jesse-pires-barbato-rocha-933714202)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/jessepires2010)
