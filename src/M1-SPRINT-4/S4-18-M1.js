/*Você trabalha na inteligência de um time da polícia.
Foi identificada a troca de mensagens entre dois grupos de Cracker's.
O chefe de polícia acredita que eles estão planejando algo.
Outros membros da polícia já conseguiram identificar o padrão de algumas letras
mas não conseguiram ainda identificar onde as palavras se separam,
gerando traduções desconexas e imprecisas.
Faça um programa para automatizar o cálculo e contar quantas palavras existem no texto digitado.
O programa deverá receber um texto com até 250 caracteres e deverá dar como saída
a quantidade de palavras N (Número) que o texto contém.
Você descobriu que na escrita não é utilizado espaço nem mesmo para separar palavras,
ao invés disto conseguiu notar que qualquer caractere que não seja uma letra minúscula
entre a e z será considerado separador de palavra.
Entrada:⁠sss.aasd.sss
Saída: 3
Entrada: sssaasdsSs
Saída: 2
Entrada: sssa1asdss
Saída: 2*/

/*
o parametro da funcao recebe uma string de ate 250 caracteres 
o retorno da funcao tem que ser a quantidade de palavras contida no parametro
text
tudo que nao for minusculo entre a - z é um separador
quando for ultimo caso e for espaco n contar palavra
*/
function crackers(text) {
  let wordAux = [];
  let auxIndex = 0;
  if (text.length <= 250) {
    for (let i = 0; i < text.length; i++) {
      let regexAux = text[i].match(/[a-z]+/);
      if (regexAux == null) {
        wordAux.push(text.substring(auxIndex, i));
        auxIndex = i + 1;
      }
    }
    if (auxIndex < text.length) {
      wordAux.push(text.substring(auxIndex, text.length));
    }
    return wordAux.length;
  }
  return 0;
}
let crack = crackers("sss.aasd.sss");
console.log(crack);
crack = crackers("sssaasdsSs");
console.log(crack);
crack = crackers("sssa1asdss");
console.log(crack);
