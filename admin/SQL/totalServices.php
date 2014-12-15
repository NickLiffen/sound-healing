<?php
include("../../db/connect_database.php");

// -----------   This returns the total number of servcies. Should only be a few. 2 or 3    -------------

//Query that finds the total number of products that the user has added.
$query = "SELECT Count(Distinct service) As countService FROM class";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error;

//Prints out the array as an assocciate array.
$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $product = array  ("id" => $row['countService']);
  array_push($output,$product);
}
$json_ouput = json_encode($output);
echo $json_ouput;


?>
