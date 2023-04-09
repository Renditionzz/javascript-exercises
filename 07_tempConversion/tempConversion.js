/*
  Goal: Convert fahrenheit temperature to celcius rounded to one decimal place
  formula: (fahrenheit - 32) * 5/9

  toCelsius(number)
    result = (number - 32) * 5/9

    to get the temp rounded to the first digit, we first need to multiply it by ten and then round it
    after that, we divide by ten to get one rounded digit.

    return the rounded result
*/

const convertToCelsius = function(number) {
  const convertedTemp = (number - 32) * 5/9;
  const roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;
};

/*
  Goal: Convert celcius temperature to fahrenheit rounded to one decimal place
  formula: celsius * 9/5 + 32

  toFahrenheit(number)
    f = number * 9/5 + 32
    
    to get the temp rounded to the first digit, we first need to multiply it by ten and then round it
    after that, we divide by ten to get one rounded digit.

    return the rounded result
*/
const convertToFahrenheit = function(number) {
  const convertedTemp = number * 9/5 + 32;
  const roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
