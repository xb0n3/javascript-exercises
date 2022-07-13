const removeFromArray = function(...args) {
  const givenArray = args[0];
  const newArray = [];

  givenArray.forEach(item => {
    if (!args.includes(item)) {
      newArray.push(item);
    };
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
