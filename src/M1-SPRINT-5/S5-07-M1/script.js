const barbearia = {
  cortes: [
    { id: 1, tipo: "Militar", valor: 20.0 },
    { id: 2, tipo: "Samurai", valor: 35.0 },
    { id: 3, tipo: "Pompadour", valor: 20 },
    { id: 4, tipo: "Moicano", valor: 0 },
    { id: 5, tipo: "Razor part", valor: 0 },
  ],

  barbas: [
    { id: 1, tipo: "Capitão Jack", valor: 20.0 },
    { id: 2, tipo: "Van Dyke", valor: 20.0 },
    { id: 3, tipo: "Barba Média", valor: 20.0 },
    { id: 4, tipo: "Barba Baixa", valor: 20.0 },
    { id: 5, tipo: "Barba Zero", valor: 15.0 },
  ],
  estaAberto: true,
};

function buscaCortePorId(id) {
  for (let i = 0; i < barbearia.cortes.length; i++) {
    if (id == barbearia.cortes[i].id) {
      return barbearia.cortes[i];
    }
  }
  return "Corte não encontrado.";
}
let corteCabelo = buscaCortePorId(4);
console.log(corteCabelo);

function buscaBarbaPorId(id) {
  for (let i = 0; i < barbearia.barbas.length; i++) {
    if (id == barbearia.barbas[i].id) {
      return barbearia.barbas[i];
    }
  }
  return "Barba não encontrada.";
}
let corteBarba = buscaBarbaPorId(4);
console.log(corteBarba);

function verificaStatusBarbearia() {
  if (barbearia.estaAberto == true) {
    return "Estamos abertos";
  } else {
    return "Estamos fechados";
  }
}
let abertoOuFechado = verificaStatusBarbearia();
console.log(abertoOuFechado);

function retornaTodosCortes() {
  return barbearia.cortes;
}
let cortes = retornaTodosCortes();
console.log(cortes);

function retornaTodasBarbas() {
  return barbearia.barbas;
}
let barbas = retornaTodasBarbas();
console.log(barbas);

function criaPedido(nomeCliente, corteId, barbaId) {
  let buscaCorte = buscaCortePorId(corteId);
  let buscaBarba = buscaBarbaPorId(barbaId);
  if (buscaCorte.id == corteId || buscaBarba.id == barbaId) {
    const pedido = {
      nome: nomeCliente,
      pedidoCorte: buscaCorte.tipo,
      pedidoCortePreco: buscaCorte.valor,
      pedidoBarba: buscaBarba.tipo,
      pedidoBarbaPreco: buscaBarba.valor,
    };
    return pedido;
  }
  return "Pedido não encontrado.";
}
let pedido = criaPedido("Guilherme", 3, 1);
console.log(pedido);

function atualizarServico(lista, id, tipo, preco) {
  for (let i = 0; i < lista.length; i++) {
    if (id == lista[i].id && (tipo != null || preco != null)) {
      lista[i].tipo = tipo;
      lista[i].valor = preco;
      console.log(lista);
      return "Item atualizado com sucesso";
    }
  }
  return "Entrada de valores inválida";
}
let atualizar = atualizarServico(barbearia.barbas, 1, "Barba de Adulto", 0);
console.log(atualizar);

function calculaTotal(pedido) {
  if (pedido.pedidoCortePreco == null || pedido.pedidoCortePreco == undefined) {
    return pedido.pedidoBarbaPreco;
  } else if (
    pedido.pedidoBarbaPreco == null ||
    pedido.pedidoBarbaPreco == undefined
  ) {
    return pedido.pedidoCortePreco;
  } else {
    return pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
  }
}
let calculo = calculaTotal(pedido);
console.log(calculo);
