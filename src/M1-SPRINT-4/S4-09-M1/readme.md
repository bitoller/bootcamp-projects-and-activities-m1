<h1>JavaScript - Acerte o número.</h1>

<h3>Introdução</h3>
Você foi convidado para desenvolver uma aplicação que consiste em gerar um número aleatório e cada participante tentar adivinhar.

Você deverá desenvolver as funcionalidades desta aplicação seguindo alguns passos.

Desenvolva uma função chamada gerarNumeroAleatorio(). Esta função não recebe parâmetros.

A função deve retornar um número aleatório quando chamada.

Para gerar um valor aleatório utilize o Math.random(). O valor gerado deverá ser um inteiro positivo até 20.

Atenção: lembre-se que o Math.random(), gera números flutuantes, o que vai dificultar os teste, caso não trate. Use algum método para fazer o arredondamento para um inteiro mais próximo.

Desenvolva uma função chamada verificarPalpite(). Esta função irá receber um número aleatório e o valor dado como palpite.

Na função verificarPalpite(), você deverá criar uma variável tentativa iniciando em 1.

Defina um laço while que deve verificar se o numeroAleatorio é igual ao valor do palpite. Para cada iteração no escopo do laço a variável tentativa deverá ser incrementada em +1.

Enquanto o palpite estiver incorreto, alerte: "Tente novamente".

Caso o palpite esteja certo, alerte: "Você acertou na tentativa x."

Desenvolva uma variável chamada numeroAleatorio para armazenar o retorno da função gerarNumeroAleatorio().

Desenvolva uma variável para armazenar o palpite do usuário. Use o prompt, como de costume, pegando somente inteiros positivos.

Chame a função verificarPalpite() passando o numeroAleatorio e o palpite.
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
