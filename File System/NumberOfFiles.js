/* Problem return number of file and directory in given directory */

var fs=require('fs');
var numberDir=0;
var numberFiles=0;

var path=process.argv[2];
path=fs.realpathSync(path); // removing the links from the given path and making it absolute
console.log("This Directory:"+ path+" constains ");

fs.readdir(path,function(err,files){  // getting the collection of file in path dir
	if(err) throw err;
	for(var i=0;i<files.length;i++){
		var currentPath=""+path+"/"+files[i];
		var check=fs.statSync(currentPath); 
		if(check&&check.isDirectory()){
			numberDir++;
		}
		if(check&&check.isFile()){
			numberFiles++;
		}
	}
console.log(numberDir+" Directories and "+numberFiles+" Files.");

})
