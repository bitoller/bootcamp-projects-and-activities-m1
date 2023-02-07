Atividade- ClassList - Passo a passo

Nesta atividade você irá treinar os conceitos vistos na aula anterior sobre classList

Atividade- Acende e apaga
Vamos desenvolver um interruptor. A lâmpada do ambiente está apagada, devemos conseguir acende-la, mas tornando possível apagá-la novamente.

Resolvendo o problema
Primeiro e como de costume vamos criar nosso projeto com os arquivos; .Css, .Js e .Html

No nosso html nós criaremos uma div com uma classe de nome off. Também é necessário definirmos um id para esta div. 
No nosso arquivo css, colocaremos uma cor de fundo em nosso body. Vamos também adicionar algumas propriedades para que nossa imagem fique no centro de maneira horizontal.

<!-- body {
display: flex;
align-items: center;
justify-content: center;
background-color: #303e73;
} -->

Agora precisamos adicionar algumas propriedades na nossa div onde a lâmpada será exibida.

<!-- #space_lamp {
width: 400px;
height: 500px;
background-repeat: no-repeat;
} -->

Deixamos assim as dimensões de nossa div, e como utilizaremos background-image e por padrão ele é repeat, setamos a propriedade no-repeat.
Ainda no css vamos editar as classes que sofrerão a alternância, definindo um estado para quando a lâmpada estiver apagada e um estado para quando a lâmpada estiver acesa. Ou seja, vamos alternar a imagem que está sendo exibida.

<!-- .off {
    background-image: url("./img/off_bulb.svg");
  }
.on {
    background-image: url("./img/on_bulb.svg");
  } -->

Executando esta página no Browser, temos nossa estrutura pronta, mas agora precisamos criar o efeito de acender a apagar com o click do mouse.


No nosso aquivo js, utilizaremos o seguinte código:

<!-- document.addEventListener("click", (event) => {
const space_lamp = document.getElementById("space_lamp");
const id = event.target.id;

if (id == space_lamp.id) {
  if (space_lamp.classList.contains("off")) {
    space_lamp.classList.add("on");
    space_lamp.classList.remove("off");
  } else {
    space_lamp.classList.add("off");
    space_lamp.classList.remove("on");
  }
}
}); -->

Aqui nós estamos escutando o evento de click, após disparar o evento, verificamos se este clique está ocorrendo na lâmpada, se sim o id será igual ao da nossa div que possui a lâmpada.

Verificamos em seguida se a lâmpada está apagada, se, a classe for off, ela está apagada. Alternamos nossas classes, removendo a imagem da lâmpada apagada, manipulando a classe por meio de classlist, e adicionando a lâmpada acesa.

Desafio
Agora, reproduza este código usando uma forma alternativa de alternância passado em aulas anteriores