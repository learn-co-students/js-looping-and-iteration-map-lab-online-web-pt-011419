// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driversName) {
    return driversName.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    const first = name.split(' ')[0];
    const last = name.split(' ')[1];
    return { firstName: first, lastName: last }
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    const name = driver.name;
    const home = driver.hometown;
    return `${name} is from ${home}`
  })
}
