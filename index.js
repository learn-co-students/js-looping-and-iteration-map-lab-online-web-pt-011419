// Code your solution in this file.
function lowerCaseDrivers(array){
    const drivers = []
    array.map(function(driver) {
      drivers.push(driver.toLowerCase());
    });
    return drivers;
}

function nameToAttributes(array){
    const drivers = []
    array.map(function(driver) {
     let names = driver.split(' ');
    drivers.push( { firstName: `${names[0]}`, lastName: `${names[1]}` });
    });
    return drivers;
}

function attributesToPhrase(array){
    const drivers = []
    array.map(function(driver) {
        drivers.push(`${driver.name} is from ${driver.hometown}`);
    })
    return drivers;
}