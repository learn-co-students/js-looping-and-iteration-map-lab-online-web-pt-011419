// Code your solution in this file.
function lowerCaseDrivers(array) {
    
    const lowerCase = array.map(function(element) {
        return element.toLowerCase()
    })

    return lowerCase
}

function nameToAttributes(array) {

    const arrayAttributes = array.map ( function (element) {
        let splitElement = element.split(' ')
        return {firstName: splitElement[0], lastName: splitElement[1]}
    });

    return arrayAttributes;
}

function attributesToPhrase(array) {
    let phrase = array.map(function(obj){
        return `${obj.name} is from ${obj.hometown}`
    })

    return phrase
}