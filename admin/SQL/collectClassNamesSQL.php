<?php
include("../../db/connect_database.php");

// -----------   This page collects how many emails have been responded too    -------------


//Query that finds the total number of products that the user has added.
$query = "SELECT DISTINCT classname  As countEmailYes FROM bookings";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error;

//Prints out the array as an assocciate array.
$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $product = array  ("classname" => $row['countEmailYes']);
  array_push($output,$product);
}
$json_ouput = json_encode($output);
echo $json_ouput;


?>