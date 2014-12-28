<?php
include("../db/connect_database.php");

//A double check to make sure that the product is found in the database.
$query = "SELECT id, servicename FROM service";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error."";

$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $service = array  (	"id" => $row['id'],
  "servicename" => $row['servicename']

);
array_push($output,$service);
}
//JSON Encodes it.
$json_ouput = json_encode($output);
echo $json_ouput;

?>
