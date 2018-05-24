var Word = require("./word.js");
var color = require("colors");
var inquirer = require("inquirer");
var isLetter = require("is-letter");
var selectWord = "";
var newWord = "";

var wordArr = "";
var wordBanks = {
    first: ["hello", "goodbye", "sleepy", "grumpy", "beef", "taco", "dorito"],
    second: ["spanish", "italian", "french", "german", "russian", "english", "latin"],
    third: ["cold", "hot", "rain", "tornado", "hurricane", "cyclone", "flood", "snow"]
}



var guessLetters = [];


var guessesLeft = 10;


function renderGame()  {
    
    topicSelect();
    console.log(topicSelect());
    
    // guessesLeft = 10;
    // guessLetters = [];
    // var key = wordBanks.wordBank
    // selectWord = key[Math.floor(Math.random() * key.length)];
    // newWord = new Word(selectWord);
    // console.log(newWord);
    // console.log(color.blue(`     
    //     IT'S SOMETHING!!!!`));
    // newWord.newLetters();
    // newWord.wordRender();
    // gameAsk();
}

function topicSelect()  {
    inquirer.prompt([
        {
            type: "list",
            name: "size",
            message: "Pick something",
            choices: ["first", "second", "third"],
            filter: function(val)  {
                return val.toLowerCase();
            }
        }
    ]).then(function(answer)  {
        return answer.size;
    })
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
            console.log(color.rainbow(`
            ★─▄█▀▀║░▄█▀▄║▄█▀▄║██▀▄║─★
            ★─██║▀█║██║█║██║█║██║█║─★
            ★─▀███▀║▀██▀║▀██▀║███▀║─★
            ★───────────────────────★
            ★───▐█▀▄─ ▀▄─▄▀ █▀▀──█───★
            ★───▐█▀▀▄ ──█── █▀▀──▀───★
            ★───▐█▄▄▀ ──▀── ▀▀▀──▄───★
        `));
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
                        console.log(color.red(`
            YOUR GUESS WAS INCORRECT
                        `));
                        newWord.wordRender();
                        guessesLeft--;
                    }  else  {
                        console.log(color.green(`
            YOUR GUESS WAS CORRECT
                        `))
                        newWord.wordRender();
                        newWord.checkComplete();
                    } 
                    gameAsk();  
                } else  {
                    console.log(color.red(`
                    
            YOU ALREADY GUESSED THAT LETTER
                    
                    `))
                    gameAsk();
                }

                
       
            })
            
        } 
        else if(guessesLeft === 0)  {
            console.log(color.red(`
        You Lost :(
        The word was: ${newWord.chosenWord.toUpperCase()}
        `))
        playAgain();
        }  
        else if(newWord.complete === true) {
            console.log(color.green(`
        Congrats!!!! :)
        You guessed the word: ${newWord.chosenWord.toUpperCase()}
            `))
        playAgain();
        }
    }
    










   
topicSelect();
// renderGame();