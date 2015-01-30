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
      $ID = test_input($_POST['IDtoUpdate']);
      $name = test_input($_POST['name']);
      $price = test_input($_POST['price']);
      $comment = test_input($_POST['comment']);
      $customerName = test_input($_POST['customerName']);
      $customerEmail = test_input($_POST['customerEmail']);
      $customerTelephone = test_input($_POST['customerTelephone']);

      //Adds it to the database
      //Runs a query that updates the product.
      $data = "UPDATE class SET classparticipants = classparticipants - 1 WHERE id = '$ID'";
      $result = $database->query($data) OR die("Failed query $query");
      echo $database->error."<p>";
      echo $result;


      //Adds it to the database
      $query = "INSERT INTO bookings (classname, customername, customeremail, customerphone, customercomment) VALUES ('$name', '$customerName','$customerEmail', '$customerTelephone', '$comment')";
      $result = $database->query($query) OR die("Failed query $query");
      echo $database->error."<p>";
      echo $result;


      $to = $email;
      $subject = "Contact Form - Confirmation";
      // message
      $message = "
                  <html>
                  <head>
                    <title>Booking - Confirmation</title>
                  </head>
                  <body>
                    <p>
                      Dear: $customerName,
                        Thank you for booking with Thank you for booking this event with me!  Please note, this email reserves your space.  Payment methods will be sent to you and your booking will be confirmed by email once your payment is received,
                        Your class Name is as followed: <b>Class Name:</b> $name, if you have any questions please email me at cheryl@cheryltorrance.co.uk or visit the website.
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

?>
