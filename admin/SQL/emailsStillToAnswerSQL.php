<?php
include("../../db/connect_database.php");
//Query that finds the total number of products that the user has added.
$query = "SELECT Count(respondedToEmail) As countEmailNo FROM contactForm WHERE respondedToEmail ='No'";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error;

//Prints out the array as an assocciate array.
$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $product = array  ("id" => $row['countEmailNo']);
  array_push($output,$product);
}
$json_ouput = json_encode($output);
echo $json_ouput;


?>
