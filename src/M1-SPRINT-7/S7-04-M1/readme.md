Atividade - Praticando Objeto Evento

Crie um elemento com base no objeto produto. Produto possui as seguintes propriedades:

<!-- let produto = {
  nome: 'Notebook',
  valor: 3000.00,
  liquidacao: true,
  distribuidor: 'lojadakenzie.com.br'
} -->

Use o elemento li para renderizar o objeto e suas propriedades podem estar em spans.

A propriedade distribuidor, deverá estar em um elemento de âncora, mas cuidado, o link não deverá levar o usuário para outra página quando a propriedade liquidação estiver como true.

Quando o card do produto for clicado sobre o span de liquidação, uma mensagem deverá ser renderizada em tela com o preço real do produto. O preço real é dado pelo cálculo:
valor * 0.3 - valor

O valor de desconto é de 30% quando o produto estiver em liquidação.

A mensagem só deverá aparecer, se o usuário tiver clicado sobre o span de liquidação.

Perceba que a informação se o produto está ou não em liquidação é criada de forma dinâmica a partir de uma condição, se a propriedade liquidação é true ou false

Uma base interativa para ilustrar o proposto. Clique aqui

Pode testar clicando sobre a frase 'Em liquidação'.

Links!
O layout acima, é apenas uma sugestão. Não precisa se preocupar em fazer igual.

O importante desta atividade é fazer com você consiga compreender a comunicação das funcionalidades do Js: DOM em conjunto com o Html e Css

Que efeito é esse ?
O efeito acima é conhecido como toggle e existem diversas formas de se fazer.

Aqui vou dar um exemplo de como podemos criar de forma manual.

Primeiro crie seu html com o seguinte código:

<!-- <div class="container">
  <h1>O elemento mais interno ainda não foi clicado</h1>
  
  <p class="infomacao">
  </p>  
  
  <p class="aqui_dispara">
      Clique aqui
  </p>
</div> -->

No arquivo JS o primeiro passo é selecionarmos os elementos que queremos manipular.

<!-- let element = document.getElementsByClassName("container")[0];
let elementInformado = document.getElementsByClassName("infomacao")[0]; -->

Vamos manipular somente o nosso container que é div pai de todos outros elementos, e o paragrafo que vamos usar como um botão.
Vamos adicionar um evento no nosso elemento pai e vamos usar a propriedade target para verificar onde estamos clicando.

Lembrando que o target pega o elemento da origem do evento.

<!-- element.addEventListener("click", function (e) {
    let elementoCapture = e.target.className;
  } -->

o valor da minha variável elementoCapture vai ser sempre a classe do elemento que estiver clicando, mas eu quero uma classe específica.
Agora vamos realizar os testes.

Dentro do nosso evento de escuta e abaixo da captura do elemento vamos adicionar nosso teste.

Vamos verificar qual elemento está sendo clicado e se o teste atender a condição, nós realizamos a manipulação.

<!-- if (elementoCapture == "aqui_dispara") {
  if (elementInformado.children.length === 0) {
    elementInformado.innerHTML = "Sou um toggle";
  } else {
    elementInformado.innerHTML = "";
  }
} -->

Verifico se a classe é a que eu espero. Verifico com o .children, se o elemento possui filhos. Se o elemento tiver filho, significa que existe um elemento mais interno, se não o elemento está limpo.

Estando limpo eu crio um span e dentro deste span eu adiciono a frase que quero jogar para a tela. Não estando limpo eu forço uma limpeza, para dar o efeito de aparece e esconde.

A prática de limpar o html é essencial, dependendo da aplicação. Se não usarmos o .inneHtml = "".

Os span's vão se multiplicar a cada clique.