<?php

echo "Post Items: ".count($_POST)."\n";

foreach($_POST as $key => $value){
	echo "\t".$key.": ".$value."\n";
}

echo "Get Items: ".count($_GET)."\n";

foreach($_GET as $key => $value){
	echo "\t".$key.": ".$value."\n";
}

echo "Files Items: ".count($_FILES)."\n";

foreach($_FILES as $key => $value){
	if(is_array($value)){
		echo "\t".$key.": \n";
		foreach($value as $subkey => $subvalue){
			echo "\t\t".$subkey.": ".$subvalue."\n";
		}
	}else{
		echo "\t".$key.": ".$value."\n";
	}
}
