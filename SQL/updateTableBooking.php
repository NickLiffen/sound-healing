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

?>
