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
Vou adotar esse ícone <img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="20"/> para sugerir sempre que acho necessário fazer os testes a partir de agora
Então, bora testar!

<img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="60"/>


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

<img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="60"/>

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

<img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="60"/>

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

1. Crie um arquivo `pages/_app.js` e adicione o componente `App`

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

<img  src="https://image.flaticon.com/icons/png/128/561/561270.png"  alt="alert"  width="20"/> ****ALERTA!****
> Para utilizar o componente `App` você deverá reiniciar o servidor `[CTRL+C]` para desligar
> E para reiniciar:
> ```console
> npm run dev
> ```

<img  src="https://image.flaticon.com/icons/png/128/1041/1041728.png"  alt="info"  width="20"/> ****INFORMAÇÃO****

> Só é possível importar `CSS Global` dentro de `pages/_app.js`, já que afeta todos os elementos da página

### **ADICIONANDO CSS GLOBAL**

1. Crie um diretório na raiz do projeto `styles`
2. Crie o arquivo `global.css` dentro do diretório `styles`
3. Agora, em `styles/global.css` adicione o seguinte códiogo `CSS`

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

4. Agora vamos importar este arquivo para dentro de `pages/_app.js`

```js
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```
<img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="60"/>

Tudo ocorrendo bem, deve estar vendo uma pequena mudança no estilo das páginas

### **POLIMENTO DE LAYOUT**

Agora devemos polir o estilo e o código de nossa página

### *1. ATUALIZAR* `components/layout.module.css`

Susbstitua o código existente por este

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backToHome {
  margin: 3rem 0 0;
}
```

### *2. CRIAR* `styles/utils.module.css`

Crie com o seguinte conteúdo

```css
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}
```

### *3. ATUALIZAR* `components/layout.js`

Vamos criar uma pasta para imagens dentro da pasta public e colocar uma imagem jpg com nome `perfil.jpg`

`public/image/profile.jpg`

Abra `components/layout.js` e cole o código abaixo
Também mude a `const name = 'Seu Nome'`

```jsx
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const nome = 'Patrick Kottwitz'
export const tituloDoSite = 'Website Exemplo Next.js'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="descrição"
          content="Aprender como construir um website pessoal com Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            tituloDoSite
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={tituloDoSite} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/image/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={nome}
            />
            <h1 className={utilStyles.heading2Xl}>{nome}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/image/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={nome}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{nome}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Voltar para home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
```

<img  src="https://image.flaticon.com/icons/png/128/891/891447.png"  alt="new"  width="20"/> ****NOVIDADES****

> `og:image` é uma `meta tag` utilizada para descrever o conteúdo de uma página
> `home` um Prop booleana que irá ajustar o tamanho do título e da imagem
> Link `Voltar para home` se `home` for `false` (`{!home && (...)}`)
> Imagens adicionadas com `next/image`, são pré-carregadas com atributo de `priority`

### *ATUALIZAR* `pages/index.js`

Por fim, atualizaremos a página `pages/index.js` substituindo a conteúdo existente pelo seguinte

```jsx
import Head from 'next/head'
import Layout, { tituloDoSite } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{tituloDoSite}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Sua Própria Introdução]</p>
        <p>
          (Este é um website exemplo - você pode construir um site como este no{' '}
          <a href="https://nextjs.org/learn">nosso tutorial Next.js</a>.)
        </p>
      </section>
    </Layout>
  )
}
```

Atualize `[Sua Própria Introdução]` com sua apresentação e pessoal e pronto

<img  src="https://image.flaticon.com/icons/png/128/2809/2809495.png"  alt="testing"  width="60"/>

---

Agora seguimos para a Pré-renderização e busca de dados, clicando no link abaixo

---

### [` << Início `](../README.md) | [` Pré-renderização e busca de dados >> `](03-PRE.md)

 02 

