/* Gives the absolute path with no symbolic link attached */

/* For absolute path */
var fs=require('fs');
fs.realpath('/home/',function(err, resolvedPath){
	if(err) {
		console.log(err)
		return;
	};
	console.log("Path 1: "+resolvedPath);
})

/* For realtive Path */
fs.realpath('./testpath',function(err,resolvedPath){
	if(err) {
		console.log(err)
	};
	console.log("Path 2: "+resolvedPath);
})

/* Removal ofSymbolic link */
fs.realpath('../../',function(err,resolvedPath){   	// '../' link is used to goback from current directory
	if(err){
		console.log(err);
	}
	console.log("Path 3: "+resolvedPath);
})

/* NOTE: order of output may be arbitary becouse they are asyncronus functiions */