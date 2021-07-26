import Head from 'next/head'
import Layout, { tituloDoSite } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
//------------
import { pegarDadosDePostagensClassificadas } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = pegarDadosDePostagensClassificadas()
  return {
    props: { allPostsData }
  }
}

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