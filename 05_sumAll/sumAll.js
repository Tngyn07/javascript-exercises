const sumAll = function(firstNumb, secondNumb) {

    let sumOfAllNumb = 0;
    let temporary = firstNumb;

    if (firstNumb < 0 || secondNumb < 0) {return `ERROR`}
    else if (typeof firstNumb !== 'number' || typeof secondNumb !== 'number') {return `ERROR`}
    else if (firstNumb > secondNumb) {
        firstNumb = secondNumb;
        secondNumb = temporary;
    }
        
    for (i = firstNumb; i <= secondNumb; i++) {
            sumOfAllNumb = sumOfAllNumb + i;
        }
    
    return sumOfAllNumb;

};

// Do not edit below this line
module.exports = sumAll;

// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10