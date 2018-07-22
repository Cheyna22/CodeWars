function filter_list(l) {
  const noStrings = l.filter(x => typeof x === 'number');  
  return noStrings;
}