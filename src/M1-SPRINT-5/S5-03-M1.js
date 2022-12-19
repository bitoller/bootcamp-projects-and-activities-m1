/*Exercício - Itens para acampar.
Você e seus amigos decidiram ir acampar. Antes de mais nada fizeram uma lista,
onde cada amigo deve comprar 5 itens para levar para a viagem.
Cada amigo ficou responsável por uma seção de itens.
As seções são: Higiene, Alimentação, Farmácia e Lazer.
Seus amigos devem trazer exatamente cinco itens de cada seção.
Todos os itens serão colocados juntos na caixa de suprimentos.
Cada amigo representa um array e a caixa de suprimentos é a
composição destes arrays. Você deve colocar os itens dentro da caixa
de forma organizada, separando as seções, afinal de contas,
não queremos nossos marshmallows com gosto de desinfetante.
Condições
Os amigos não podem comprar mais ou menos do que cinco itens, ou seja,
tem que ser exatamente cinco itens.
Caso alguém compre mais itens ou menos itens, você deverá retornar uma mensagem.*/

let hygiene = ["Toothbrush", "Toothpaste", "Deodorant", "Soap", "Toilet Paper"];
let food = ["Bread", "Chicken", "Marshmellows", "Soda", "Beer"];
let pharmacy = [
  "Painkillers",
  "Band aids",
  "Antiseptic",
  "Latex Gloves",
  "Tweezers",
];
let leisure = ["Speaker", "Cooler", "Fireworks", "Hammock", "Board Game"];

const supplyBox = [hygiene, food, pharmacy, leisure];

function campingList() {
  let message = "";
  for (let i = 0; i < supplyBox.length; i++) {
    if (supplyBox.length == 4) {
      for (let j = 0; j < supplyBox[i].length; j++) {
        if (supplyBox[i].length == 5) {
          message = "Podemos ir acampar";
        } else if (supplyBox[i].length > 5) {
          message = "Tem itens demais, não precisamos de tantos";
          return message;
        } else {
          message = "Precisamos de mais itens desta seção";
          return message;
        }
      }
    } else if (supplyBox.length < 4) {
      message = "Algum amigo ainda não retornou com os itens";
    } else {
      message = "Acho que temos um intruso";
    }
  }
  return message;
}
let camping = campingList();
console.log(camping);
console.table(supplyBox);
