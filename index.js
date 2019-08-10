// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(element => element.toLowerCase());
}

 function nameToAttributes(arr) {
  return arr.map(element => Object.assign({
    firstName: element.split(" ")[0],
    lastName: element.split(" ")[1]
  }));
}

 function attributesToPhrase(arr) {
  return arr.map(element => element.name + " is from " + element.hometown);
}
