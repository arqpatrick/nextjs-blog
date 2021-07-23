# CRIAR UM BLOG DE ACORDO COM O EXEMPLO DO NEXTJS

Objetivos
> + Adicionar arquivos estáticos(imagens, etc) ao Next.js
> + Personalizar o conteúdo `<head>` de cada página
> + Criar componente React reutilizável usando Módulos CSS
> + Adicionar CSS global em `pages/_app.js`

## 4. ATIVOS

### **Ativos Estáticos**

São servidos a partir do diretório `public` no diretório raiz, tal qual `pages`

Baixe a sua foto de perfil ou

<img  src="https://image.flaticon.com/icons/png/128/841/841539.png"  alt="tips"  width="20"/> ****DICA!****
>Se você utilizar o seu endereço `github.com/"usuário".png`, você tem acesso a foto de perfil de usuário :wink:

O NextJS também possui um componente para lidar com imagem, chamado de...&nbsp;&nbsp;&nbsp;...`Image` !!!
E para utilizá-lo, seguimos a mesma lógica do `Link`

Então:

```js
import Image from 'next/image'
```

E para configura-la como desejar, utilizamos o seguinte código

```jsx
const SeuComponente = () => (
  <Image
    src="/images/profile.jpg" // Rota do arquivo da imagem
    height={144} // O tamanho desejado
    width={144} // O tamanho desejado
    alt="Seu Nome"
  />
)
```

## 5. METADADOS

Para modificar `METADADOS` da página, temos o componente NextJS `Head`, que faz as vezes de tag `<head>` do `HTML`

Na `pages/index.js`, encontre as seguintes linhas

```html
<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

Agora vamos fazer o mesmo com a `pages/posts/primeiro-post.js`

Importar

```js
import Head from 'next/head'
```

Agora adicione a `Head` e o `<title>`

```html
<Head>
    <title>Primeiro Post</title>
</Head>
```

A página deve ficar com esse código

```jsx
import Head from 'next/head'
import Link from 'next/link'

  export default function PrimeiroPost() {
    return (
      <>
        <Head>
            <title>Primeiro Post</title>
        </Head>
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
Tudo está funcionando, mas espero que esteja testando a cada modificação no código. Porque assim é mais fácil localizar algum bug que eventualmente acontecer.
Vou adotar esse ícone <img  src="https://image.flaticon.com/icons/png/128/2562/2562030.png"  alt="testing"  width="20"/> para sugerir sempre que acho necessário fazer os testes a partir de agora
Então, bora testar!

<img  src="https://image.flaticon.com/icons/png/128/2562/2562030.png"  alt="testing"  width="60"/>


## 6. CSS

A página index deste exemplo, já possui um `estilo css` nela. Que pode ser estudada olhando o código

```jsx
<style jsx>{`
  …
`}</style>
```

O NextJS está utilizando uma biblioteca chamada `styled-jsx`, permitindo que escreva `CSS` dentro de um componente `React`

### **COMPONENTE DE LAYOUT**

1. Crie um diretório na raiz do projeto chamado `components`
2. Dentro de `components`, crie um arquivo chamado `layout.js` com o código:

```jsx
export default function Layout({ children }) {
  return <div>{children}</div>
}
```

3. Abra `pages/posts/primeiro-post.js` e importe o componente `Layout` e adicione na parte mais externa do código dentro do `return` na função `PrimeiroPost`

```jsx
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

  export default function PrimeiroPost() {
    return (
      <Layout>
        <Head>
            <title>Primeiro Post</title>
        </Head>
        <h1>Título do Primeiro Post</h1>
        <h2>
          <Link href="/">
            <a>Voltar a home</a>
          </Link>
        </h2>
      </Layout>
    )
  }
```

### **ADICIONANDO CSS**

Vamos criar um arquivo com o `CSS` que será responsável pelo estilo dos posts

Crie um arquivo chamado `layout.module.css` dentro da pasta `components`

Coloque esse estilo dentro do `components/layout.module.css`

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

<img  src="https://image.flaticon.com/icons/png/128/561/561270.png"  alt="alert"  width="20"/> ****ALERTA!****

> Para utilizar `Módulo CSS`, o nome do arquivo deve terminar com `.module.css`
> Utilizamos o neste caso `layout.module.css`, mas poderia ser `qualquerNome.module.css`


Agora, para podermos utilizar o estilo `.container` no `components/layout.js`, precisamos importar o `layout.module.css`. Aqui vamos nomea-lo de `styles`, mas poderia ser qualquer nome. Então vamos chamar o `styles.container` dentro do `className` que definirá o estilo para todos os `childrens` do `layout.js`

O `layout.js` deve ficar assim

```jsx
import styles from './layout.module.css'

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
  }
```

Como resultado, `http://localhost:3000/posts/primeiro-post` deve estar com o estilo aplicado

<img  src="https://image.flaticon.com/icons/png/128/1041/1041728.png"  alt="info"  width="20"/> ****INFORMAÇÃO****

> O NextJS cria automaticamente nomes de classes únicos
> É uma segurança de que não haverá documentos gerados eventualemnte com o mesmo nome de classe.
>Evitando conflitos e carregando a quantidade mínima de CSS para cada página
>
>Exemplo
>```html
><div id="__next">
><div class="layout_container__2t4v2">
><h1>Título do Primeiro Post</h1>
>```

### **ESTILOS GLOBAIS**

`Módulos CSS` são úteis para nível de componente
Já, para aplicação de algum `CSS` em todas as páginas, o NextJS utiliza `CSS Globais`

1. Instale o componente chamado de `App` que lidará com todas as páginas

```properties
npm run dev
```

2. Crie um arquivo `pages/_app.js` com o seguinte conteúdo




---


<div style="text-align: center">

### [` << Início `](../README.md) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [` Ativos, metadados e CSS >> `](docs/02-CSS.md)

</div>


<div style="text-align: right"> 02 </div>

