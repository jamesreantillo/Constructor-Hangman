var randomWords = require('random-words');
// console.log(randomWords)
var Word = require("./word.js");


var random = (randomWords(20));
// console.log(random)



var Game = function(){

  this.randomWord = random[ Math.floor(Math.random() * random.length)];
  this.currentWord = new Word(this.randomWord);

  
}
  

module.exports = Game;
