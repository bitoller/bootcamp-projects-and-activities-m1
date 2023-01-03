/*1- Pessoa Premiada
Você está trabalhando na loteria federal e um cliente se aproxima
e fala que foi premiado.
Os dados do ganhador já estão no sistema e você agora
só deve comparar se as informações prestadas pelo suposto
ganhador são realmente verdadeiras.
Pegue os documentos necessários e faça a consulta.
Dados do Ganhador*/

let ganhador = {
  nome: "Adamastor",
  nascimento: "16/09/1986",
  cpf: "123.321.789-98",
  estadoCivil: "Casado",
};

/*Crie uma função que irá receber o nome e cpf do suposto ganhador.
Dentro da função você deverá comparar os dados recebidos com os
dados existentes.
A função deve retornar uma string: "É ganhador!" ou "Não é ganhador!".
Desenvolva uma lógica para que o nome sempre tenha a primeira
letra maiúscula e as restantes minúsculas.*/

/*2- Quem veio atrás do prêmio?
O gerente da loteria, pediu para que você guarde as
informações das pessoas que vieram atrás do prêmio.
Antes você recebia o objeto e fazia a comparação.
Agora você precisa armazená-lo em uma variável e inseri-lo em uma lista,
mediante a uma condição.
A lista deverá ter o nome que achar mais conveniente.
Crie uma variável para guardar o objeto recebido.
Com base no exercício anterior, insira todos que não ganharam
o prêmio em um array.
Crie uma função que recebe um objeto.
Crie um array e insira o objeto passado.
Retorne uma string contendo o número de pessoas que vieram atrás do prêmio,
mas não eram ganhadores.*/