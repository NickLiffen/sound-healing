<?php
include("../../db/connect_database.php");

// -----------    This returns the total number of classes as a number   -------------

//Query that finds the total number of products that the user has added.
$query = "SELECT count(id) as 'TotalClasses' FROM class";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error;

//Prints out the array as an assocciate array.
$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $product = array  ("id" => $row['TotalClasses']);
  array_push($output,$product);
}
$json_ouput = json_encode($output);
echo $json_ouput;




?>
