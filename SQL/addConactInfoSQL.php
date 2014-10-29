<?php
include("../db/connect_database.php");

    //Makes sure nothing bad goes into database;
    function test_input($data)
    {
       $data = trim($data);
       $data = stripslashes($data);
       $data = htmlspecialchars($data);
       return $data;
    }

      //Reciving the Text fields
      $fullname = test_input($_POST['fullname']);
      $email = test_input($_POST['email']);
      $telephone = test_input($_POST['telephone']);
      $comment = test_input($_POST['comment']);

      //Adds it to the database
      $query = "INSERT INTO contactForm (fullname, email, telephone, comment, currentDate) VALUES ('$fullname', '$email','$telephone','$comment', CURDATE())";
      $result = $database->query($query) OR die("Failed query $query");
      echo $database->error."<p>";
      echo $result;

?>
