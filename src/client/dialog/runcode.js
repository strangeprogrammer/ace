//Depends upon	'src/client/console_hook/hook.js'
//	and	'src/client/dialog/xhr.js'

//Function to extract code
var runit=function(){
	var code=editor.getValue();
	var formData=new FormData();
	var codeBlob=new Blob([code],{type:"text/plain"});
	stdout("codeblob:\n"+
		"size: "+codeBlob.size+"\n"+
		"type: "+codeBlob.type+"\n");
	formData.set("code",codeBlob,"thefile");
	
	stdout("Sending:\n"+
		code);
	
	httpPostAsync("./echoFile.php",function(responseText){
		stdout("Response:\n"
			+responseText+"\n");
	},formData);
}

loadSuccess("src/client/dialog/runcode.js");
