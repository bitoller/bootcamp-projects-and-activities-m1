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
