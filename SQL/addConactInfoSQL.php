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
      $respondedToEmail = test_input($_POST['respondedToEmail']);


      //Adds it to the database
      $query = "INSERT INTO contactForm (fullname, email, telephone, comment, currentDate, respondedToEmail) VALUES ('$fullname', '$email','$telephone','$comment', CURDATE(), '$respondedToEmail')";
      $result = $database->query($query) OR die("Failed query $query");
      echo $database->error."<p>";
      echo $result;



      $to = $email;
      $subject = "Contact Form - Confirmation";
      $txt = "Thank you very much for your contact form request - we will get back to you shortly";
      $headers = 'From: cheryl@cheryltorrance.co.uk' . "\r\n" .
                  'Reply-To: cheryl@cheryltorrance.co.uk';
      mail($to,$subject,$txt,$headers);


      $to = 'cheryl@cheryltorrance.co.uk';
      $subject = 'Contact form Filled out';
      $txt = $comment;
      $headers = "From: $email" . "\r\n" .
                'Reply-To: $email';

        mail($to,$subject,$txt,$headers);



?>
