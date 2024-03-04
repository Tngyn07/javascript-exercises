const reverseString = function(string) {

let array = string.split('');
let arrayLength = array.length;
let newArray = [];

for (let i = 0; i < array.length; i++) {
    newArray.push(array[--arrayLength]);
}

let reversedString = newArray.join('');
return reversedString;


};

// Do not edit below this line
module.exports = reverseString;
