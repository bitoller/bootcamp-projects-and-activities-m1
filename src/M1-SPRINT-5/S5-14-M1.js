let produtosCotacao = [];
function insereProduto(produto) {
  produtosCotacao.push(produto);

  return produtosCotacao;
}
produtosCotacao = insereProduto({
  preco: 100,
  quantidade: 10,
  nome: "Soja 25kg",
});

function criaProduto(preco, quantidade, nome) {
  let produto = {
    preco: preco,
    quantidade: quantidade,
    nome: nome,
  };
  return produto;
}
let criarProduto = criaProduto(200, 150, "Feijão 25kg");
console.log(criarProduto);

function renderizaProdutos(todosProdutos) {
  for (let i = 0; i < todosProdutos.length; i++) {
    console.log(todosProdutos[i].preco);
  }
}
let todosProdutos = insereProduto(criarProduto);
renderizaProdutos(todosProdutos);

let listServico = [];
function cadastraServicos(servico) {
  listServico.push(servico);
}
cadastraServicos({
  servico: "Pulverização",
  tipo: "Gafanhotos",
  valor: 50,
});
console.log(listServico);

function calculaValorServico(clienteServicos) {
  let valorServico = 0;
  for (let index = 0; index < clienteServicos.servico.length; index++) {
    valorServico +=
      clienteServicos.servico[index].preco *
      clienteServicos.servico[index].quantidade;
  }
  return valorServico;
}
console.log(
  calculaValorServico({
    cliente: "Rafael",
    servico: [
      (pulverizacao = {
        preco: 50,
        quantidade: 10,
      }),
      (capina = {
        preco: 5,
        quantidade: 10,
      }),
      (aragem = {
        preco: 200,
        quantidade: 10,
      }),
    ],
  })
);
