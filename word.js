var Letter = require("./letter.js");
var Word = function(chosenWord) {
    this.chosenWord = chosenWord;
    this.letterArr = [];
    this.complete = false;
    this.newLetters = function()  {
        for(var i = 0; i < this.chosenWord.length; i++)  {
            this.letterArr.push(new Letter(this.chosenWord[i]));
        }
    }
    this.wordRender = function()  {
        var display = " ";
        for(var i = 0; i < this.letterArr.length; i++)  {
            display += this.letterArr[i].letRender();
        }
        console.log(`
--------------------------------------
        ${display.toUpperCase()}
--------------------------------------
        `)
    }
    this.checkGuess = function(ltr)  {
        this.correct = 0
        for(var i = 0; i < this.letterArr.length; i++)  {
           if(this.letterArr[i].letter === ltr)  {
                this.letterArr[i].guess = true;
                this.correct++
                
           }
        }
        return this.correct
        
    }
    this.checkComplete = function() {
        if(this.letterArr.every(function(lttr){
          return lttr.guess === true;
        })){
          this.complete = true;
          return true;
          
        }
        
      };
    
};

               
            
module.exports = Word;