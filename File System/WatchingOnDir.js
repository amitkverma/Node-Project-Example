var fs=require('fs');
var folderToWatch=process.argv[2];

fs.stat(folderToWatch,function(err){ // checking folderName exits or not
	if(err) throw err;
	fs.watch(folderToWatch,function(eve,fileName){ // watching on folderName
		console.log(eve+" :"+fileName);
	})	
})
