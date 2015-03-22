var fs=require('fs');
var folderName=process.argv[2];

fs.rmdir(folderName,function(err){ // Deleting Dir
	if(err){
		print(err);
	}else{
		console.log("Directory is Deleted.");
	}
})
function print(err){
	if(err.code=='ENOENT'){
		console.log("Directory does not Exits.");		
	}else{
		console.log("Unknown Error!");
	}
}