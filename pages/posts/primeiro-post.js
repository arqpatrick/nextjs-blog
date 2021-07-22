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