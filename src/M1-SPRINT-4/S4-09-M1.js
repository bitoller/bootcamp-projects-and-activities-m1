function generateRandomNumber() {
  return Math.round(Math.random() * 20) + 1;
}
let random = generateRandomNumber();

let guess = parseInt(prompt("Digite aqui o seu palpite"));
function verifyGuess(randomNumber, guess) {
  let attempt = 1;
  while (guess != randomNumber) {
    alert("Tente novamente.");
    guess = parseInt(prompt("Digite aqui outro palpite"));
    attempt++;
  }
  alert(`Você acertou na tentativa ${attempt}.`);
}
verifyGuess(random, guess);
