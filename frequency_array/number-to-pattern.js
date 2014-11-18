// COnverts a number to a pattern
// index: // A number encoding of a pattern like 45
// K: // Is the length of the string that the number represents
var numberToSymbol = require('./number-to-symbol.js');

function numberToPattern(index, k){
  var prefixIndex, remainder, prefixPattern, symbol;

  // Base case
  if(k === 1) return numberToSymbol(index);
 
  //Get the quotient of index divided by k 
  prefixIndex = Math.floor(index/k);

  // Get the remainder of index divided by k
  remainder = index % k;

  // Recursively call numberToPattern
  prefixPattern = numberToPattern(prefixIndex, k - 1);

  symbol = numberToSymbol(remainder);

  // Concatenate
  return prefixPattern.concat(symbol);

}

module.exports = numberToPattern;
