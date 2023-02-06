Atividades - Lista de JavaScript - Debug I

Introdução
Esta é uma atividade de debug, os códigos estão parcialmente criados, ou totalmente criados, mas funcionando incorretamente.

Investigue o código, teste e corrija o que achar necessário.

Um mercado te pediu um sistema para ajudar organizar as seções e seus respectivos itens, além de algumas funcionalidades administrativas, como serviço de login e ponto.

A equipe de TI anterior, começou a desenvolver, mas não estava dando muito certo. O seu trabalho e fazer com que o sistema funcione.

Funções.
Conforme a equipe anterior, as funções abaixo já foram desenvolvidas, porém, nenhuma delas funciona da forma que deveria.

AdicionarSecaoAoMercado()
Esta função recebe uma seção(lista de itens) como parâmetro.

Esta função deve ter a funcionalidade de inserir uma nova seção de itens ao mercado.

Erros: Existe um erro na construção da estrutura.

AdicionarItemASecao()
Esta função recebe um item(string) como parâmetro e a seção(lista) para a inserção.

Esta função deve ter a funcionalidade de inserir novos itens a seção de itens.

Erros: Existe um erro na forma de inserir o elemento.

retornarItemDaSecao()
Esta função recebe um parâmetro, o nome de um item da lista.

Esta função deve ter a funcionalidade de buscar um item pelo nome na lista.

Erros: Existe erro de sintaxe, verifique a função do método.

retornaUtlimoItemDaSecao()
Esta função recebe um parâmetro, a seção(lista)

Esta função deve ter a funcionalidade de retornar o último item da lista, independente do tamanho da lista.

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

Esta função deve ter a funcionalidade de registrar o ponto, caso o funcionário esteja registrado.

Erros: Existe erro de lógica.

⁠Caso de uso:
Entrada: "sonia", 0
Saída: Funcionario não cadastrado
Saída esperada: Turno processado.

loginSistema()
Esta função recebe como parâmetro um nome de usuário e uma senha.

Esta função tem a funcionalidade de realizar o login de um funcionário.

Erros: Existem erros de sintaxe e de lógica, corrija primeiro os erros de sintaxe

Caso de uso:
Entrada: "luffy123", 326541
Saída: Acesso liberado.
Saída esperada: Acesso negado.

Até agora desenvolveram o seguinte código.

<!-- let secoesMercado = {}

let hortifruti = []
let açougue = []
let padaria = []
let AdegaEBebidas = []
let laticíniosEFrios = []

function adicionarSecaoAoMercado(secao){
    secoesMercado.push(secao)
    return secoesMercado
}

function adicionarItemASecao(novoItem, secao){
    secao[0] = novoItem

    return secao;
}

function retornarItemDaSecao(nomeItem, secao){
   posicao = secao.splice(nomeItem)

   itemProcurado = secao[posicao]

   return itemProcurado;
}

function retornaUtlimoItemDaSecao(secao){
    ultimoItem = secao[secao.length]

    return ultimoItem
}

function consultaSecoesMercado(secoesMercado){
    for(let i = 0; i <= secoesMercado.length; i+1){
        return secoesMercado[i]
    }
}

function somaItens(totalA, totalB){
    if(totalB != 0 && totalB != 0){

        return totalA + totalB
    }
}

function baterPonto(nome, numeroFicha){
    const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"]
    if(nome == funcionarios[numeroFicha]){
        return "Turno processado"
    }else{
        return "Funcionario não cadastrado"
    }
}

function loginSistema(nomeUsuario, senhaUsuario){
    
    const listaUsuarios = ["luffy123", "acer321", "nami"]

    
        if(nomeUsuario == luffy123){
            if(senhaUsuario == "326541"){
                return "Acesso liberado"
            }
        }if(nomeUsuario == acer321){
            if(senhaUsuario == "741258"){
                return "Acesso liberado"
            }
        }if(nomeUsuario == nami){
            if(senhaUsuario == "963258"){
                return "Acesso liberado"
            }
        }

     return listaUsuarios
} -->