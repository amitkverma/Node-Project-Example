var fs=require('fs');
var fileName=process.argv[2];
fs.mkdir(fileName,function(err){ 		// Creating a new Directory 
	if(err){
		print(err);
	}else{
		console.log("Directory is Created.");		
	}
});
function print(err){
	if(err.code=='EEXIST'){
		console.log("File is already Exits");
	}else{
		console.log("Unknown Error!");
	}
}