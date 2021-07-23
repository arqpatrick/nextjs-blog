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