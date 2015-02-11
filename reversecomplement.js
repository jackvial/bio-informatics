function reverseComplement(dnaString){

  var reverseC = [];
  var dnaArr = dnaString.split('');

  for(var i = 0; i < dnaArr.length; i++){
	
	switch(dnaArr[i]){
		case 'A':
			reverseC.push('T');
		break;
		case 'T':
			reverseC.push('A');
		break;
		case 'C':
			reverseC.push('G');
		break;
		case 'G':
			reverseC.push('C');
		break;
	}
  }
  
  // Reverse and rejoin the the string	
  return reverseC.reverse().join('');	
}

module.exports = reverseComplement;