<?php
include("../../db/connect_database.php");

// -----------   This page collects how many emails have been responded too    -------------


//Query that finds the total number of products that the user has added.
$query = "SELECT Count(respondedToEmail) As countEmailYes FROM contactForm WHERE respondedToEmail ='Yes'";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error;

//Prints out the array as an assocciate array.
$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $product = array  ("id" => $row['countEmailYes']);
  array_push($output,$product);
}
$json_ouput = json_encode($output);
echo $json_ouput;


?>
