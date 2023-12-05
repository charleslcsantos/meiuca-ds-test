# Raciocínio:

- Analisar o problema proposto no teste.
- Pesquisar materiais da Meiuca falando sobre DS e analisar a perspectiva de construção e concepção de DS deles (exemplo de referencia: https://medium.com/meiuca/1-design-system-na-vis%C3%A3o-da-meiuca-cc0d67aa8d1b)
- Decidir qual tecnologia utilizar
- Criar a base do projeto e o primeiro componente
- Entender como fazer a leitura dos tokens.
- Leitura documentação Style Dictionary
- configuração e geração do build das variáveis de scss utilizando a lib do Style Dictionary
- Desenvolver os componentes
- Desenvolver página consumindo API do Google e renderizando as notícias utilizando componente `<CardContent>`

---

# Decisôes:

- Decidi alterar a variavel de cor que está sendo indicada no figma para ficar visualmente semelhante ao botao também exibido no figma
  (de $brand-color-primary-2 para ...primary-5)
- Para o Heading e Subtitle levei em consideração que pode existir mais de um tamanho, por conta disso adicionei a prop `size`. Porém como no figma só tem o tamanho small, considerei ele como default e não criei mais nenhuma variação.
- A mesma lógica foi aplicada no componente button. Já que comumente se utiliza algumas variações como primary, secondary e etc.
- Algumas variáveis no figma estão desatualizadas com o json enviado, por conta disso tomei a decisão de escolher outras variáveis que faziam sentido de acordo com o layout no figma (exemplo: padding do shape 40px, cor da borda do shape $neutral-color-2)
- No componente `<Heading>` optei por usar a tag <H2> já que é usado o card é renderizado várias vezes. Em uma página é boa prática ter apenas um <H1>. (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page)
- O React está rodando em strict mode. Por conta disso, no ambiente de dev, ele acaba gerando uma duplicação das chamadas de API (https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects#fetching-data)
- O componente `<Button>` poderia ter a possibilidade de ser uma tag `<a> ou <Link>` (em casos de SEO é importante manter a semântica) mas optei por manter a lógica do component simples considerando uso dentro de um SPA

---

# Otimizar manutenção e qualidade

Alguns pontos que considero importante:

- Ao analisar os requisitos e materiais do teste já é possível obter uma boa condição para otimizar e manter o DS. Utilizar ferramentas como Figma, Style Dictionary e Storybook ajuda a manter as equipes envolvidas alinhada com relação a definições.
- Falando em definições, apesar de usar as ferramentas acima, é importante que manter os tokens e toda documentação atualizada. Isso pode evitar eventuais inconsistencias entre os projetos e as definições de design da empresa.
- É importante manter uma boa comunicação entre o DS e os outros times. Sempre que possível colher feedbacks dos devs que estão utilizando o DS. Outra dica importante é acompanhar o uso do DS e colher métricas para tomar decisões mais acertivas.
- Outras ferramentas importantes é utilizar ESLint e Prettier para apoiar no dia a dia da manutenção e criação de novos componentes. Ajudando assim a manter a padronização do código.
- Para ajudar na consistencia do DS é importante criar testes automatizados dos componentes. Assim é possível garantir que ao adicoinar novos componentes ou corrigir algo o DS não corre risco de quebrar.
- Incluir o code review no processo de desenvolviemnto do time do DS também é muito importante.

Esses são alguns pontos que considero importante. O DS assim é um projeto vivo que precisa constantemente adicionar novos componentes ou ajustar os que já existem. Então é importante seguir essas regras para garantir a manutenibilidade e consistencia
