var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;

  prompt.start(); 
  startGame(userGuess);
    function startGame(guesses){
      console.log("You have " + guesses + " guesses left");
      if(hangmanGame.currentWord.wordMatch() == true){
        console.log("Winner");
        return;
      }
      
      if(guesses <= 0){
        console.log("Nice try!!!");
        return;
      }

    
    console.log(hangmanGame.currentWord.show());


  prompt.get(["letter"], function(err, result){
    if(err){
      return err;
    }
    
    if(hangmanGame.currentWord.correct(result.letter) == false){
      guesses --;
    }
    startGame(guesses);

  });
}