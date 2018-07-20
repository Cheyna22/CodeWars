var gimme = function (inputArray) {
  let sortedArray = inputArray.slice().sort((a,b) => a - b);
  for(let i in sortedArray) {
    if(inputArray[i] === sortedArray[1]) {
      return inputArray.indexOf(sortedArray[1]);
    }
  }
};