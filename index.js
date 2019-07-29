// Code your solution in this file.

const drivers = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];

function lowerCaseDrivers(array) {
  let lowerCase = [];
  array.map(function(name) {
    lowerCase.push(name.toLowerCase());
  });
  return lowerCase;
}

function nameToAttributes(array) {
  return array.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
