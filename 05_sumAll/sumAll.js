const sumAll = function(a, b) {
  y = null;
  z = null;
  const array = [];

  if (typeof a == 'number' && typeof b == 'number' && a > 0 && b > 0) {
    if (a > b) z = a, y = b;
    else y = a, z = b;

    i = y;

    while (i <= z) {
      array.push(i)
      i++;
    };

    return array.reduce((total, item) => {
      return total + item;
    }, 0);
  } else {
    return 'ERROR';
  };
};

// Do not edit below this line
module.exports = sumAll;
