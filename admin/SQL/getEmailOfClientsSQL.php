<?php
include("../../db/connect_database.php");

// -----------    This collects the class that the user wants to update. then returns it in a JSON array   -------------

//Finds a product based on the ID.
$name = $_GET['str'];
//Runs a query on that ID.
$query = "SELECT customeremail FROM bookings WHERE classname = '$name'";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error;
//Stores it as an Assoccsaite Array
$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $class = array  (	
  "customeremail" => $row['customeremail']

);
array_push($output,$class);
}
//JSON Encodes it.
$json_ouput = json_encode($output);
echo $json_ouput;
?>
