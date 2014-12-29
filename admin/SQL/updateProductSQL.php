<?php
include("../../db/connect_database.php");

// -----------    This collects the class that the user wants to update. then returns it in a JSON array   -------------

//Finds a product based on the ID.
$name = $_GET['id'];
//Runs a query on that ID.
$query = "SELECT * FROM class WHERE id = '$name'";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error;
//Stores it as an Assoccsaite Array
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
  "classdisclamer" => $row['classdisclamer'],
  "service" => $row['service']

);
array_push($output,$class);
}
//JSON Encodes it.
$json_ouput = json_encode($output);
echo $json_ouput;
?>
