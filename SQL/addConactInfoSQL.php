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

//--------------------------------
      $to = $email;
      $subject = "Contact Form - Confirmation";
      // message
      $message = "
                  <html>
                  <head>
                    <title>Contact Form - Confirmation</title>
                  </head>
                  <body>
                    <p>
                      Dear: $fullname,
                        Thank you for submitting your form through my website. I will get back to you as soon as I can. If you have any questions, in the mean time please email me at: Cheryl@cheryltorrance.co.uk,
                        Blessings,
                        Cheryl.
                      </p>
                  </body>
                  </html>
      ";


      $headers  = 'From: Cheryl Torrance <cheryl@cheryltorrance.co.uk>' . "\r\n";
      $headers .= 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

      mail($to,$subject,$message,$headers);

//--------------------------------

      $to = 'cheryl@cheryltorrance.co.uk';
      $subject = 'Contact form Filled out';
      $txt = $comment;
      $headers = "From: $email" . "\r\n" .
                'Reply-To: $email';

        mail($to,$subject,$txt,$headers);



?>
