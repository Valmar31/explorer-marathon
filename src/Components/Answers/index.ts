const Answers = [
 "Sure!",
 "I'm not so sure.",
 "It is decidedly so.",
 "Don't count on it.",
 "No doubt about it!",
 "Ask again later.",
 "Yes, definitely!",
 "My answer is no.",
 "You can count on it.",
 "Better not tell you now.",
 "In my view, yes.",
 "My sources say no.",
 "Probably.",
 "Can't predict now.",
 "Good perspective.",
 "The prospects are not so good.",
 "Yes.",
 "Focus and ask again",
 "Signs indicate that yes.",
];

export function questionMaker() {
 const totalAnswers = Answers.length;
 const randomNumber = Math.floor(Math.random() * totalAnswers);
 const answerElement = document.querySelector("#answer")! as any;
 const questionInput = document.querySelector("#questionInput")! as any;
 const answerBtn = document.querySelector("#answerBtn")!;
 const question = "<div>" + questionInput.value + "</div>";

 if (questionInput && questionInput.value == "") {
  alert("TYPE YOUR QUESTION!!!!");
  return;
 } else {
 }

 answerBtn.setAttribute("disabled", "true");

 if (answerElement) {
  answerElement.innerHTML = question + Answers[randomNumber];
 } else {
 }

 answerElement.style.opacity = 1;
 setTimeout(function () {
  answerElement.style.opacity = 0;
  answerBtn.removeAttribute("disabled");
 }, 3000);

 // Tests
 // console.log("totalAnswers: ", totalAnswers)
 // console.log("randomNumber: ", randomNumber)
 // console.log("Answers: ", Answers[randomNumber])
 // console.log("answerElement: ", answerElement)
 // console.log("questionInput: ", questionInput.value)
}
