<?php
include("../../db/connect_database.php");

// -----------   This Page Adds a Class to the database. this directly gets the variables from javascript then adds to database    -------------


//Makes sure nothing bad goes into database;
function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//Reciving the Text fields
$classname = test_input($_POST['classname']);
$classdescription = test_input($_POST['classdescription']);
$classprice = test_input($_POST['classprice']);
$classdisclamer = test_input($_POST['classdisclamer']);
$serviceChosen = test_input($_POST['serviceChosen']);
$classstarttime = test_input($_POST['classstarttime']);
$classendtime = test_input($_POST['classendtime']);
$classparticipants = test_input($_POST['classparticipants']);
$classdate = test_input($_POST['classdate']);

//Adds it to the database
$query = "INSERT INTO class (classname, classdescription, classprice, classstarttime, classendtime, classdate, classparticipants, classdisclamer, service) VALUES ('$classname', '$classdescription','$classprice', '$classstarttime', '$classendtime', '$classdate', '$classparticipants','$classdisclamer', '$serviceChosen')";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error."<p>";
echo $result;

?>
