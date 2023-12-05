# Meiuca DS Challenge

# Instruções para rodar o projeto

## Pré-requisitos:

Certifique-se de ter o Node.js instalado em sua máquina. (versão do node utilizada: v18.17.0)

## Passo a Passo:

Abra o terminal e navegue até o diretório do projeto.

Execute o seguinte comando para instalar as dependências:

```
npm install
```

Execute o comando para rodar o ambiente de desenvolvimento Vite:

```
npm run dev
```

Este comando iniciará o servidor de desenvolvimento e você poderá acessar o aplicativo em `http://localhost:3000`

---

Abaixo segue alguns tópicos relacionados ao raciocínio e decisões utilizados durante o processo de desenvolvimento.

# Decisões:

- O ideal é que um DS seja um projeto separado e considerado uma lib de UI/UX. Por exemplo publicar ele como um pacote no npm para que seja possível importar ele nos projetos que você ou o time deseja. Neste desafio eu tomei a decisão de fazer a página de News dentro do repositório do DS. Como disse acima o ideal é ter dois projetos separados, cada um em um repositório e assim importar o DS como uma dependencia do projeto.
- Eu decidi utilizar o react, apesar de possuir domínio em Angular, decidi usar o react para ajudar a reforçar alguns aprendizados que obtive nesses ultimos meses. Existem algumas situações que o DS precisa ser agnóstico a framework. Isso é possível utilizando o StencilJS (https://stenciljs.com/). Com o StencilJS você desenvolve o DS e consegue exportar como web components e assim utilizar em qualquer um dos frameworks/libs web que você e sua equipe trabalham.
- Utilizei o typescript para melhorar a organização, confiabilidade e manutenção dos projetos em JS.
- Decidi alterar a variavel de cor que está sendo indicada no figma para ficar visualmente semelhante ao botao também exibido no figma
  (de $brand-color-primary-2 para ...primary-5)
- Para o Heading e Subtitle levei em consideração que pode existir mais de um tamanho, por conta disso adicionei a prop `size`. Porém como no figma só tem o tamanho small, considerei ele como default e não criei mais nenhuma variação.
- A mesma lógica foi aplicada no componente button. Já que comumente se utiliza algumas variações como primary, secondary e etc.
- Algumas variáveis no figma estão desatualizadas com o json enviado, por conta disso tomei a decisão de escolher outras variáveis que faziam sentido de acordo com o layout no figma (exemplo: padding do shape 40px, cor da borda do shape $neutral-color-2)
- No componente `<Heading>` optei por usar a tag `<H2>` já que o card pode ser utilizado e renderizado várias vezes na mesma página. Em uma página é boa prática ter apenas um `<H1>` (Referencia: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page).
- O React está rodando em strict mode. Por conta disso, no ambiente de dev, ele acaba gerando uma duplicação das chamadas de API (https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects#fetching-data). Não se assuste ao visualizar requests duplicados. :)
- O componente `<Button>` poderia ter a possibilidade de ser uma tag `<button> ou <Link>` (em casos de SEO é importante manter a semântica e também para evitar que o usuário ao clicar em um link carregue todo o site novamente) mas optei por manter a lógica do component simples considerando uso dentro de um site simples

---

# Raciocínio:

- Analisar o problema proposto no teste.
- Pesquisar materiais da Meiuca falando sobre DS e analisar a perspectiva de construção e concepção de DS deles (exemplo de referencia: https://medium.com/meiuca/1-design-system-na-vis%C3%A3o-da-meiuca-cc0d67aa8d1b)
- Decidir qual tecnologia utilizar
- Criar a base do projeto e o primeiro componente
- Analisar como será a organização de pastas.
- Entender como fazer a leitura dos tokens.
- Leitura documentação Style Dictionary
- configuração e geração do build das variáveis de scss utilizando a lib do Style Dictionary
- Desenvolver os componentes
- Desenvolver página consumindo API do Google e renderizando as notícias utilizando componente `<CardContent>`

---

# Otimizar manutenção e qualidade

Alguns pontos que considero importante:

- Ao analisar os requisitos e materiais do teste já é possível obter uma boa condição para otimizar e manter o DS. Utilizar ferramentas como Figma, Style Dictionary e Storybook ajuda a manter as equipes envolvidas alinhadas com relação a definições.
- Falando em definições, apesar de usar as ferramentas acima, é importante que manter os tokens e toda documentação atualizada. Isso pode evitar eventuais inconsistencias entre os projetos e as definições de design da empresa.
- É importante manter uma boa comunicação entre o DS e os outros times. Sempre que possível colher feedbacks dos devs que estão utilizando o DS. Outra dica importante é acompanhar o uso do DS e colher métricas para tomar decisões mais acertivas.
- Outras ferramentas importantes é utilizar ESLint e Prettier para apoiar no dia a dia da manutenção e criação de novos componentes. Ajudando assim a manter a padronização do código.
- Para ajudar na consistencia do DS é importante criar testes automatizados dos componentes. Assim é possível garantir que ao adicoinar novos componentes ou corrigir algo o DS não corre risco de quebrar.
- Incluir o code review no processo de desenvolviemnto do time do DS também é muito importante.

Esses são alguns pontos que considero importante. O DS assim é um projeto vivo que precisa constantemente adicionar novos componentes ou ajustar os que já existem. Então é importante seguir essas regras para garantir a manutenibilidade e consistencia
