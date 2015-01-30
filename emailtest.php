<?php

$to = "nickliffen@hotmail.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "nickliffen@hotmail.com" . "\r\n" .
"CC: UP653591@myport.ac.uk";

mail($to,$subject,$txt,$headers);


?>
