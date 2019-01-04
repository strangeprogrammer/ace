//Taken (with love) from
//	https://stackoverflow.com/a/4033310
//and
//	https://www.w3schools.com/xml/xml_http.asp
function requestAsync(method,url,callback,data){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4
		&&xmlHttp.status==200){
			callback(xmlHttp.responseText);
		}
	}
	xmlHttp.open(method,url,true);//'true' for asynchronous
	xmlHttp.send(data);
}

function httpGetAsync(url,callback,data){
	requestAsync("GET",url,callback,data);
}

function httpPostAsync(url,callback,data){
	requestAsync("POST",url,callback,data);
}

console.log("'xhr.js' loaded successfully.")
