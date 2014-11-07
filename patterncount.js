// A function for finding the frequency of given pattern in a given text
var testText = 'ATACGCGCGATACGCGATACGCGATAATACGCGACACATA';


function patternCount(text, pattern){
	var count = 0;
	
	for(var i = 0; i < text.length - pattern.length; i++){
		//console.log(text.substr(i, pattern.length));	
		if(text.substr(i, pattern.length) === pattern){
			count++;
		}	
	}
	
	return count;
}

console.log(patternCount(testText, 'ATA'));
