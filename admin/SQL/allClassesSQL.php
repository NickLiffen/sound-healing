<?php
include("../../db/connect_database.php");
//Runs a query to find any products that have no stock
$query = "SELECT * FROM class";
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
  "classdisclamer" => $row['classdisclamer'],
  "service" => $row['service']

);
array_push($output,$class);
}
//JSON Encodes it.
$json_ouput = json_encode($output);
echo $json_ouput;
?>
