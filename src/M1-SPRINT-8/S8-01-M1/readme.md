Projeto - Projeto Front End.
Tópicos do conteúdo
Implementando Layout
Introdução
Nesta entrega construiremos o layout de um e-commerce. Seguiremos um style guide, usaremos HTML e CSS. Vamos ao desafio?

Teremos como base este <a href="https://drive.google.com/file/d/11L3bBxA0dO6BYUWegDS-mZg52KFM1NMe/view" target="_blank">Style Guide</a>.

Tarefa
Primeiramente recomendamos que você analise o layout e o style guide.

Não tenha pressa de conhecer o projeto antes de partir para ação! Após a análise comece estruturando o HTML.

Utilize todos os recursos que aprendeu até aqui: tags semânticas, propriedades em CSS, reset e/ou normalize e dicas de boas práticas!

Tema
No layout apresentamos um e-commerce de vestuário, mas você pode definir um tema de sua preferência, como de jogos, pet shop, perfumarias, ou qualquer outro tema que te interesse.

Estilização
O style guide deve ser seguido, mas você terá liberdade para aprimorar como quiser. Você pode adicionar ícones, hover e etc.

Passo a Passo

Organização
Começaremos com a estilização e construção da estrutura da aplicação. Trabalhemos inicialmente no HTML e construção das tags semânticas, imagens e distribuição de conteúdo, como foi visto durante o módulo. Construiremos toda a parte de fontess, cores e posicionamento nesse momento, tentando nos aproximar ao máximo do que está na definição do projeto.

Aqui vamos nos concentrar apenas na criação do estilo, por enquanto sem funcionalidades.

Header → Com sua logo, e seus botões de navegação, configurados como demonstrado no layout em pdf.
Vitrine → Espaço onde ficarão os cards de produtos e todas as suas informações
Card → Criação dos cards como demonstrado acima com suas respectivas informações com título, foto, descrição, preço e um botão de adicionar ao carrinho.
Barra de pesquisa → Com um input para colocar texto e um botão para pesquisar.
Carrinho de compras → Criação do local onde serão colocados os produtos, iniciando vazio.
Estilização e alinhamento como demonstrado no layout.

Dinamizando com o DOM

Passo a Passo
Chegou a hora de tornarmos as coisas mais dinâmicas.

Focaremos na inteligência da página, com o DOM, faremos todos os itens funcionarem de forma específica como demonstrado abaixo.

Vitrine → Espaço onde ficarão os cards de produtos e todas as suas informações
Card → Todos os cards devem ser criados de forma dinâmica, ou seja, criados e atribuídos à vitrine pelo DOM, além do botão de compra funcional e adicionando o produto ao carrinho.
Carrinho de compras → Deverá ser possível adicionar e remover produtos do carrinho por meio do DOM. O carrinho deverá fazer a contagem total dos itens, assim como apresentar o valor total da compra.
Estilização e alinhamento como demonstrado no layout em PDF.

Quer se desafiar?
Tente implementar os itens abaixo:
Lembre-se que são elementos não obrigatórios e que tem uma dificuldade elevada.

Header → Demonstrar os elementos na vitrine conforme o tipo clicado no header, por padrão iniciar em todos.
Exemplos:
Caso clique em calças, deve demonstrar apenas os produtos que tenham a tag calças na vitrine.
Caso clique em camisetas, deve demonstrar apenas os produtos que tenham a tag camisetas na vitrine.
Barra de pesquisa → Demonstrar os produtos na vitrine conforme o que for escrito na barra de pesquisa
Exemplos:
Caso digite Black Hat, deve demonstrar apenas os produtos que tenham no nome Black Hat na vitrine.
Caso digite Shirt, deve demonstrar apenas os produtos que tenham no nome Shirt na vitrine.