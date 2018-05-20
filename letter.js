

function Letter(letter)  {
    this.letter = letter
    this.guess = false;  
}

Letter.prototype.letterSwitch = function()  {
    if(this.guess === true)  {
       return this.letter;
    }  else  {
       return "-";
    }
}

module.exports = Letter;