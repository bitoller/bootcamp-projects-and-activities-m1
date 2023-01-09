//1

let value = parseInt(prompt("Digite um valor de 0 a 10"));

while (value < 0 || value > 10) {
  alert("Valor inválido");
  value = parseInt(prompt("Digite outro valor"));
}
alert("Valor válido");

//2

let userName = prompt("Digite seu nome de usuário");
let password = prompt("Digite sua senha");

while (password == userName) {
  alert("Erro: Senha inválida");
  password = prompt("Digite outra senha");
}
alert("Senha aceita");

//3

let number = parseInt(prompt("Digite um número inteiro positivo"));
let numberSum = 0;
let numberAverage = 0;
let aux = 0;

while (number > 0 && number < 10) {
  numberSum += number;
  aux++;
  number = parseInt(prompt("Digite outro número inteiro positivo"));
}
if (number < 0 || number > 10) {
  numberAverage = numberSum / aux;
}
alert(`Soma: ${numberSum}. Média: ${numberAverage}.`);

//4

let vote = prompt("Vote para o candidato a, b ou c").toLowerCase();
let a = 0;
let b = 0;
let c = 0;
while (vote != "x") {
  if (vote == "a") {
    a++;
    alert("Voto registrado com sucesso");
  } else if (vote == "b") {
    b++;
    alert("Voto registrado com sucesso");
  } else if (vote == "c") {
    c++;
    alert("Voto registrado com sucesso");
  } else {
    alert("Candidato não encontrado");
  }
  vote = prompt("Vote para o candidato a, b ou c");
}
alert(
  `O candidato A teve ${a} votos. O candidato B teve ${b} votos. O candidato C teve ${c} votos.`
);
