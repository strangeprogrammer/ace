function stdout(message){
	console.log(message);
}

function stderr(message){
	console.error(message);
}

function loadSuccess(filename){
	console.log("'"+filename+"' loaded successfully.")
}

loadSuccess("src/client/console_hook/hook.js");
