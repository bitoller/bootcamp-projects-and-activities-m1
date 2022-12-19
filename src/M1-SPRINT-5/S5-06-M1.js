/*Esta é uma atividade de debug, os códigos estão parcialmente criados,
ou totalmente criados, mas funcionando incorretamente.
Investigue o código, teste e corrija o que achar necessário.
Um mercado te pediu um sistema para ajudar organizar as seções e
seus respectivos itens, além de algumas funcionalidades administrativas,
como serviço de login e ponto.
A equipe de TI anterior, começou a desenvolver,
mas não estava dando muito certo. O seu trabalho e fazer com que
o sistema funcione.
Funções.
Conforme a equipe anterior, as funções abaixo já foram desenvolvidas,
porém, nenhuma delas funciona da forma que deveria.
AdicionarSecaoAoMercado()
Esta função recebe uma seção(lista de itens) como parâmetro.
Esta função deve ter a funcionalidade de inserir uma nova seção de
itens ao mercado.
Erros: Existe um erro na construção da estrutura.
AdicionarItemASecao()
Esta função recebe um item(string) como parâmetro e a seção(lista)
para a inserção.
Esta função deve ter a funcionalidade de inserir novos itens a seção de itens.
Erros: Existe um erro na forma de inserir o elemento.
retornarItemDaSecao()
Esta função recebe um parâmetro, o nome de um item da lista.
Esta função deve ter a funcionalidade de buscar um item pelo nome na lista.
Erros: Existe erro de sintaxe, verifique a função do método.
retornaUtlimoItemDaSecao()
Esta função recebe um parâmetro, a seção(lista)
Esta função deve ter a funcionalidade de retornar o último item da lista,
independente do tamanho da lista.
Erros: Existe erro de lógica na captura do último elemento.
⁠Caso de uso:
Entrada: secao
Saída: undefined
Saída esperada: o último item da lista
consultaSecoesMercado()
Esta função recebe a lista de seções do mercado como parâmetro.
Esta função deve ter a funcionalidade de imprimir todas seções no console.
Erros: Existem erros de lógica na comparação e no retorno.
⁠Caso de uso:
Entrada: secoesMercado
Saída: apenas o elemento do índice 0
Saída esperada: Todos os elementos da lista.
somaItens()
Esta função recebe dois valores como parâmetro.
Esta função deve ter a funcionalidade de retornar a soma dos dois valores.
Erros: Existe erro de lógica.
⁠Caso de uso:
Entrada: "1", "1"
Saída: 11
Saída esperada: 2
BaterPonto()
Esta função recebe como parâmetro o nome de um funcionário.
Esta função deve ter a funcionalidade de registrar o ponto,
caso o funcionário esteja registrado.
Erros: Existe erro de lógica.
⁠Caso de uso:
Entrada: "sonia", 0
Saída: Funcionario não cadastrado
Saída esperada: Turno processado.
loginSistema()
Esta função recebe como parâmetro um nome de usuário e uma senha.
Esta função tem a funcionalidade de realizar o login de um funcionário.
Erros: Existem erros de sintaxe e de lógica,
corrija primeiro os erros de sintaxe
Caso de uso:
Entrada: "luffy123", 326541
Saída: Acesso liberado.
Saída esperada: Acesso negado.*/

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
