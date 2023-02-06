Atividade Algoritmos - Lista de Exercícios

Para concluir os exercícios a seguir, você deverá fazer uso do prompt() e do alert() para receber os valores e exibir os resultados, respectivamente.

Exemplo
Leia dois números inteiros, a e b, e faça com que eles troquem os valores entre si. Exiba os valores de a e b.

Resolução

<!-- let a = parseInt(prompt("Insira um valor para a"))
let b = parseInt(prompt("Insira um valor para b"))
let aux = 0
aux = a
a = b
b = aux
alert(`Os valores originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`) -->

Aqui no exemplo usamos uma lógica de troca, onde armazenamos o valor da variável que queremos trocar em uma variável auxiliar, para que o valor não seja perdido. Também usamos o parseInt, para restringir a entrada a números inteiros.

Aviso
O exercício acima é a base para resolução dos próximos. Não precisa retornar nada no console. Não precisa inicializar as variáveis com valores atribuídos diretamente ao código, a não ser que seja necessário para a conclusão da lógica.

O foco aqui é a lógica, mas será inevitável em alguns momentos ter que manipular alguns resultados. Então aqui vão dicas valiosas:

parseInt()

<!-- let numero = parseInt(prompt('Número')) -->

Para receber números inteiros no prompt use o parseInt()

parseFloat()

<!-- let numero = parseFloat(prompt('Número')) -->

Para receber números com casas após a vírgula (números de ponto flutuante) no prompt use o parseFloat()

toFixed()

<!-- let resultado = 1 / 8 //0.125 valor da divisão 
alert(`O resultado é: ${resultado.toFixed(2)}`)
//0.13 é o valor retornado. O tofixed faz o arredondamento, se necessário.  -->

Você pode restringir o número de casas decimais usando o toFixed(), deixando apenas o número de casas decimais que achar conveniente para o entendimento.

Exercício 1
Leia um número inteiro e imprima-o na saída.

Exercício 2
Leia três números inteiros e exiba a soma destes números.

Exercício 3
Leia duas notas semestrais inteiras e exiba a média anual.

Exercício 4
Leia um número inteiro e exiba o resto da divisão deste número por 2.

Exercício 5
Leia um número inteiro e imprima o seu quadrado.

Exercício 6
Entrar com quatro números e imprimir a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.

Exercício 7
Leia as notas de quatro provas de um concurso: Matemática, Português, Conhecimentos Gerais e Informática. Calcule e exiba a média ponderada, tendo Matemática com peso 2.

Exercício 8
Leia dois números inteiros (dividendo e divisor, respectivamente) e exiba a divisão, a divisão inteira e o resto da divisão destes números.

Exercício 9
Fazer um algoritmo que possa entrar com o saldo de uma aplicação e ele imprima o novo saldo, considerando o reajuste de 1%.

Exercício 10
Construir um aplicativo que calcule a área de um losango. Identificar quais serão as entradas necessárias.
