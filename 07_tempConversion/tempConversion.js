const ftoc = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5 / 9);
  return +celsius.toFixed(1);
};

const ctof = function(celsius) {
  fahrenheit = (celsius * (9 / 5)) + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
