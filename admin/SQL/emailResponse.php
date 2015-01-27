<?php
include("../../db/connect_database.php");

//Makes sure nothing bad goes into database;
function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//Reciving the Text fields
$name = test_input($_POST['name']);
$customerEmail = test_input($_POST['customerEmail']);
$yourEmail = test_input($_POST['yourEmail']);
$messsage = test_input($_POST['messsage']);


      $to = $customerEmail;
      $subject = 'Responce to Contact Form';
      $txt = $messsage;
      $headers = "From: $yourEmail" . "\r\n" .
                'Reply-To: $yourEmail';

        mail($to,$subject,$txt,$headers);
?>