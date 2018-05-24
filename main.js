var Word = require("./word.js");
var color = require("colors");
var inquirer = require("inquirer");
var isLetter = require("is-letter");
var selectWord = "";
var newWord = "";


var wordBank = ["hello", "goodbye", "sleepy", "grumpy", "beef", "taco", "dorito"];
var guessLetters = [];


var guessesLeft = 10;


function renderGame()  {
    guessesLeft = 10;
    guessLetters = [];
    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    newWord = new Word(selectWord);
    console.log(color.red`
---------------------------------------       
        Guess the things!!!!
---------------------------------------
    `);
    newWord.newLetters();
    newWord.wordRender();
    gameAsk();
}

function playAgain()  {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to play again?",
            name: "playAgain"
        }
    ]).then(function(result)  {
        if(result.playAgain === false)  {
            console.log(`
            Goodbye
        Thanks for playing
        `);
        return;
        }
        renderGame();
    })
}


function gameAsk()  {
    console.log(`
        Guessed Letters: ${guessLetters}
        Guesses Left: ${guessesLeft}
    `)    
        if(guessesLeft > 0 && newWord.complete === false)  {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Guess a letter",
                    name: "letter",
                    validate: function(element)  {
                        if(isLetter(element))  {
                            return true;
                        } else  {
                            return false;
                        }
                    }
                }
            ]).then(function(answers)  {
                var input = (answers.letter)
                var valid = false;
                for(var i = 0; i < guessLetters.length; i++)  {
                    if(guessLetters[i] === input)  {
                        valid = true;
                    }
                }
                if(valid === false)  {
                    guessLetters.push(input);
                    var found = newWord.checkGuess(input)
                    if(found === 0)  {
                        console.log(`
            YOUR GUESS WAS INCORRECT
                        `);
                        newWord.wordRender();
                        guessesLeft--;
                    }  else  {
                        console.log(`
            YOUR GUESS WAS CORRECT
                        `)
                        newWord.wordRender();
                        newWord.checkComplete();
                    } 
                    gameAsk();  
                } else  {
                    console.log(`
                    
            YOU ALREADY GUESSED THAT LETTER
                    
                    `)
                    gameAsk();
                }

                
       
            })
            
        } 
        else if(guessesLeft === 0)  {
            console.log(`
        You Lost :(
        The word was: ${newWord.chosenWord.toUpperCase()}
        `)
        playAgain();
        }  
        else  if(newWord.complete === true) {
            console.log(`
        Congrats!!!! :)
        You guessed the word: ${newWord.chosenWord.toUpperCase()}
            `)
        playAgain();
        }
    }
    










   

renderGame();