var Letter = require("./letter.js");

var Word = function(chosenWord) {
    this.chosenWord = chosenWord;
    this.letterArr = [];
    this.breakWord = function()  {
        return this.chosenWord.split("");

    }
    this.newLetters = function()  {
        var arr = this.breakWord();
        
        for(i = 0; i < arr.length; i++)  {
            var letters = new Letter(arr[i]);
            this.letterArr.push(letters);
            
        }
        this.showWord()
    }
    
};

Word.prototype.showWord = function()  {
    for(var i=0; i < this.letterArr.length; i++)  {
            var display = this.letterArr[i].letterSwitch();
        
        console.log(display);
    }
}

var sampson = new Word("sampson");
sampson.newLetters();