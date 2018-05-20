

function Letter(letter)  {
    this.letter = letter
    this.guess = false;  
}

Letter.prototype.letterSwitch = function()  {
    if(this.guess === true)  {
       return this.letter;
       console.log(this.letter)
    }  else  {
       return "-";
       console.log("-")
    }
}

module.exports = Letter;