var Letter = function(letters){

  this.current = "?"
  // console.log(this.current);
  this.theLetters = letters;
  this.showsLetter = false;
  this.letterin = function(letter){
    if(this.theLetters == letter){
      this.current = this.theLetters; 
      return true;
    }
      return false;
  }
  
  this.letterShows = function(){
    return this.current;
  }
};
// var sample = new Letter("y");
// console.log(sample.theLetters);

module.exports = Letter;