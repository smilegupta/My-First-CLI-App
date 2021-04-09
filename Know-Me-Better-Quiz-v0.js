//Package Imports 
const readlineSync = require('readline-sync')

// Score Initlisation 
let score = 0

// Questions Array
const questions =[
  {
    question:'Am I older than 25 ',
    answer: 'no'
  },
  {
    question:'Which is my Fav Social Media Platform? ',
    answer:'github'
  },
  {
    question:'What is my Birthday Month? ',
    answer: 'december'
  },
  {
    question:'Where do I Work? ',
    answer:'konfhub'
  },
];

// Automating Questions and Answer Process
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer)
  {
    console.log('Yippe! You are Correct');
    score = score+1;
  }
  else
  {
    console.log('Your Answer was not correct');
    console.log('Correct Ans is: '+ answer.charAt(0).toUpperCase() + answer.slice(1))
  }


  console.log("Your Current Score is: "+ score )
  console.log("---------------------")
}

const userName = readlineSync.question("Hey There! What's your name? ")

const welcomeMessage = "Welcome to Smile Gupta's Quiz " + userName + ". Hope you and your loved ones are safe in this testing times."

console.log(welcomeMessage)

const response = readlineSync.question("Are you ready to do some fun? ")


if(response.toLowerCase() === "yes")
{
  console.log("Great! Lets See if you know me well or not?")
  for(let i =0; i<questions.length; i++)
  {
    var que = questions[i];
    play(que.question, que.answer);
  } 
  console.log("Your Final Score is: ", score + " / " + questions.length )
}
else{
  console.log("Ok! Bie have a great Day!")
}
