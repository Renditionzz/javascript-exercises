/*
    Create a function to determine if a year is a leap year or not.

    Leap year rules:
        divisible by 4
        NOT divisible by 100
        divisible by 400

    leapYear(year)
        if year % 4 is 0 and year % 100 != 0 and year % 400 is 0
            it is a leap year
        it is not a leap year
*/

const leapYears = function(year) {
    if (year % 4 == 0 && ( year % 100 != 0 || year % 400 == 0)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
