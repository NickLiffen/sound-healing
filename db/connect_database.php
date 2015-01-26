<?php
//Defines Host, User and Pass to correct information to be able to connect to database
define('HOST', 'localhost');
define('USER', 'cherylto_admin');
define('PASS', 'test1234!');
//Creates a connection with database
$database = new mysqli(HOST, USER, PASS);
if($database->connect_errno > 0){
    die('Unable to connect to database [' . $database->connect_error . ']');
}

//Selects the database I want to use (Don't know how this works, it really shouldn't!)
$selectDatabase = $database->select_db("soundhealing");
if ($result = $database->query($selectDatabase)) {
    die('Could not select database [' . $database->error . ']');
    $result->close();

}
require_once("create_insert_tables.php");
?>
