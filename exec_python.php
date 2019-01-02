<?php
#Php file to run the bash script which runs the exec_python.py file
if ($_GET['run']) {
  # This code will run if ?run=true is set.
  exec("exec_python.sh");
}
?>

