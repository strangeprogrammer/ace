<?php

foreach($_FILES as $key => $file){
	readfile($file["tmp_name"]);
}
