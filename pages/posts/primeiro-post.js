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