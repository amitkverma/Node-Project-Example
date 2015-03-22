/* Checks If the Path is Directory, file, FIFO, Socket or Device */

var fs=require('fs');
var path=__dirname;
fs.stat(path,function(err,stat){
	if(err){
		console.log(err);
		return;
	}
	console.log("Path:"+path+" "+stat.isDirectory());
})
