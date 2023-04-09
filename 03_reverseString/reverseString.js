/*
    Goal: write a function that takes a string and returns the reverse of the string.

    function(string)
        create a storage for the new string
        for each position in the string
            get the last character of the string, minus what iteration we're on
            add it to our new string
        return new string
            
*/

const reverseString = function(string) {
    let reversed = "";
    for (let i = 0; i < string.length; i++){
        let character = string.charAt(string.length - 1 - i);
        reversed += character;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
