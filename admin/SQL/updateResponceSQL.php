<?php

include("../../db/connect_database.php");

// -----------   Once the admin has sent a reply this file is called and it updates the status of if the user has replied    -------------

//Brings in the new quantities that the user wants to update.
$updateIDNew = $_POST['updateIDNew'];
$updateRespondedToEmail = $_POST['updateRespondedToEmail'];


echo $updateIDNew;


//Runs a query that updates the product.
$data = "UPDATE contactForm SET respondedToEmail = '$updateRespondedToEmail' WHERE id = '$updateIDNew'";
$result = $database->query($data) OR die("Failed query $query");



?>
