// Interface for number to pattern

var numberToPattern = require('./number-to-pattern.js');


var index = process.argv[2], k = process.argv[3];

console.log(numberToPattern(index, k));
