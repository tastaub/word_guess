var Word = require("./word.js");

var inquirer = require("inquirer");

var selectWord = "";
var newWord;

var wordBank = ["hello", "goodbye", "sleepy", "grumpy", "beef", "taco", "dorito"]
var guessLetters =[];
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
    var corCount = newWord.correct;
    console.log(guessesLeft);
    console.log(guessLetters);
    var wordLength = newWord.letterArr.length;
    if((guessesLeft > 0) && (!gameOver))  {
        inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter",
				name: "letter"
            }
        ]).then(function(answers)  {
            var charWord = false;
            guessLetters.push(answers.letter);
                            for(var i = 0; i < newWord.letterArr.length; i++)  {
                                if(newWord.letterArr[i].letter === answers.letter)  {
                                    newWord.letterArr[i].guess = true;
                                    newWord.showWord();
                                    charWord = true;
                                    newWord.correct++;
                                    
                                } 
                            } 
                            if(charWord)  {
                                console.log("Correct");
                                console.log("")
                                checkWin(corCount,wordLength)

                            }  else  {
                                console.log("Incorrect");
                                guessesLeft--;
                                checkWin(corCount,wordLength)
                                
                            }
                            
                            })
    } else if((guessesLeft > 0) && (gameOver)) {
        console.log("Winner")
    } else  {
        console.log("You lose")
    }
}

function checkWin(x,y)  {
    if(x===y)  {
        console.log("Winner")
        gameOver = true;
    } else  {
        game();
    }
}
// function endGame()  {
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "Would you like to play again? (y/n)",
//             name: "prompt"
//         }
//     ]).then(function(answer)  {
//         if(answer.prompt === "y")  {
//             renderGame();
//             game();
//         } else  {
//             console.log("Thanks for playing");
//         }
//     })
// }

renderGame();
game();