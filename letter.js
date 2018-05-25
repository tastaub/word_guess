function Letter(letter)  {
    this.letter = letter
    this.guess = false;  
    this.letRender = function()  {
        if(this.guess === true)  {
            return " " + this.letter + " ";
        }

        return " * "
    }
    this.space = function()  {
        if(this.letter === " ")  {
            this.guess = true;
        }
    }
}


module.exports = Letter;