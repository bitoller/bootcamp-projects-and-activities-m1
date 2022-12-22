/*Contexto
Você foi contratado para desenvolver uma aplicação para as perguntas
dos eventos digitais chamada Slenzie.
A ferramenta será responsável por armazenar as perguntas recebidas.
Crie um objeto chamado slenzie. Este objeto deve ter as seguintes propriedades:
nameEvent - Esta propriedade é do tipo string e será utilizada para armazenar
o nome do evento em que será utilizada a ferramenta.
questions - Esta propriedade recebe um valor do tipo lista,
para armazenar cada pergunta realizada.
O outro objeto necessário é o question. Ele deve ter as seguintes propriedades:
user - Esta é uma propriedade do tipo string e irá armazenar o nome do
usuário que realizou a pergunta.
userQuestion - Esta é uma propriedade do tipo string e irá armazenar
a pergunta realizada pelo usuário.
vote - Esta é uma propriedade do tipo number e deve armazenar
obrigatoriamente um inteiro positivo. Inicialmente seu valor é zero.
Funcionalidades
Desenvolva uma função chamada createEvent.
Esta função recebe como parâmetro um objeto do tipo slenzie e uma string.
Acesse a propriedade nameEvent do objeto slenzie e atribua a ela o
valor da string recebida.
O que deve ser verificado
Verifique se o valor recebido realmente é uma string.
Verifique se o valor recebido como parâmetro tem no mínimo 5 caracteres.
Se os testes forem bem sucedidos retorne o objeto slenzie atualizado.
Se não, retorne: "The input value is invalid".
Desenvolva uma função chamada addQuestion.
Esta função recebe um objeto do tipo slenzie e um objeto do
tipo question como parâmetro.
A pergunta (question) deve ser armazenada na lista de perguntas (questions)
do objeto slenzie.
O que deve ser verificado
Verifique se o objeto do tipo question não possui propriedades vazias;
é obrigatório que as propriedades possuam valor.
Se a propriedade user estiver vazia, retorne: "The user can't be empty".
Se a propriedade userQuestion estiver vazia,
retorne: "The question can't be null".
Desenvolva uma função chamada addVoteToQuestion.
Esta função deve receber um valor inteiro como parâmetro e o objeto slenzie.
Acesse a lista de perguntas (questions) do objeto slenzie e incremente
a propriedade vote do elemento da lista na posição recebida como parâmetro.
O que deve ser verificado
Verifique se o valor passado está dentro dos limites do tamanho da lista
Se o valor não estiver dentro dos limites da lista,
retorne: "Question not found."
Verifique se o valor passado é neutro ou um inteiro positivo.
Se os valores não estiverem dentro dos padrões
retorne: "The value is not allowed"
Se tudo estiver dentro dos padrões verificados nos passos anteriores retorne:
"Vote registered successfully" .
Desenvolva uma função chamada questionAnswered.
Esta função deve receber um valor inteiro e o objeto slenzie como parâmetro.
Acesse a lista de perguntas (questions) e adicione a propriedade answered
na pergunta (question) referente à posição do número inteiro
recebido como parâmetro.
Defina o valor true para a propriedade answered .
O que deve ser verificado
Verifique se o valor passado está dentro dos limites do tamanho da lista
Se o valor não estiver dentro dos limites da lista,
retorne: "Question not found."
Verifique se o valor passado é neutro ou um inteiro positivo.
Se os valores não estiverem dentro dos padrões
retorne: "The value is not allowed"
Desenvolva uma função chamada unansweredQuestions.
Esta função recebe o objeto do tipo slenzie como parâmetro
e retorna todas as perguntas que ainda não foram respondidas.
Crie uma variável chamada output. Esta variável deve ser inicializada
como uma lista vazia.
Percorra a lista de perguntas (questions).
As perguntas que não tiverem a propriedade answered como true
deverão ser inseridas nesta lista.
Retorne a lista output.*/

let question = {
  user: "fay",
  userQuestion: "Why is the apple bitten?",
  vote: 0,
};
let question2 = {
  user: "fay",
  userQuestion: "Why is the pear bitten?",
  vote: 0,
  answered: true,
};
let question3 = {
  user: "fay",
  userQuestion: "Why is the mango bitten?",
  vote: 0,
  answered: false,
};

let slenzie = {
  nameEvent: "",
  questions: [question, question2, question3],
};

//1
function createEvent(object, string) {
  if (typeof string === "string") {
    if (string.length >= 5) {
      object.nameEvent = string;
      return object;
    }
  }
  return "The input value is invalid";
}
console.log(createEvent(slenzie, "Apple"));

//2
function addQuestion(object, question) {
  if (question) {
    if (
      question.user == "" ||
      question.user == null ||
      question.user == undefined
    ) {
      return "The user can't be empty";
    }
    if (
      question.userQuestion == "" ||
      question.userQuestion == null ||
      question.userQuestion == undefined
    ) {
      return "The question can't be empty";
    }
    object.questions.push(question);
    return object;
  }
  return "The object 'question' doesn't exist";
}
console.log(addQuestion(slenzie, question));

//3

function addVoteToQuestion(object, position) {
  if (position >= object.questions.length) {
    return "Question not found";
  }
  if (position < 0) {
    return "The value is not allowed";
  }
  object.questions[position].vote += 1;
  return "Vote registered successfully";
}
console.log(addVoteToQuestion(slenzie, 0));

//4

function questionAnswered(object, position) {
  if (position >= object.questions.length) {
    return "Question not found";
  }
  if (position < 0) {
    return "The value is not allowed";
  }
  object.questions[position].answered = true;
  return object;
}
console.log(questionAnswered(slenzie, 0));

//5

function unansweredQuestions(object) {
  let output = [];
  for (let i = 0; i < object.questions.length; i++) {
    if (object.questions[i].answered != true) {
      output.push(object.questions[i]);
    }
  }
  return output;
}
console.log(unansweredQuestions(slenzie));
