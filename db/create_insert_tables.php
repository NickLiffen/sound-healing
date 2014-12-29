<?php

$create_table_contact_form =
"CREATE TABLE IF NOT EXISTS contactForm (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(35) NOT NULL,
	email VARCHAR(500) NOT NULL,
	telephone VARCHAR(15),
	comment VARCHAR(1000) NOT NULL,
	currentDate DATE NOT NULL,
	respondedToEmail varchar(10) NOT NULL,

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
	classstarttime VARCHAR(20) NOT NULL,
	classendtime VARCHAR(20) NOT NULL,
	classdate VARCHAR(20) NOT NULL,
	classparticipants MEDIUMINT NOT NULL,
	classdisclamer VARCHAR(1000) NOT NULL,
	service VARCHAR(15) NOT NULL,

	PRIMARY KEY(ID)
)";
if(!$result = $database->query($create_table_class)){
	die('Could not create class table [' . $databasee->error . ']');
	$table->close();
}


$create_table_service =
"CREATE TABLE IF NOT EXISTS service (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	servicename VARCHAR(35) NOT NULL,
	servicedescription VARCHAR(500) NOT NULL,
	CONSTRAINT uc_PersonID UNIQUE (servicename, servicedescription),
	PRIMARY KEY(ID)
)";
if(!$result = $database->query($create_table_service)){
	die('Could not create class table [' . $databasee->error . ']');
	$table->close();
}


$create_table_bookings =
"CREATE TABLE IF NOT EXISTS bookings(
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	classname VARCHAR(35) NOT NULL,
	classdescription VARCHAR(500) NOT NULL,
	classprice VARCHAR(15),
	classstarttime VARCHAR(20) NOT NULL,
	classendtime VARCHAR(20) NOT NULL,
	classparticipants MEDIUMINT NOT NULL,
	classdisclamer VARCHAR(1000) NOT NULL,
	service VARCHAR(15) NOT NULL,

	PRIMARY KEY(ID)
)";

if(!$result = $database->query($create_table_service)){
	die('Could not create class table [' . $databasee->error . ']');
	$table->close();
}


?>
