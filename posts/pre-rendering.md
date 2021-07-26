---
titulo: 'Duas formas de Pré-renderização'
dia: '25-07-2021'
---

O Next.js tem duas formas de pré-renderização: **Geração Estática** e **Renderização do lado do servidor**. A diferença é **quando** é gerado o HTML da página.

- **Geração Estética** é o método de pré-renderização que irá gerar o HTML no **tempo de build**. A HTML pré-renderizado então é _reusado_ em cada requisição.
- **Renderização do lado do servidor** é um método de pré-renderização que irá gerar o HTML em **cada requisição**.

Importante, o Next.js deixa você **escolher** qual forma de pré-renderizaçãon usar para cada página. Você pode criar um aplicação Next.js "híbrida", utilizando Geração Estática para a maioria das páginas e Renderização do lado do servidor para outras.
