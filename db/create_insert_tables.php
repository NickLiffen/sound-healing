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
$create_table_contact_form =
				"CREATE TABLE IF NOT EXISTS contactForm (
				id MEDIUMINT NOT NULL AUTO_INCREMENT,
				fullname VARCHAR(35) NOT NULL,
				email VARCHAR(500) NOT NULL,
				telephone VARCHAR(15),
				comment VARCHAR(1000) NOT NULL,
				currentDate DATE NOT NULL,

				PRIMARY KEY(ID)
														)";
if(!$resultt = $database->query($create_table_contact_form)){
		die('Could not create product table [' . $database->error . ']');
	$resultt->close();
}

$create_table_class =
				"CREATE TABLE IF NOT EXISTS contactForm (
				id MEDIUMINT NOT NULL AUTO_INCREMENT,
				classname VARCHAR(35) NOT NULL,
				classdescription VARCHAR(500) NOT NULL,
				classprice VARCHAR(15),
				classdisclamer VARCHAR(1000) NOT NULL,

				PRIMARY KEY(ID)
														)";
if(!$resultt = $database->query($create_table_class)){
		die('Could not create product table [' . $database->error . ']');
	$resultt->close();
}

$create_table_service =
				"CREATE TABLE IF NOT EXISTS contactForm (
				id MEDIUMINT NOT NULL AUTO_INCREMENT,
				servicename VARCHAR(35) NOT NULL,

				PRIMARY KEY(ID)
														)";
if(!$resultt = $database->query($create_table_service)){
		die('Could not create product table [' . $database->error . ']');
	$resultt->close();
}

?>
