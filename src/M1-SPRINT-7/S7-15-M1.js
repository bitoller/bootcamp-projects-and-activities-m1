const products = [
    {
      name: "Uva Crimson",
      price: 44.99,
    },
    {
      name: "Vinho Canção",
      price: 17.98,
    },
    {
      name: "Água de Coco",
      price: 8.99,
    },
    {
      name: "Mamão",
      price: 9.98,
    },
    {
      name: "Água Tônica",
      price: 17.98,
    },
  ];
  
  function renderCards(list) {
    let elements = [];
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      elements.push(createCards(list[i]));
      sum += list[i].price;
    }
    createStatic(elements, sum);
  }
  
  function createCards(products) {
    let li = document.createElement("li");
    let pName = document.createElement("p");
    pName.innerText = products.name;
    let pPrice = document.createElement("p");
    pPrice.innerText = `R$ ${products.price}`;
    li.append(pName, pPrice);
  
    return li;
  }
  
  function createStatic(products, add) {
    let body = document.querySelector("body");
    let main = document.createElement("main");
    let div1 = document.createElement("div");
    div1.classList.add("titleCard");
    let h = document.createElement("h2");
    h.innerText = "Virtual Market";
    let div2 = document.createElement("div");
    div2.classList.add("topCard");
    let item = document.createElement("p");
    item.innerText = "Item";
    let value = document.createElement("p");
    value.innerText = "Valor";
    let ul = document.createElement("ul");
    ul.classList.add("ulCard");
    for (let i = 0; i < products.length; i++) {
      ul.append(products[i]);
    }
    let section = document.createElement("section");
    let div3 = document.createElement("div");
    div3.classList.add("bottomCard");
    let total = document.createElement("p");
    total.innerText = "Total";
    let sum = document.createElement("p");
    sum.innerText = `R$ ${add}`;
    let button = document.createElement("button");
    button.innerText = "Finalizar";
    div3.append(total, sum);
    section.append(div3, button);
    div2.append(item, value);
    div1.append(h);
    main.append(div1, div2, ul, section);
    body.append(main);
  }
  
  renderCards(products);
  