Atividade - JavaScript: Lista de Loop com While

Introdução

Exercício Resolvido:
O cardápio de uma lanchonete é o seguinte:

Especificação Código Preço

Cachorro Quente 101 R$ 1,20

Bauru Simples 102 R$ 1,30

Bauru com ovo 103 R$ 1,50

Hambúrguer 104 R$ 1,20

Calcule e alerte o total a ser pago. Considere que o cliente deve informar o número 0 quando o pedido for encerrado.

Quando o cliente entrar com um valor inválido alerte com mensagem: "Pedido indisponível" ou "Pedido não encontrado".

Resolução


<!-- let escolha = parseInt(prompt("Digite o código do produto ou 0 para sair"))
let valorTotalDoPedido = 0
let quantidade = 0
while(escolha != 0){
    if(escolha == 100){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20
    }else if(escolha == 101){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.30
    }else if(escolha == 102){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.50

    }else if(escolha == 103){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20

    }else if(escolha == 104){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.30
    }else{
        alert('Produto indisponível')
    }
    escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"))
}
alert(`Seu pedido ficou em ${valorTotalDoPedido}`) -->

Muita atenção ao desenvolver seus códigos com o laço While, pois caso se esqueça da flag de saída, ocasionará um loop infinito. Então, antes de testar, certifique-se que existe um termo de parada. ⁠

Exercícios para praticar:

1- Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

2- Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

3- Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.

4- Faça um programa que registre votos. Em uma eleição para o grêmio estudantil existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.

Solicite ao usuário que entre com a letra correspondente a um candidato e incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com um valor que não seja correspondente a um candidato, alerte: "Candidato não encontrado".

Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso".

Para encerrar a votação é necessário que entre com uma flag (variável de controle) de parada: use o x para isso.

Quando o valor x for inserido alerte o número de votos que cada candidato teve.