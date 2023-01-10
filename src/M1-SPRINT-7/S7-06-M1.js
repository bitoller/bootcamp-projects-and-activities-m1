const chores = [
  { title: "Pick up after the dog", type: "urgent" },
  { title: "Do the dishes", type: "urgent" },
  { title: "Vacuum around", type: "priority" },
  { title: "Dust the shelves off", type: "normal" },
];

function createCards(chores) {
  let elementList = document.createElement("li");
  let name = document.createElement("span");
  name.innerText = chores.title;
  let type = document.createElement("div");
  type.classList.add("circle");
  type.classList.add(chores.type);
  let button = document.createElement("button");
  let imgCard = document.createElement("img");
  imgCard.src = "./img/trash.svg";
  imgCard.classList.add("trash");
  button.append(imgCard);
  elementList.append(type, name, button);

  return elementList;
}

function renderCards(chores) {
  const choreList = document.querySelector(".choresList");
  let filteredChores = filterByType(chores);
  for (let i = 0; i < filteredChores.length; i++) {
    const render = createCards(filteredChores[i]);
    choreList.append(render);
  }
}

function filterByType(chores) {
  const urgent = chores.filter(function (chore) {
    return chore.type == "urgent";
  });
  const priority = chores.filter(function (chore) {
    return chore.type == "priority";
  });
  const normal = chores.filter(function (chore) {
    return chore.type == "normal";
  });
  let filteredChores = [];
  filteredChores = filteredChores.concat(urgent);
  filteredChores = filteredChores.concat(priority);
  filteredChores = filteredChores.concat(normal);

  return filteredChores;
}

renderCards(chores);

function receiveInput(text, select) {
  const inputResult = document.querySelector(".inputText").value;
  const selectResult = document.querySelector(".select").value;
}
