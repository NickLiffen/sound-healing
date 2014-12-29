<?php
include("../db/connect_database.php");


// -----------   This returns a specific row in the contact form database depending on the ID    -------------


//Finds a product based on the ID.
$name = $_GET['id'];

$query = "SELECT * FROM class WHERE service = '$name'";

$result = $database->query($query) OR die("Failed query $query");
echo $database->error;

//Stores it in an assossciate array
$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $class = array  (	"id" => $row['id'],
  "classname" => $row['classname'],
  "classdescription" => $row['classdescription'],
  "classprice" => $row['classprice'],
  "classstarttime" => $row['classstarttime'],
  "classendtime" => $row['classendtime'],
  "classdate" => $row['classdate'],
  "classparticipants" => $row['classparticipants'],
  "classdisclamer" => $row['classdisclamer']

);
array_push($output,$class);
}
//JSON Encodes it.
$json_ouput = json_encode($output);
echo $json_ouput;


?>