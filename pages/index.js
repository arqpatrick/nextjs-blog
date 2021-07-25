import Head from 'next/head'
import Layout, { tituloDoSite } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
//------------
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}
//--------------

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{tituloDoSite}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Sua Própria Introdução]</p>
//         <p>
//           (Este é um website exemplo - você pode construir um site como este no{' '}
//           <a href="https://nextjs.org/learn">nosso tutorial Next.js</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }

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