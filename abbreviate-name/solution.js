function abbrevName(name){
  let people = name.split(" ");
  return (people [0][0] + "." + people[1][0]).toUpperCase();
}