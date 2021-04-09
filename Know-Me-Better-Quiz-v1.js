//Package Imports 
const readlineSync = require('readline-sync')
const chalk = require('chalk');

// Score Initlisation 
let score = 0
var score2=0;

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

// Highscore Array
const highScores=
[
  {
    position: 1,
    name:"Srushith Repakula",
    score:4
  },
  {
    position:2,
    name:"Shaina Pravanda",
    score:3
  }
]

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

const welcomeMessage = "\nWelcome to Smile Gupta's Quiz " + userName + ". Hope you and your loved ones are safe in this testing times.\n"

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

  console.log(chalk.bold.red('\nLeaderBoard\n'))

  for(let i=0;i<highScores.length;i++)
  {
    console.log(chalk.yellow.bold(highScores[i].position+") "+ highScores[i].name + " -> " + highScores[i].score));
  }

  for(let i = 0; i<highScores.length; i++)
  {
  if(highScores[i].score<score)
    {
    console.log('\nCongrats! You have beaten '+ highScores[i].name);
    console.log('Please send your winning screenshot!')
    }
  }

}
else{
  console.log(chalk.bold.greenBright("\nOk! Bie have a great Day!"))
}
