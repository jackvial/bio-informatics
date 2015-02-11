function patternCount(text, pattern){

	var count = 0;
	
	for(var i = 0; i < text.length - (pattern.length - 1); i++){
		//console.log(text.substr(i, pattern.length));	
		if(text.substr(i, pattern.length) === pattern){
			count++;
		}	
	}
	
	return count;
}

module.exports = patternCount;