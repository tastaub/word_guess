var Word = require("./word.js");

var inquirer = require("inquirer");

var selectWord = "";
var newWord;

var wordBank = ["hello", "goodbye", "sleepy", "grumpy", "beef", "taco", "dorito"]

var gameOver = false;

var guessesLeft = 10;

function renderGame()  {
    guessesLeft = 10;
    gameOver = false;
    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(selectWord);
    newWord = new Word(selectWord);
    newWord.newLetters();
}

function game()  {
    console.log(newWord);
    if((guessesLeft > 0) && (!gameOver))  {
        inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter",
				name: "letter"
            }
        ]).then(function(answers)  {
            console.log(answers.letter);
            var charWord = false;
            for(var i = 0; i < newWord.letterArr.length; i++)  {
                if(newWord.letterArr[i].letter === answers.letter)  {
                    newWord.letterArr[i].guess = true;
                    charWord = true;
                }
            
            } if(charWord)  {
                console.log("Correct");
            }  else  {
                guessesLeft--

                if(guessesLeft === 0)  {
                    console.log("Game Over")
                }  else  {
                    console.log("Incorrect");
                }
            }
            newWord.showWord();
            game();
        })
    }
}

renderGame();
game();