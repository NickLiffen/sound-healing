<?php
//Creates a table called products
$create_table_services =
				"CREATE TABLE IF NOT EXISTS services (
				id MEDIUMINT NOT NULL AUTO_INCREMENT,
				PRIMARY KEY(ID)
													  )";
if(!$result = $database->query($create_table_services)){
    die('Could not create product table [' . $database->error . ']');
	$result->close();
}
$create_table_contact_info =
				"CREATE TABLE IF NOT EXISTS address (
				id MEDIUMINT NOT NULL AUTO_INCREMENT,
				PRIMARY KEY(ID)
														)";
if(!$resultt = $database->query($create_table_contact_info)){
		die('Could not create product table [' . $database->error . ']');
	$result->close();
}
?>
