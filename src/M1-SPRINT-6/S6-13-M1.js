let items = [
  {
    image: "./img/animewoman.jpg",
    name: "Anime Woman Figure",
    price: "R$ 200,00",
    type: "figure",
  },

  {
    image: "./img/dragonballpersonagem.jpg",
    name: "Dragonball Figure",
    price: "R$ 250,00",
    type: "figure",
  },

  {
    image: "./img/starwarspersonagem.jpg",
    name: "Star Wars Figure",
    price: "R$ 260,00",
    type: "figure",
  },

  {
    image: "./img/clock.jpg",
    name: "Apple Watch Painting",
    price: "R$ 120,00",
    type: "frame",
  },

  {
    image: "./img/gamepad.jpg",
    name: "PlayStation Controller Painting",
    price: "R$ 120,00",
    type: "frame",
  },

  {
    image: "./img/personagem.jpg",
    name: "Star Wars Painting",
    price: "R$ 120,00",
    type: "frame",
  },

  {
    image: "./img/starwarspersonagem.jpg",
    name: "Star Wars Figure",
    price: "R$ 260,00",
    type: "figure",
  },

  {
    image: "./img/personagem.jpg",
    name: "Star Wars Painting",
    price: "R$ 120,00",
    type: "frame",
  },
];

let listFigures = [];
let listFrames = [];

function separateItens(list) {
  for (let index = 0; index < list.length; index++) {
    if (list[index].type == "frame") {
      listFrames.push(list[index]);
    } else {
      listFigures.push(list[index]);
    }
  }
}
separateItens(items);
console.log(listFrames);
console.log(listFigures);

let listPaintingSection =
  document.getElementsByClassName("paintingsSection")[0];
let listFigureSection = document.getElementsByClassName("figuresSection")[0];
let myFigureUl = listFigureSection.getElementsByClassName("figureListUl")[0];
let myPaintingUl =
  listPaintingSection.getElementsByClassName("paintingListUl")[0];

for (let index = 0; index < listFrames.length; index++) {
  let elementList = document.createElement("li");
  let imgCard = document.createElement("img");
  imgCard.src = listFrames[index].image;
  imgCard.alt = listFrames[index].name;
  imgCard.classList.add("imgCard");
  let name = document.createElement("span");
  name.innerText = `${listFrames[index].name}`;
  let p = document.createElement("p");
  p.innerText = `${listFrames[index].price}`;
  elementList.appendChild(imgCard);
  elementList.appendChild(name);
  elementList.appendChild(p);
  myPaintingUl.appendChild(elementList);
}

for (let index = 0; index < listFigures.length; index++) {
  let elementList = document.createElement("li");
  let imgCard = document.createElement("img");
  imgCard.src = listFigures[index].image;
  imgCard.alt = listFigures[index].name;
  imgCard.classList.add("imgCard");
  let name = document.createElement("span");
  name.innerText = `${listFigures[index].name}`;
  let p = document.createElement("p");
  p.innerText = `${listFigures[index].price}`;
  elementList.appendChild(imgCard);
  elementList.appendChild(name);
  elementList.appendChild(p);
  myFigureUl.appendChild(elementList);
}
