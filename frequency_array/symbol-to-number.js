// Covert a symbol A C G T to a nunber 0 1 2 3 respectively

function symbolToNumber(symbol){
    
    var num = 0;
   
    switch(symbol){
      case 'A':
        num = 0;
      break;
      case 'C':
        num = 1;
      break;
      case 'G':
        num = 2;
      break; 
      case 'T':
        num = 3;
      break; 
      default:
         console.log('This function only knows how to parse A C G or T'); 
         return undefined;
    }

    return num;
}

module.exports = symbolToNumber;
