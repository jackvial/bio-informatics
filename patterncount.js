
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

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;

  console.log(patternCount(data, 'ACTGGCAAC'));
  //console.log('OK: ' + filename);
  //console.log(data)
});



//console.log(patternCount(testText, 'GCG'));
