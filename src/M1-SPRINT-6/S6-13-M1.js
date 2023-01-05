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
];

function renderCards(list) {
  const paintingsList = document.querySelector(".paintingListUl");
  const figuresList = document.querySelector(".figureListUl");

  for (let i = 0; i < list.length; i++) {
    if (list[i].type == "frame") {
      const render = createCards(list[i]);
      console.log(list[i]);
      paintingsList.append(render);
    } else {
      const render = createCards(list[i]);
      figuresList.append(render);
    }
  }
}

function createCards(product) {
  let elementList = document.createElement("li");
  let imgCard = document.createElement("img");
  imgCard.src = product.image;
  imgCard.alt = product.name;
  imgCard.classList.add("imgCard");
  let name = document.createElement("span");
  name.innerText = product.name;
  let p = document.createElement("p");
  p.innerText = product.price;
  elementList.append(imgCard, name, p);

  return elementList;
}

renderCards(items);
