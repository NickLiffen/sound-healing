<?php

include("../../db/connect_database.php");
//Brings in the string that they have searhed for.
$searchString = $_GET['str'];
//Runs a query to find that product based on the string. SEARCHES UNDER NAME AND DESCRIPTION
$query = "SELECT id, classname, classdescription, classprice, classdisclamer, service FROM class WHERE classname LIKE '%$searchString%' OR classdescription LIKE '%$searchString%' ";
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