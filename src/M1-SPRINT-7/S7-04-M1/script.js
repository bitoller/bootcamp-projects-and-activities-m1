let produto = {
  nome: "Laptop",
  valor: 3000.0,
  liquidacao: false,
  distribuidor: "lojadakenzie.com.br",
};

function render(list) {
  let uList = document.querySelector(".ul");
  let element = create(list);
  uList.append(element);
}
render(produto);

function create(product) {
  let elementList = document.createElement("li");
  let name = document.createElement("p");
  name.innerText = product.nome;
  name.classList.add("h1");
  let value = document.createElement("p");
  value.innerText = `R$ ${product.valor}`;
  value.classList.add("h1", "color");
  let sale = document.createElement("a");
  sale.href = "#";
  sale.innerText = "Em liquidação";
  let discount = document.createElement("p");
  discount.innerText = `Hoje apenas: R$ ${product.valor - product.valor * 0.3}`;
  discount.setAttribute("id", "discount");
  discount.classList.add("hidden");
  let dist = document.createElement("p");
  dist.innerText = `Fabricante: ${product.distribuidor}`;
  dist.classList.add("dist");
  elementList.append(name, value, sale, discount, dist);

  return elementList;
}

function click() {
  const a = document.querySelector("a");
  a.addEventListener("click", function () {
    let discount = document.querySelector("#discount");
    if (produto.liquidacao == true) {
      discount.classList.add("hidden");
      discount.classList.remove("show");
    } else {
      discount.classList.add("show");
      discount.classList.remove("hidden");
    }
    produto.liquidacao = !produto.liquidacao;
  });
}
click();
