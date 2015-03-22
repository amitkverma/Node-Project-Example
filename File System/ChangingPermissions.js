var fs=require('fs');
var filepath=process.argv[2];
fs.chown('test.txt',/* user id */1000,/* group id */1001,function(err){
	if(err) throw err;
})