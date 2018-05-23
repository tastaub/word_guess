var Word = require("./word.js");

var inquirer = require("inquirer");

var selectWord = "";
var newWord = "";


var wordBank = ["hello", "goodbye", "sleepy", "grumpy", "beef", "taco", "dorito"]
var guessLetters = [];


var guessesLeft = 10;


function renderGame()  {
    guessesLeft = 10;
    guessLetters = [];
    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    newWord = new Word(selectWord);
    console.log(newWord.chosenWord);
    newWord.newLetters();
    newWord.wordRender();
    gameAsk();
}


function gameAsk()  {
    console.log(guessesLeft)    
        if(guessesLeft > 0 && newWord.complete === false)  {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Guess a letter",
                    name: "letter"
                }
            ]).then(function(answers)  {
                guessLetters.push(answers.letter);
                var found = newWord.checkGuess(answers.letter)
                if(found === 0)  {
                    console.log("You Lose");
                    newWord.wordRender();
                    guessesLeft--;
                }  else  {
                    console.log("You Win");
                    newWord.wordRender();
                    newWord.checkComplete();
                } 
                gameAsk();         
            })
            
        } 
        else if(guessesLeft === 0)  {
            console.log("Game Over, you lost!!!!")
        }  
        else  if(newWord.complete === true) {
            console.log("You were the winner, WAY TO GO!!!!!!")
        }
    }
    










   

renderGame();