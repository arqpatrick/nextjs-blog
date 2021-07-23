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