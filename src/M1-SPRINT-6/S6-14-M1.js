let items = [
  {
    name: "Premium Organic Bananas",
    price: "$ 170,00",
  },

  {
    name: "Premium Organic Strawberries",
    price: "$ 250,00",
  },

  {
    name: "Premium Organic Guavas",
    price: "$ 450,00",
  },

  {
    name: "Premium Organic Peaches",
    price: "$ 300,00",
  },

  {
    name: "Premium Heart Shaped Organic Watermelons",
    price: "$ 520,00",
  },
];

for (let index = 0; index < items.length; index++) {
  let listFruitsSection = document.getElementsByClassName("fruitUl")[0];
  let elementList = document.createElement("li");
  let name = document.createElement("span");
  name.innerText = `${items[index].name}`;
  elementList.appendChild(name);
  listFruitsSection.appendChild(elementList);
}
