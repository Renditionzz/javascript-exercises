/*
    Goal: Repeat a string any amount of times.
    
    create a location to store the new string.
    for each iteration up to the number of times allowed
        add the string to the new string
    return the new string
*/


const repeatString = function(string, number) {
    if (number < 0){
        return "ERROR";
    } 
    
    let result = "";
    for (let i = 0; i < number; i++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
