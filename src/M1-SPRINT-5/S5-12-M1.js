let question = {
  user: "fay",
  userQuestion: "What's the name of the new game?",
  vote: 0,
};
let question2 = {
  user: "fay",
  userQuestion: "What's the game about?",
  vote: 0,
  answered: true,
};
let question3 = {
  user: "fay",
  userQuestion: "When is the game launching?",
  vote: 0,
  answered: false,
};

let slenzie = {
  nameEvent: "",
  questions: [question, question2, question3],
};

function createEvent(object, string) {
  if (typeof string === "string") {
    if (string.length >= 5) {
      object.nameEvent = string;
      return object;
    }
  }
  return "The input value is invalid";
}
console.log(createEvent(slenzie, "Online Game Event X"));

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
