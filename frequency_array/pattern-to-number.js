// Covert a pattern to a number
var symbolToNumber = require('./symbol-to-number.js');

function patternToNumber(pattern){
  var num = 0;
  var symbol = '';

  // Return when there are no characters left
  if(pattern.length < 1){
    return 0;
  }

  // Get the last character
  symbol = pattern.slice(pattern.length - 1);

  // Remove the last character
  pattern = pattern.slice(0, -1);

  //console.log((4 * patternToNumber(pattern)) + symbolToNumber(symbol));
  // Convert recursively
  return (4 * patternToNumber(pattern)) + symbolToNumber(symbol);
}

module.exports = patternToNumber;
