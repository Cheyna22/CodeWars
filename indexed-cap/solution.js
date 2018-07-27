function capitalize(string, arr){
  let stringArray = string.split('');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < stringArray.length)
      stringArray[arr[i]] = stringArray[arr[i]].toUpperCase();
  } 
  return stringArray.join('');
};