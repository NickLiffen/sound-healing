<?php

include("../../db/connect_database.php");

// -----------    this is the sql that updates a class in the database   -------------

    //Brings in the new quantities that the user wants to update.
    $idUpdate = $_POST['idUpdate'];
    $classUpdate = $_POST['classUpdate'];
    $descriptionUpdate = $_POST['descriptionUpdate'];
    $priceUpdate = $_POST['priceUpdate'];
    $disclaimerUpdate = $_POST['disclaimerUpdate'];
    $startTimeUpdate = $_POST['startTimeUpdate'];
    $endTimeUpdate = $_POST['endTimeUpdate'];
    $participantsUpdate = $_POST['participantsUpdate'];
    $serviceUpdate = $_POST['serviceUpdate'];
    $dateUpdate = $_POST['dateUpdate'];



    //Runs a query that updates the product.
    $data = "UPDATE class SET classname ='$classUpdate', classdescription = '$descriptionUpdate', classprice = '$priceUpdate', classdate = '$dateUpdate', classstarttime = '$startTimeUpdate', classendtime = '$endTimeUpdate', classparticipants = '$participantsUpdate', classdisclamer = '$disclaimerUpdate', service = '$serviceUpdate' WHERE id = '$idUpdate'";
    $result = $database->query($data) OR die("Failed query $query");
    echo $database->error."<p>";
?>
