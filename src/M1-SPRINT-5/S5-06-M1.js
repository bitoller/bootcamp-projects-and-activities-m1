let secoesMercado = [];

let hortifruti = [];
let acougue = [];
let padaria = [];
let adegaEBebidas = [];
let laticiniosEFrios = [];

function adicionarSecaoAoMercado(secao) {
  secoesMercado.push(secao);
  return secoesMercado;
}
secoesMercado = adicionarSecaoAoMercado(hortifruti);
secoesMercado = adicionarSecaoAoMercado(acougue);
secoesMercado = adicionarSecaoAoMercado(padaria);
secoesMercado = adicionarSecaoAoMercado(adegaEBebidas);
secoesMercado = adicionarSecaoAoMercado(laticiniosEFrios);
console.log(secoesMercado);

function adicionarItemASecao(novoItem, secao) {
  secao.push(novoItem);

  return secao;
}
hortifruti = adicionarItemASecao("Banana", hortifruti);
hortifruti = adicionarItemASecao("Uva", hortifruti);
acougue = adicionarItemASecao("Frango", acougue);
acougue = adicionarItemASecao("Carne", acougue);
acougue = adicionarItemASecao("Pato", acougue);
padaria = adicionarItemASecao("Pão", padaria);
laticiniosEFrios = adicionarItemASecao("Leite", laticiniosEFrios);
laticiniosEFrios = adicionarItemASecao("Queijo", laticiniosEFrios);
console.table(secoesMercado);

function retornarItemDaSecao(nomeItem, secao) {
  let posicao = secao.indexOf(nomeItem);
  let itemProcurado = secao[posicao];

  return itemProcurado;
}
let retornar2 = retornarItemDaSecao("Pato", acougue);
console.log(retornar2);

function retornaUltimoItemDaSecao(secao) {
  ultimoItem = secao[secao.length - 1];

  return ultimoItem;
}
let retornar3 = retornaUltimoItemDaSecao(laticiniosEFrios);
console.log(retornar3);

function consultaSecoesMercado(listaMercado) {
  for (let i = 0; i < listaMercado.length; i++) {
    console.log(listaMercado[i]);
  }
  return listaMercado;
}
secoesMercado = consultaSecoesMercado(secoesMercado);

function somaItens(totalA, totalB) {
  let a = parseFloat(totalA);
  let b = parseFloat(totalB);
  return a + b;
}
let soma = somaItens("1", "1");
console.log(soma);

function baterPonto(nome, numeroFicha) {
  const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"];
  let auxNome = nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let auxFuncionario = funcionarios[numeroFicha]
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (auxNome == auxFuncionario) {
    return "Turno processado";
  } else {
    return "Funcionario não cadastrado";
  }
}
let ponto = baterPonto("sonia", 0);
console.log(ponto);

function loginSistema(nomeUsuario, senhaUsuario) {
  const listaUsuarios = [
    { usuario: "luffy123", senha: 326541 },
    { usuario: "acer321", senha: 741258 },
    { usuario: "nami", senha: 963258 },
  ];

  for (let i = 0; i < listaUsuarios.length; i++) {
    if (
      nomeUsuario == listaUsuarios[i].usuario &&
      senhaUsuario == listaUsuarios[i].senha
    ) {
      return "Acesso liberado";
    }
  }
  return "Acesso Negado";
}
let login = loginSistema("luffy123", 326541);
console.log(login);
