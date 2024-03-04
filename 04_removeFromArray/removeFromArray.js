// const removeFromArray = function(givenArray, ...manyMoreArgs) {

//     for(let i = 0; i < manyMoreArgs.length; i++) {

//         let valueToRemove = manyMoreArgs[i];
//         //The line below finds the first instance of the same element from manyMoreArgs into givenArray
//         let indexToRemove = givenArray.indexOf(valueToRemove);
        
        
//     while (indexToRemove !== -1){ 
//         givenArray.splice(indexToRemove,1)
//         indexToRemove = givenArray.indexOf(valueToRemove);
//          };
//     }

//     return givenArray;
// };

const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val));
};



// Do not edit below this line
module.exports = removeFromArray;
