var fs=require('fs');
var filepath=process.argv[2];
fs.stat(filepath,function(err1,stat){
	if(err1) throw err1;
	if(stat.isFile()){
		fs.readFile(filepath,'utf8',function(err2,data){  // encoding is required since it store in binary buffer 
			if(err2) throw err2;
			console.log(data);
		})
	}
})