var Game = function()  {
    this.wordBank = ["hello", "goodbye", "sleepy", "grumpy", "beef", "taco", "dorito"]
    this.getWord = function()  {
        console.log(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
    }
}

module.exports = Game;