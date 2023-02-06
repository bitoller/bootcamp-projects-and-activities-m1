Atividade | Lista de Atividades - Funções: Praticando com funções

Introdução
Nesta lista, você desenvolvera seus conhecimentos sobre funções. Aqui definiremos pequenas rotinas e funcionalidades.

Para te ajudar a começar, temos um exercício resolvido.

Exercício:

Você trabalha no T.I de uma academia, e para ajudar na hora da avaliação dos alunos, foi lhe pedido um sistema para calcular o IMC.

Escreva uma função que receba a altura, peso e alerte o IMC, do aluno em tela.

Resolução:

1º Forma
Consiste, em criar a função com a lógica interna e a iteração com usuário externa a função.

<!-- function calcImc(altura, peso){
    let imc = peso / (altura * altura)
    alert(imc.toFixed(2))
}

let peso = parseFloat(prompt("Digite o peso"))
let altura  = parseFloat(prompt("Digite a altura"))

calcImc(altura, peso) -->

2º Forma
Encapsular tudo na função. Desta forma você consegue controlar melhor o que será renderizado no browser, basta comentar a chamada da função e partir para o próximo exercício.

<!-- function calcImc(){
    let peso = parseFloat(prompt("Digite o peso"))
    let altura  = parseFloat(prompt("Digite a altura"))
    
    let imc = peso / (altura * altura)
    alert(imc.toFixed(2))
}


calcImc()// -> Chamada da função.  -->

⁠Exercício 1
Escreva uma função que leia um número inteiro e imprima-o na saída.

Exemplo:
Entrada: 10
Saída: 10

Exercício 2
Escreva uma função que recebe três números inteiros e exiba a soma destes números.

Exemplo:
Entrada: 2,3,4
Saída: 9⁠

Exercício 3
Escreva uma função recebe duas notas semestrais inteiras e exiba a média anual, dada em 12 meses.

Realize a soma das duas notas, e a divisão por 12 para obter o resultado. Use o método toFixed() para tratar a informação.

Exemplo:
Entrada: 15,20
Saída: 2.91

Exercício 4
Escreva uma função que receba dois números inteiros e exiba o resto da divisão do primeiro pelo segundo.

Caso não haja resto, alerte: "Esta é uma divisão exata".

Caso haja, alerte: "Esta é uma divisão inexata e o resto é x"

Exemplo:
Entrada: 11,2
Saída: "Esta é uma divisão inexata e o resto é 1" .

Exercício 5
Escreva uma função que recebe um número inteiro e alerte o seu quadrado.

Desta forma: "O quadrado de x é xx"

Exemplo:
Entrada: 2
Saída: "O quadrado de 2 é 4"

Exercício 6
Escreva uma função que recebe quatro números e alerte a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.

Cálculo do peso: PESO X NOTA

Alerte a média, desta forma: "A média ponderada, é: x"

Exemplo:
Entrada: 1,2,3,4
Saída:"A média ponderada, é: 3 "

⁠Cálculo:

Média poderada:

<!-- mp = (1 * 1) + (2 * 2) +(3 * 3) + (4 * 4) / 1+2+3+4 -->

mp = 30/10

mp = 3

Soma das notas, com o cálculo dos pesos / soma dos pesos.

Exercício 7
Escreva uma função que recebe as notas de quatro provas de um concurso: Matemática, Português, Conhecimentos Gerais e Informática.

Calcule e exiba a média ponderada tendo Matemática como peso 2, para as demais notas considere 1 como peso.

Alerte a média com o seguinte formato: "A média ponderada é de: x"

Exemplo:
Entrada: 7(Matemática), 5(Português), 10(Conhecimentos Gerais), 8(Informática.)
Saída: "A média ponderada é de: 7.4"

Cálculo:

Média poderada:

<!-- mp = (2*7) + 5 + 10 + 8 / 2 + 1 + 1 + 1 -->

mp = 37/5

mp = 7.4

⁠Soma das notas, com o cálculo dos pesos / soma dos pesos.

Exercício 8
Escreva uma função que recebe o saldo de uma aplicação e alerte o novo saldo, considerando o reajuste de 3%.

Alerte o valor reajustado da seguinte forma: "O novo salário é de: x"

Exemplo:
Entrada: 1100.00
Saída: "O novo salário é de: 1133,00"

Exercício 9
Escreva uma função que calcule a área de um triângulo.
Data a função: A = (b . h)/2.

Onde Área é A, b é base h é a altura.
Solicite, estes dados ao usuário.

Alerte a área calculada, desta forma: "A área do triângulo é: x"

Exemplo:
Entrada: 10(base), 6(altura)
Saída: "A área do triângulo é: 30"


Esses exercícios, não são novidades para você, mas o contexto do desenvolvimento agora é baseado em funções.