var fs=require('fs');

fs.writeFile('test.txt','This is the content of file',function(err){
	console.log("Writing is done");
})