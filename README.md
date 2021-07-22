# 1. CRIAR O DIRETÓRIO E O PROJETO
```
mkdir 'nomedodiretorio'
cd 'nome do diretório'
```
## A. INICIAR A APLICAÇÃO
Utilizei o exemplo de blog do NextJS
Dentro do diretório cirado, executar o comando:
```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```
Abrir o VSCode
```
code .
```
## B. CRIAR UM REPOSITÓRIO GIT
Estou utilizando o GitHub

>Ir até a conta Github
>github.com/"usuario"?tab=repositories

Criar um Novo Repositório (NEW)
>Dar um nome para o repositório (Repository Name)
>Create repository

Utilizei o nome "nextjs-blog"
Então o repositório no meu caso ficou
>github.com/"usuario"/nextjs-blog

A tela mostra um passo-a-passo de como criar o repositório

## C. LINKAR O REPOSITÓRIO AO PROJETO
Dentro do VSCode, teclar [CTRL+~] para abrir o TERMINAL dentro do VSCode
Agora é seguir os passos do próprio Github

Começamos com:
```
echo "# nextjs-blog" >> README.md
```
Vai criar um arquivo README.md
>Esse arquivo fica na página inicial do repositório.
>O ".md" é de Markdown, uma linguágem de marcação, muito utilizado em arquivos README, LEIA-ME, ABOUT, etc.. 

Próximo passo:
```
git init
```
Esse comando criou um diretório [.git] dentro da pasta do projeto

Agora:
```
git add README.md
```
Abrimos o arquivo README.md pelo TERMINAL para editar.
O que for escrito no terminal a partir de agora vai ser adicionado ao README.md

```
git commit -m "first commit"
```
Demos o primeiro "commit"

Agora:
```
git branch -M main
```
Próximo:
```
git remote add origin https://github.com/"usuario"/nextjs-blog.git
```
Esse comando gravou para qual repositório do github esse projeto será enviado

E finalmente o "push" para enviar o projeto
```
git push -u origin main
```
Agora nosso projeto foi adicionado ao Github
Pode ser acessado pela URL github.com/"usuario"/nextjs-blog

### C.I. Atualizar o respositório

Depois de ter criado o Respositório, para atualizar ele os comandos são mais simples

No próprio VSCode podemos fazer os próximos commits de forma gráfica (não por código)

Pressionando [CTRL+SHIFT+G] e depois [G] vamos ir para a aba "Source Control"
Nessa aba é só digital a "Message", que será o próximo commit e clicar no simbolo de Ok (Commit)

Pronto! Esse novo update foi "comitado"

Agora basta dar um "push"
```
git push -u origin main
```
Simples =)

# 2. INICIAR O SERVIDOR (local)
Para inicar o servidor local, dentro do terminal, qualquer terminal, desde que estja dentro do diretório correto, o comando é o mesmo
```
npm run dev
```

Por escolha e por achar mais prático, vou continuar utilizando o TERMINAL do VSCode [CTRL+~]
```
npm run dev
```
Esse comando faz o seguinte:

npm
>O gerenciador de pacotes JS (JavaScript)

run
>Executar [run]

dev
>Dentro do package.json, no diretório do projeto, o script diz que [dev] executa ["next dev"]
>Por "baixo dos panos" o NextJS faz a mágica e abre o servidor local

### IMPORTANTE!
Para fechar o SERVIDOR LOCAL, tecle [CTRL+C]
