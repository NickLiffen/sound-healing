<?php $title="Book A Class" ; include( "inc/header.php"); ?>


<h1 class='middle'> Please Choose a Service </h1>

<!-- This is going to print out the different services. E.G Sound Healing or Crystal Healing. In a button format -->
<div id="servicesOptions"></div>

<!-- Everything in this DIV will be hidden intill the Service is choosen -->
<div class="displayNone">
	<!-- This is going to print out information about the Service Choosen. -->
	<div id="serviceInformation"></div>

	<h2>Classes Avaible:</h2>

	<!-- This is going to print out the number of classes avaible under a Service -->
	<div id="classesAvailble"></div>
</div>



<?php include( "inc/footer.php"); ?>
