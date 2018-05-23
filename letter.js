function Letter(letter)  {
    this.letter = letter
    this.guess = false;  
    this.letRender = function()  {
        if(this.guess === true)  {
            return " " + this.letter + " ";
        }

        return " * "
    }
}


module.exports = Letter;