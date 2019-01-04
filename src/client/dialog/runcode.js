//Function to extract code
var runit=function(){
	var code=editor.getValue();
	var formData=new FormData();
	var codeBlob=new Blob([code],{type:"text/plain"});
	console.log("codeblob:\n"+
		"size: "+codeBlob.size+"\n"+
		"type: "+codeBlob.type+"\n");
	formData.set("code",codeBlob,"thefile");
	
	console.log("Sending:\n"+
		code);
	
	httpPostAsync("./echoFile.php",function(responseText){
		console.log("Response:\n"
			+responseText+"\n");
	},formData);
}

console.log("'runcode.js' loaded successfully.")
