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

<img  src="https://image.flaticon.com/icons/png/128/841/841539.png"  alt="lupa/loupe"  width="20"/> ****DICA!****
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

---


<div style="text-align: center">

### [` << Início `](../README.md) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [` Ativos, metadados e CSS >> `](docs/02-CSS.md)

</div>


<div style="text-align: right"> 02 </div>

