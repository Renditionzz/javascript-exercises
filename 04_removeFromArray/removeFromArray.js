/*
    Goal: Implement a function that takes an array and other arguments and removes those arguments
    from the array.

    removeFromArray()
        for each argument in the function (skip the first argument because that's our array)
            if the argument is a number
                look through the array and remove any of that number from the array
        return the array
*/


const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++){
        array = array.filter(word => word !== arguments[i]);
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
