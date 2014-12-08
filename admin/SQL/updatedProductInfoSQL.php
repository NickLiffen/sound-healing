<?php

include("../../db/connect_database.php");

    //Brings in the new quantities that the user wants to update.
    $idUpdate = $_POST['idUpdate'];
    $classUpdate = $_POST['classUpdate'];
    $descriptionUpdate = $_POST['descriptionUpdate'];
    $priceUpdate = $_POST['priceUpdate'];
    $disclaimerUpdate = $_POST['disclaimerUpdate'];
    $serviceUpdate = $_POST['serviceUpdate'];



    //Runs a query that updates the product.
    $data = "UPDATE class SET classname ='$classUpdate', classdescription = '$descriptionUpdate', classprice = '$priceUpdate', classdisclamer = '$disclaimerUpdate', service = '$serviceUpdate' WHERE id = '$idUpdate'";
    $result = $database->query($data) OR die("Failed query $query");
    echo $database->error."<p>";
?>
