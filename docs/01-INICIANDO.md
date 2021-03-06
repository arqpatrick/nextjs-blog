![GitHub last commit](https://img.shields.io/github/last-commit/arqpatrick/nextjs-blog?style=flat-square) ![GitHub repo size](https://img.shields.io/github/repo-size/arqpatrick/nextjs-blog?style=flat-square) ![GitHub](https://img.shields.io/github/license/arqpatrick/nextjs-blog) ![GitHub all releases](https://img.shields.io/github/downloads/arqpatrick/nextjs-blog/total?style=flat-square)

# Blog com Next.js



## 1. CRIAR O DIRETÓRIO E O PROJETO

```cmd
mkdir 'nomedodiretorio'
cd 'nome do diretório'
```
### A. INICIAR A APLICAÇÃO

Utilizei o exemplo de blog do NextJS
Dentro do diretório cirado, executar o comando:

```cmd
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

Abrir o VSCode

```cmd
code .
```

### B. CRIAR UM REPOSITÓRIO GIT

Estou utilizando o GitHub

> Ir até a conta Github
> github.com/"usuario"?tab=repositories

Criar um Novo Repositório `(NEW)`

> 1. Dar um nome para o repositório `(Repository Name)`
> 2. Create repository
  
Utilizei o nome "nextjs-blog"
Então o repositório no meu caso ficou

>github.com/"usuario"/nextjs-blog

A tela mostra um passo-a-passo de como criar o repositório

### C. LINKAR O REPOSITÓRIO AO PROJETO

Dentro do VSCode, teclar `[CTRL+~]` para abrir o TERMINAL dentro do VSCode
Agora é seguir os passos do próprio Github

Começamos com:

```shell
echo "# nextjs-blog" >> README.md
```

Vai criar um arquivo README.md

> Esse arquivo fica na página inicial do repositório.
>
> O ".md" é de Markdown, uma linguágem de marcação, muito utilizado em arquivos README, LEIA-ME, ABOUT, etc..

Próximo passo:

```gitattributes
git init
```

Esse comando criou um diretório `[.git]` dentro da pasta do projeto

Agora:

```gitattributes
git add README.md
```

Adicionamos o arquivo README.md pelo TERMINAL.
O arquivo README.md, por padrão, passa as instruções sobre o aplicativo.

Aqui isso não é diferente.

Devemos utilizar o README para passar informações, sobre a funcionalidade, instalação, comportamento, `libs` necessárias, etc, para o correto funcionamento da aplicação.

Mais adiante falarei um pouco sobre arquivos `.md`

> Obs. Essa página que está sendo lida no meu repositório do Github é o arquivo README.md :smiley:

```shell 
git commit -m "primeiro commit"
```

Demos o primeiro "commit"

Agora:

```gitattributes
git branch -M main
```

Próximo:

```gitattributes
git remote add origin https://github.com/seu_usuario/nextjs-blog.git
```

Esse comando gravou para qual repositório do github esse projeto será enviado
E finalmente o "push" para enviar o projeto

```gitattributes
git push -u origin main
```

Agora nosso projeto foi adicionado ao Github
Pode ser acessado pela URL github.com/seu_usuario/nextjs-blog

#### C.I. Atualizar o respositório

Depois de ter criado o Respositório, para atualizar ele os comandos são mais simples
No próprio VSCode podemos fazer os próximos commits de forma gráfica (não por código)
Pressionando `[CTRL+SHIFT+G]` e depois `[G]` vamos ir para a aba "Source Control"
Nessa aba é só digital a "Message", que será o próximo commit e clicar no simbolo de Ok (Commit)

Pronto! Esse novo update foi "comitado"
Agora basta dar um "push"

```gitattributes
git push -u origin main
```

Simples :smile:

## 2. INICIAR O SERVIDOR (local)

Para iniciar o servidor local, dentro do terminal, qualquer terminal, desde que estja dentro do diretório correto, o comando é o mesmo

```bash
npm run dev
```

Por escolha e por achar mais prático, vou continuar utilizando o TERMINAL do VSCode [CTRL+~]

```js
npm run dev
```

Esse comando faz o seguinte:

```js
npm
```

>O gerenciador de pacotes JS (JavaScript)
 
```js
run
```

>Executar `[run]`

```js
dev
```

>Dentro do package.json, no diretório do projeto, o script diz que `[dev]` executa ["next dev"]
>
>Por "baixo dos panos" o NextJS faz a mágica e abre o servidor local

<img  src="https://image.flaticon.com/icons/png/128/561/561270.png"  alt="alert"  width="20"/> ****ALERTA!****

>A pasta .git que foi criada anteriormente pelo comando "git init", foi substituida pela pasta `[.next]` depois de executar o comando "npm run dev"

<img  src="https://image.flaticon.com/icons/png/128/1041/1041728.png"  alt="info"  width="20"/> ****INFORMAÇÃO****!

> Para fechar o SERVIDOR LOCAL, tecle `[CTRL+C]`

## 3. INÍCIO COM O NEXTJS

Agora você deve ter os seguintes arquivos no seu diretório:

> - .next
> - node_modules
> - pages
> - index.js
> - public
> - favicon.ico
> - vercel.svg
> - git.ignore
> - package-lock.json
> - package.json
> - README.md

Certo?

Então vamos iniciar o servidor local

```js
npm run dev
```

Por padrão, o nextjs vai utilizar a porta 3000, então o site fica na `URL localhost:3000/`

#### EDITANDO A PÁGINA

1. Abra `page/index.js` no VSCode
2. Troque o texto "Welcome" entre as tags `<h1>` para "Aprender"
3. Salve o arquivo `[CTRL+S]`

A página no navegador atualiza automaticamente
Deve estar agora com a frase "Aprender Next.js!"

### PÁGINAS

As paginas no Nextjs são componentes React, exportados do diretório `pages`

<img  src="https://image.flaticon.com/icons/png/128/1208/1208801.png"  alt="example"  width="20"/> ****EXEMPLO****

>`pages/index.js` vai para a rota `localhost:3000/`
>
>`pages/posts/primeiro-post.js` acessa por `localhost:3000/pages/primeiro-post`

Vamos lá!

1. Crie uma nova pasta dentro de `pages` com o nome de `posts`
2. Crie um arquivo dentra da pasta `post` chamada `primeiro-post.js`

Cole o seguinte código dentro do arquivo `primeiro-post.js`

```jsx
export  default  function  PrimeiroPost() {
return <h1>Título do Primeiro Post</h1>
}
```

<img  src="https://image.flaticon.com/icons/png/128/3077/3077325.png"  alt="lupa/loupe"  width="20"/> ****DESTRINCHANDO O CÓDIGO:****

> ```js
> export  default  function
> ```
>
> É o módulo de exportação padrão do `ES6[ECMAScript] ~ JavaScript`
>
> ```jsx
> PrimeiroPost
> ```
>
> É o nome da função. Pode ser qualquer nome aqui
>
> ```jsx
> {
> return <h1>Título do Primeiro Post</h1>
> }
> ```
>
> É o conteúdo que será mostrado na página `primeiro-post`.
> Tudo que estiver entre as ´{ }´ será dado como retorno quando a função for chamada

Agora acesse `http://localhost:3000/posts/primeiro-post`

Se tudo estiver correto, deve retornar uma pagina simples com o texto ´*Título do Primeiro Post*´

### LINKS

O Nextjs possui o componente `Link`, que funciona como o `<a>` da tag HTML
Para utilizá-lo, precisamos importá-lo no topo da página `pages/index.js`

```jsx
import Link from  'next/link'
```
<img  src="https://image.flaticon.com/icons/png/128/3077/3077325.png"  alt="lupa/loupe"  width="20"/> ****DESTRINCHANDO O CÓDIGO:****
> ```js
> import
> ```
> Importa alguma função
> ```js
> Link
> ```
> Nome da variável que será chamada
> Pode ser qualquer nome
> ```js
> from 'next/link'
> ```
> Local de onde a função é importada
> Neste caso, essa função fica dentro do `NextJS`, mas se for uma função criada, deve colocar o local onde esta função se encontra

Dentro da tag `h1`
```jsx
<h1 className="title">
  Learn <a href="https://nextjs.org">Next.js!</a>
</h1>
```
Mude para
```jsx
<h1 className="title">
  Leia{' '}
  <Link href="/posts/primeiro-post">
    <a>essa página!</a>
  </Link>
</h1>
```
<img  src="https://image.flaticon.com/icons/png/128/561/561270.png"  alt="lupa/loupe"  width="20"/> ****ALERTA!****

> Aqui tem três situações interessantes
> 1. Apesar deste código acima parecer `HTML`, ele não é. Esse código é `JSX`
> 2. Se reparar bem, o que seria uma `class` em `HTML`, está como `className`. Exatamente por não ser `HTML` e sim `JSX`. Isso ocorre por causa `class` é um nome protegido pelo JavaScript. Então neste caso ele carrega semântica do JS, iniciando a segunda palavra com letra maiúscula: `className`
> 3. {' '} é um [espaço] entre a palavra "Leia" e "essa página!" Outra característica do `JSX`, a utilização de JavaScript dentro do código entre `{` `}`
>
> :smiley:

Agora, dentro de `pages/posts/primeiro-post.js`, substitua todo o conteúdo por:

```jsx
  import Link from 'next/link'

  export default function PrimeiroPost() {
    return (
      <>
        <h1>Título do Primeiro Post</h1>
        <h2>
          <Link href="/">
            <a>Voltar a home</a>
          </Link>
        </h2>
      </>
    )
  }
```
Vou adotar esse ícone <img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="20"/> para sugerir sempre que acho necessário fazer os testes a partir de agora
Então, bora testar!

Agora já é possível navegar entre a `home` e a página `primeiro-post`

<img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="60"/>

---
### **Para não ficar muito longo, vou linkar abaixo para dar continuidade nas próximas seções deste passo-a-passo**
---

### [` Ativos, metadados e CSS >> `](docs/02-CSS.md)

01