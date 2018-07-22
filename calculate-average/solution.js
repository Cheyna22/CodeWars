function find_average(array) {
  const avgArray = array.reduce((accumulator, currentValue) => 
    accumulator + currentValue) / array.length;
  return avgArray;
}