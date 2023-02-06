Desafio: Aprovado reprovado

Você foi contratado para desenvolver um algoritmo que consiga identificar se um aluno foi ou não aprovado.

Para o aluno ser aprovado, a média da nota total deve estar acima de 8 e a presença deve estar acima de 6.

Desenvolva um algoritmo que leia:
matéria, nome, nota e a presença de um aluno.

As notas de cada matéria varia de 0 a 10. Armazene cada informação em uma variável, nome e presença serão solicitados somente uma vez.

Nota e matéria serão solicitados ao usuário mais de uma vez, então você deverá receber estes valores em variáveis diferentes, ou seja, uma variável para cada matéria e uma variável para cada nota.

Exemplo

materiaGeografia
notaGeografia

Some todas notas e atribua a uma variável somaNota.

Tire a média das notas e atribua a variável uma mediaNota. Verifique se a média está acima ou abaixo de 8.

Nota e presença não podem ser 0

Nome deve ter no mínimo 5 carácteres

Instruções para o desenvolvimento
Se a entrada for de um número abaixo de 0 ou acima de 10, para nota ou presença, alertar que o valor é inválido
Se nome tiver menos que 5 carácteres, alertar que o nome é inválido
Se a média de notas do aluno for igual ou acima de 8 e a presença igual ou acima de 6 deve alertar:

A nota do aluno nome é de mediaNota e sua presença de presenca: Aluno provado!

Caso contrário:

A nota do aluno nome é de mediaNota e sua presença de presenca: Aluno reprovado!

Matéria	Nota
Matemática	10
Português	8
Informática	10
Geografia	10
Inglês	9
História	9
Filosofia	10
Sociologia	8
Literatura	10
Educação Física	7

Dica!
Não se preocupe com a tabela, você não precisa retornar nada na tabela, apenas no alert. Ela pode ser a base para os seus testes.

Usando a tabela acima como base para teste, reproduzindo as notas deste aluno, deveremos ter a seguinte saída.

A nota do aluno kenzie é de 9.1 e sua presença de 9: Aluno aprovado!

Lembrando que o nome e a presença foram digitados pelo, o usuário.

Dica!
Para desbloquear
Você pode criar as variáveis com prompt da seguinte maneira.

<!-- let nome = prompt("Entre com o nome do aluno")
let materia1 = prompt("Digite a materia")
let nota1 = parseFloat(prompt("Qual a nota?"))
let presenca = parseInt(prompt("Qual a presença?")) -->