/* Reads directory and return all the files in file array */

var fs=require('fs');
fs.readdir(__dirname,function(err, files){
	if(err){
		console.log(err);
		return;
	}	
	console.log(files);
})