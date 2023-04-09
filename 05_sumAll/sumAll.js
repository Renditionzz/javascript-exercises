/*
    Goal: Create a function that takes takes a starting integer and and ending integer and it adds
    from the starting integer up to the ending integer, incrementing by one each time.

    sumAll(starting,ending)
        if either of the numbers are less than zero or they're not a number
            return error
        create a location to store the result
        for each number from starting to ending
            add that number to the result
        return the result
*/

const sumAll = function(start,end) {
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number"){
        return "ERROR";
    }
    let result = 0;
    if (start < end){
        for (let i = start; i <= end; i++){
            result += i;
        }
    } else {
        for (let i = end; i <= start; i++){
            result += i;
        }  
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
