function capitalize(s){
  let odd = '';
  let even = '';
  for (let i = 0; i < s.length; i++)
    if (i % 2 === 0)
    {
      odd += (s[i].toUpperCase());
      even += (s[i].toLowerCase());
    } else {
      even += (s[i].toUpperCase());
      odd += (s[i].toLowerCase());
    }
  return [odd , even];
};