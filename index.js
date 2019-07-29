function lowerCaseDrivers(drivers) {
  const lowRiders = drivers.map(function (driver) {
    return driver.toLowerCase();
  })
  return lowRiders;
}


function nameToAttributes(drivers) {
  const drobjects = drivers.map( function (driver) {
    return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
  })
  return drobjects;
}

function attributesToPhrase(drivers) {
  const drobjects = drivers.map( function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  return drobjects;
}
