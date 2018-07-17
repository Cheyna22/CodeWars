function isNice(arr){
  let truthArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
      truthArr.push(true);
      console.log(truthArr);
    } else {
      truthArr.push(false);
      console.log(truthArr);
    }
  }
  if (truthArr.includes(false) || arr.length < 1) {
    return false;
  } else {
    return true;
  }
}
