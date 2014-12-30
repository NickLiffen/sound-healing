<?php
include("../../db/connect_database.php");


// -----------   This returns a specific row in the contact form database depending on the ID    -------------


//Finds a product based on the ID.
$name = $_GET['id'];

$query = "SELECT * FROM bookings WHERE classname = '$name'";

$result = $database->query($query) OR die("Failed query $query");
echo $database->error;

$output = array();
while($row = mysqli_fetch_assoc($result))
{
  $customerInfo = array  (	"id" => $row['id'],
  "classname" => $row['classname'],
  "customername" => $row['customername'],
  "customeremail" => $row['customeremail'],
  "customerphone" => $row['customerphone'],
  "customercomment" => $row['customercomment'],

);
array_push($output,$customerInfo);
}

$json_ouput = json_encode($output);
echo $json_ouput;
?>
