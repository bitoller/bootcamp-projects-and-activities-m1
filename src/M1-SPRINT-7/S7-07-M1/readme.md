<h1>Atividade- ClassList - Passo a passo</h1>

Nesta atividade você irá treinar os conceitos vistos na aula anterior sobre classList

<h3>Atividade- Acende e apaga</h3>
Vamos desenvolver um interruptor. A lâmpada do ambiente está apagada, devemos conseguir acende-la, mas tornando possível apagá-la novamente.

<h4>Resolvendo o problema</h4>
Primeiro e como de costume vamos criar nosso projeto com os arquivos; .Css, .Js e .Html

No nosso html nós criaremos uma div com uma classe de nome off. Também é necessário definirmos um id para esta div.  
No nosso arquivo css, colocaremos uma cor de fundo em nosso body. Vamos também adicionar algumas propriedades para que nossa imagem fique no centro de maneira horizontal.

Agora precisamos adicionar algumas propriedades na nossa div onde a lâmpada será exibida.

Deixamos assim as dimensões de nossa div, e como utilizaremos background-image e por padrão ele é repeat, setamos a propriedade no-repeat.  
Ainda no css vamos editar as classes que sofrerão a alternância, definindo um estado para quando a lâmpada estiver apagada e um estado para quando a lâmpada estiver acesa. Ou seja, vamos alternar a imagem que está sendo exibida.

Executando esta página no Browser, temos nossa estrutura pronta, mas agora precisamos criar o efeito de acender a apagar com o click do mouse.

Verificamos em seguida se a lâmpada está apagada, se, a classe for off, ela está apagada. Alternamos nossas classes, removendo a imagem da lâmpada apagada, manipulando a classe por meio de classlist, e adicionando a lâmpada acesa.

<h4>Desafio</h4>
Agora, reproduza este código usando uma forma alternativa de alternância passado em aulas anteriores
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
