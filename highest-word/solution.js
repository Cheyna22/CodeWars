function high(x){
  let myArray = x.split(' ');
  let highScoreWord = '';
  let highScoreNum = 0;
  let currentScore = 0;
  
  for(let i = 0; i < myArray.length; i++) {
    currentScore = 0;
    for(let b = 0; b < myArray[i].length; b++) {
    currentScore += (myArray[i].charCodeAt(b) - 96);
    }
    if(highScoreNum < currentScore) {
     highScoreNum = currentScore;

     highScoreWord = myArray[i];
     console.log(highScoreWord, highScoreNum);
    }
  }
  return highScoreWord;
}