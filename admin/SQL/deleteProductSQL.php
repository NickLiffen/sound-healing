<?php
include("../../db/connect_database.php");


// -----------   This deletes a product from the database depending on the ID passed through from javascript.    -------------

//Collects the ID from the AJAX request.
$name = $_GET['id'];

//A double check to make sure that the product is found in the database.
$query = "SELECT * FROM class WHERE id = '$name'";
$result = $database->query($query) OR die("Failed query $query");
echo $database->error."<p>";
//If the product is found then it can be deleted.
if(mysqli_num_rows($result) > 0) {
  $queryNew = $query = "DELETE FROM class WHERE id = '$name'";
  $resultNew = $database->query($queryNew) OR die("Failed query $query");
  echo $database->error."<p>";
}





?>
