// Covert a number 0 1 2 3 to a symbol A C G T respectively

function numberToSymbol(num){

  var symbol = undefined;

  switch(num){
    case 0:
      symbol = 'A';
    break;
    case 1:
      symbol = 'C';
    break;
    case 2:
      symbol = 'G';
    break;
    case 3:
      symbol = 'T';
    break;
    default:
        symbol = undefined;
  }

  return symbol;
}

module.exports = numberToSymbol;
