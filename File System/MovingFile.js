var fs=require('fs');
var fileName="test.txt";
var newpath="../"+"/"+fileName;
var oldpath="./"+fileName;
fs.rename(oldpath,newpath,function(err){
	if(err) throw err;
})