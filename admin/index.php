<?php $title="Admin Page" ; include( "inc/header.php"); ?>

<h1 id="contactwelcome">Manage Your Content </h1>

<div class='paddingBottom'></div>
<div id = "admintabs">
<section id = "admincontrols">
<ul id = "adminboxes">

  <!--This prints the total number of: Services in the databse-->
  <li class = "tabs">Total Services
    <div id='totalServices'></div>
    <div class='paddingBottom'></div>
  </li>

  <!--This prints the total number of: Classes in the database-->
  <li class = "tabs">Total Classes
    <div id='totalClasses'></div>
    <div class='paddingBottom'></div>
  </li>

  <!--This prints the total number of: Emails that the admin hasn't responded too-->
  <li class = "tabs"> Unread Emails
    <div id='emailStillToAnswer'></div>
    <div class='paddingBottom'></div>
  </li>

  <!--This prints the total number of:Emails that the admin has responded too-->
  <li class = "tabs"> Total Replies
    <div id='emailAnswered'></div>
    <div class='paddingBottom'></div>
  </li>

</ul>
</section>
</div>


<div class='paddingBottom'></div>
<section>

<div id='allClasses'></div>

</section>


<!--This is the javacript file that runs this page.-->
<script src="js/fetchInfo.js"></script>

<?php include( "inc/footer.php"); ?>
