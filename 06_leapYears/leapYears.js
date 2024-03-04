const leapYears = function(Year) {

let isLeapYear;

if (Year % 4 !== 0) isLeapYear = false;
else if (Year % 4 === 0){
    if (Year % 100 === 0 && Year % 400 === 0) isLeapYear = true;
    else if (Year % 4 === 0 && Year % 100 !== 0) isLeapYear = true;
    else isLeapYear = false;
}

return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
