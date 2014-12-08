<?php

$create_table_contact_form =
"CREATE TABLE IF NOT EXISTS contactForm (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(35) NOT NULL,
	email VARCHAR(500) NOT NULL,
	telephone VARCHAR(15),
	comment VARCHAR(1000) NOT NULL,
	currentDate DATE NOT NULL,
	respondedToEmail BOOL DEFAULT NULL,

	PRIMARY KEY(ID)
)";


if(!$result = $database->query($create_table_contact_form)){
	die('Could not create product table [' . $database->error . ']');
	$result->close();
}


$create_table_class =
"CREATE TABLE IF NOT EXISTS class (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	classname VARCHAR(35) NOT NULL,
	classdescription VARCHAR(500) NOT NULL,
	classprice VARCHAR(15),
	classdisclamer VARCHAR(1000) NOT NULL,
	service VARCHAR(15) NOT NULL,

	PRIMARY KEY(ID)
)";
if(!$result = $database->query($create_table_class)){
	die('Could not create class table [' . $databasee->error . ']');
	$table->close();
}

?>
