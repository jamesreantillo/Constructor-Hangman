var Letter = require('./letter.js');

var Word = function(word){
  
  this.word = word;
  this.guessedWord = [];
  this.guesses = [];

  
  this.get = function(){
    for(var i = 0; i <this.word.length; i++){
      var theNewLetter = new Letter(this.word[i]);
      this.guessedWord.push(theNewLetter);

    }
  }
  this.get();


  this.wordMatch = function(){
    for(var i = 0; i < this.word.length; i++){
      
      if(this.word.charAt(i) != this.guessedWord[i].current){
        return false;
      }

    }
        return true;
  }
 
  this.correct = function(guessLetter){
    for(var i = 0; i <this.guesses.length; i++){
      if(guessLetter == this.guesses[i]){
        return true;
      }
    }
    console.log(guessLetter);
    var added = false;

    this.guesses.push(guessLetter);
    
    for(var i = 0; i <this.guessedWord.length;i++){
      
      if(this.guessedWord[i].letterin(guessLetter)){
        this.guessedWord[i].showsLetter = true;
        added = true;
      } 
    }
    return added;

  }
  
  this.show = function(){
    var emptyString = "";
      
    for(var i = 0; i <this.guessedWord.length; i++){
      emptyString += this.guessedWord[i].current + " ";
    }
    return emptyString;
  }
  
} 
module.exports = Word;
