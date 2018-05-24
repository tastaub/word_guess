function Random()  {
    this.currentWord = "",
    this.wordBank = ["hello", "goodbye", "sleepy", "grumpy", "beef", "taco", "dorito"],
    this.getWord = function()  {
        var num = Math.floor(Math.random() * this.wordBank.length);
        this.currentWord === this.wordBank[num]
        
        console.log(this.currentWord)

        
       
    }

}

module.exports = Random;

var select = new Random();
select.getWord();