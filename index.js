
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(names) {
    return names.map(function(name){
        const nameSingle = name.split(" ")
        return {firstName: nameSingle[0], lastName: nameSingle[1]}
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        const name = driver.name
        const hometown = driver.hometown
        return `${name} is from ${hometown}`
        })
}