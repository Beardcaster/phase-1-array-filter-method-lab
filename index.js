const drivers = ['taco', 'burrito', 'hamburger', 'TacO', 'TAcO', 'taco', 'tac'];

function findMatching(array, searchString) {
    const nameMatcher = array.filter(driver => {        
         return driver.toLowerCase() === searchString.toLowerCase();
    })
    return nameMatcher;
}

function fuzzyMatch(array, searchString) {
    const fuzzyMatcher = array.filter(driver => {

        return driver[0] ===  searchString [0]
    })

    return fuzzyMatcher
}

function matchName(obj, searchString) {
    const nameFinder = obj.filter(driver => {
        return driver.name === searchString        
    })
    return nameFinder;
}


console.log(fuzzyMatch(drivers, 'tac'))
console.log(findMatching(drivers, 'taco'))