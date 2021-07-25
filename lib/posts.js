import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const diretorioDePosts = path.join(process.cwd(), 'posts')

export function pegarDadosDePostagensClassificadas() {
  // Pegar o nome dos arquivos dentro de /posts
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