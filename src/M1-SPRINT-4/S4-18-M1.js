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
