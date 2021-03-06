# CRIAR UM BLOG DE ACORDO COM O EXEMPLO DO NEXTJS

Objetivos
> + Recurso de `pré-renderização` no NextJS
> + As duas formas de pré-renderização: `Geração estática` e `Renderização do lado do servidor`
> + Geração estática `com dados` e `sem dados`
> + Como utilizar e importar dados externos do blog para a página de índice através do `getStaticProps`
> + Algumas informações úteis sobre `getStaticProps`

## 7. PRÉ-RENDERIZAÇÃO

Um dos conceitos mais importantes do NextJS é a `Pré-renderização`
Ele é responsável por renderizar as páginas com antecedência, executando o JavaScript antes de chegar no lado do cliente.
Isso trás benefícios para o desempenho em `SEO (Serach Engine Optimization)`, que é fundamental para a propagação do site em mecanismos de busca *(Google, Bing, Yahoo, etc...)*

Esse processo é chamado de `hidratação`, pois o código `HTML` gerado é associado ao código mínimo de `JavaScript` para tornar a página interativa quando carregada pelo navegador

### **DUAS FORMAS DE PRÉ-RENDERIZAR**

### *1. GERAÇÃO ESTÁTICA*

Este método pré-renderiza o HTML no **momento da construção**. O HTML pré-renderizado é reutilizado em cada solicitação

<img  src="https://image.flaticon.com/icons/png/128/1208/1208801.png"  alt="example"  width="20"/> ****EXEMPLO****

> Uma página pronta/renderizada, é utilizada para vários indivíduos. Para todas as requisições, a mesma página.
> + Um Blog sem muitas atualizações na semana
> + Uma landingpage
> + Listagem de produtos

### *2. RENDERIZAÇÃO DO LADO DO SERVIDOR*

Já, este outro método de pré-renderização gera o HTML em **cada solicitação**

<img  src="https://image.flaticon.com/icons/png/128/1208/1208801.png"  alt="example"  width="20"/> ****EXEMPLO****

> A página é atualizada e renderizada a cada requisição, sendo única para cada indivíduo que a requisite
> + Twitter
> + Facebook
> + Portal de Notícias

<img  src="https://image.flaticon.com/icons/png/128/1041/1041728.png"  alt="info"  width="20"/> ****INFORMAÇÃO****

> O NextJS trabalha bem tanto com `Geração Estática / Static Generation` quanto com `Renderização do lado do servidor / Server-side Rendering` 

### *GERAÇÃO ESTÁTICA COM E SEM DADOS*

A `Static Generation` pode ser feita **com** e **sem** dados

Por enquanto, todas as páginas não requerem busca de dados externos. Essas páginas são geradas automaticamente de forma estática quando o aplicativo for criado para produção

**Mas**, eventualmente, você pode precisar/desejar, que algumas páginas busquem informações em algum banco de dados ou `API` externa
Para atender essa demanda o NextJS tem suporte através da `Static Generation with Data`

<img  src="https://image.flaticon.com/icons/png/128/3655/3655586.png"  alt="info"  width="20"/> ****ADENDO****

> `API` - Application Programming Interface
>
> Simplificando, é um conjunto de normas que faz o meio de campo estre plataformas diferentes, possibilitando o uso de dados em varios aplicativos
>> Aplicativo A <-- API --> Aplicativo B

### *GERAÇÃO ESTÁTICA COM DADOS USANDO* `getStaticProps`

O NextJS reconhece a função `async` e utiliza a expressão `getStaticProps` para fazer o uso desta função

Tudo que estiver dentro da função, pode buscar dados externos e indexá-los a página

```jsx
export default function Home(props) { ... }

export async function getStaticProps() {
  // Busca dados externos de sistemas de arquivos, API's, DB, etc...
  const data = ...

  // O valor da chave/key `props` será transmitida
  // para o componente/component `Home`
  return {
    props: ...
  }
}
```

Basicamente, o `getStaticProps` sinaliza para o NextJS que tem alguns dados pendentes e que quando pré-renderizar a página, garantir que esses dados foram carregados

## 8. DADOS DO BLOG

Neste exemplo, adicionaremos os dados das postagens do blog utilizando `arquivos de marcação/MarkDown`

<img  src="https://image.flaticon.com/icons/png/128/3655/3655586.png"  alt="info"  width="20"/> ****ADENDO****

> `Markdown` é um arquivo de marcação de texto. Pronto! :smiley:
>
> Brincadeira :joy:
>
> Por intenção, é um texto para informar o que é importante.
>
> Escrito com uma formatação mais simples que a linguágem de marcação HTML, mas que fique bem apresentável e de fácil leitura
>
> Pensa nele como um `.txt` turbinado ou em um `.html` simplificado, ok?
>
> Aproveitando...

<img  src="https://image.flaticon.com/icons/png/128/1041/1041728.png"  alt="info"  width="20"/> ****INFORMAÇÃO****

> ...Aproveitando, aqui vou trazer uma informação.
> Como padrão e boas práticas, os arquivos `.md [Markdown]` devem sempre buscar pela língua inglesa na sua construção
>
> Pensando em uma forma de todos terem acesso a informação, o inglês é uma escolha óbvia de padronizar. A mesma idéia deve ser seguida na construção do código
>
> Possivelmente, no futuro, alguem precisará fazer manutenção no código. Como não temos como prever quando e quem será essa pessoa (assim como você pode pegar o código escrito por outra pessoa), as boas práticas adotam essa idéia de sempre buscar por criar variáveis, componentes, arquivos, pastas, banco de dados, etc com palavras em inglês

### "BORA CODAR"

+ Crie um novo diretório na pasta raiz chamada `posts` 
    + Obs.: Não é a mesma de antes `pages/posts`, ok!
+ Então, dentro de `posts`, crie os seguintes arquivos: `pre-rendering.md` e `ssg-ssr.md`

Dentro de `posts/pre-rendering.md`, copie e cole:

```markdown
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
```

Faça o mesmo em `posts/ssg-ssr.md`:

```markdown
---
titulo: 'When to Use Static Generation v.s. Server-side Rendering'
data: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
```

<img  src="https://image.flaticon.com/icons/png/128/3655/3655586.png"  alt="info"  width="20"/> ****ADENDO****

> Nestes exemplos, os arquivos `markdown` possuem uma seção de `metadados`
> ```yaml
> ---
> titulo: 'Qualquer Título'
> data: 'DD-MM-AAAA'
> ---
> ```
> `title` e `date` neste caso, é `YAML Front Matter [YAML - Yet Another Markup Language/Mais Outra Linguágem de Marcação]` 
>> Exemplo
>>
>> ```yaml
>> --- # em bloco
>> nome: Patrick
>> idade: 35
>> --- # em linha
>> {nome: Patrick, idade: 23}
>> ```
>>
> Que pode ser analisado usando a biblioteca [`gray-matter`](https://github.com/jonschlinkert/gray-matter)

### *ANALISANDO OS DADOS DO BLOG* `getStaticProps`

Queremos que:

+ Analise cada arquivo `markdown` e obtenha `titulo`, `data` e nome do arquivo que será usado como `id`, gerando a `URL` da postagem
+ Liste os dados da página de índice, classifacod por data

Para isso, precisamos implementar `getStaticProps`

### *IMPLEMENTANDO* `getStaticProps`

1. Instale a `gray-matter` para análisarmos os metadados em cada arquivo

```console
npm install gray-matter
```

<img  src="https://image.flaticon.com/icons/png/128/2797/2797387.png"  alt="attention"  width="20"/> ****ATENÇÃO!!!****

> Lembrar de sempre fechar o servidor `[CTRL+C]` antes de instalar qualquer lib!
>
> Para reiniciar o servidor após a instalação console: `npm run dev`

2. Criaremos um diretório na raiz (nível superior), chamado de `lib`
3. Dentro dessa pasta `lib`, criaremos um arquivo JS chamado `posts.js` e colaremos o conteúdo a baixo

```jsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const diretorioDePosts = path.join(process.cwd(), 'posts')

export function pegarDadosDePostagensClassificadas() {
  // Pega o nome dos arquivos dentro de /posts
  const nomesDosArquivos = fs.readdirSync(diretorioDePosts)
  const dadosDeTodosPosts = nomesDosArquivos.map(nomeDoArquivo => {
    // Remove o ".md" do nome do arquivo para obeter a id
    const id = nomeDoArquivo.replace(/\.md$/, '')

    // Ler o arquivo markdown como uma string
    const caminhoCompleto = path.join(diretorioDePosts, nomeDoArquivo)
    const conteudosDoArquivo = fs.readFileSync(caminhoCompleto, 'utf8')

    // Usa o gray-matter para analisar a seção de metadados da postagem
    const resultadoDoMatter = matter(conteudosDoArquivo)

    // Combinar os dados com o id
    return {
      id,
      ...resultadoDoMatter.data
    }
  })
  // Classificar postagens por data de publicação (dia)
  return dadosDeTodosPosts.sort(({ dia: a }, { dia: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
```

Estamos exportando essa função como `pegarDadosDePostagensClassificadas`, e vamos chamá-la com `getStaticProps` dentro de `pages/index.js` para acessar as postagens do blog

```jsx
import { pegarDadosDePostagensClassificadas } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = pegarDadosDePostagensClassificadas()
  return {
    props: { allPostsData }
  }
}
```

Agora vamos passar essas postagens para a `Home` através de `export default function Home({ allPostsData })`

```jsx
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{tituloDoSite}</title>
      </Head>

     
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, dia, titulo }) => (
            <li className={utilStyles.listItem} key={id}>
              {titulo}
              <br />
              {id}
              <br />
              {dia}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
```

Se tudo estiver certo, em `http://localhost:3000` veremos as postagens do blog listadas por ordem de data de postagem

<img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="60"/>

---

Aqui foi abordado a busca de dados através de `getStaticProps`

---

### [` <<< Início `](../README.md) | [` << Pré-renderização e busca de dados `](02-CSS.md) | [` Rotas Dinâmicas >> `](04-ROTAS.md)

 03 