//Package Imports 
const readlineSync = require('readline-sync')
const chalk = require('chalk');

// Score Initlisation 
let score = 0
var score2=0;

// Questions Array
const questions =[
  {
    question:
    `What is Penny's maiden name?
    a) Pingleton
    b) Smith
    c) Johnson
    d) Its never reveled`,
    answer: 'its never reveled'
  },
  {
    question:`What is Sheldon's catchphrase
    a) Blip!
    b) Bazinga
    c) Bingo
    d) Boo`,
    answer:'bazinga'
  },
  {
    question:`How many times does Sheldon knock on Penny's door and say her name 
    a) Three
    b) Four
    c) Five
    d) One`,
    answer: 'three'
  },
  {
    question:`At what age did Sheldon start going to college?
    a) 11
    b) 12
    c) 13
    d) 14`,
    answer:'11'
  },
];

// Automating Questions and Answer Process
function play(question,answer)
{
  var userAnswer = readlineSync.question(chalk.red(question)+ "\n");
  if(userAnswer.toLowerCase() === answer)
  {
    console.log(chalk.greenBright('Yippe! You are Correct'));
    score = score+1;
  }
  else
  {
    console.log(chalk.greenBright('Your Answer was not correct'));
    console.log(chalk.grey('Correct Ans is: '+ answer.charAt(0).toUpperCase() + answer.slice(1)))
  }


  console.log(chalk.yellowBright("Your Current Score is: "+ score) +"\n")
  //console.log("\n")
}

const userName = readlineSync.question(chalk.cyanBright("Hey There! What's your name?\n"))

const welcomeMessage = "\nWelcome to Big Bang Theory Fandom Quiz " + userName + ". Hope you and your loved ones are safe in this testing times.\n"

console.log(chalk.yellowBright(welcomeMessage))

const response = readlineSync.question(chalk.magentaBright("Are you ready to do some fun?\n"))


if(response.toLowerCase() === "yes")
{
  console.log(chalk.bold.greenBright("\nGreat! Lets See if you know me well or not?\n"))
  for(let i =0; i<questions.length; i++)
  {
    var que = questions[i];
    play(que.question, que.answer);
  } 
  console.log(chalk.bold.blueBright("Your Final Score is: ", score + " / " + questions.length ))
}
else{
  console.log(chalk.bold.greenBright("\nOk! Bie have a great Day!"))
}
