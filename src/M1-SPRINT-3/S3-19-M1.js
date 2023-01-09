let nameValue = prompt("Digite seu nome completo");
let age = parseInt(prompt("Digite sua idade"));
let isAccompanied = prompt("Está acompanhado? Digite s para Sim e n para Não");

if (age < 18) {
  alert(`Entrada não está permitida para ${nameValue}: Menor de Idade!`);
} else if (isAccompanied.toLowerCase() == "s") {
  alert(`Entrada permitida para ${nameValue}: Conceder Desconto`);
} else {
  alert(`Entrada permitida para ${nameValue}: Valor Integral`);
}
