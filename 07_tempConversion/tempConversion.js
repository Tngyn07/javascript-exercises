const convertToCelsius = function(degreeFarenheight) {
  let celsius = (5/9)*(degreeFarenheight - 32);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(degreeCelsius) {
  let farenheight = ((9/5)*degreeCelsius) + 32;
  return parseFloat(farenheight.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



// Farenheight = 9/5(C) + 32
// Celsius = 5/9(F - 32)