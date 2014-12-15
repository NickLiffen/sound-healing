<?php $title="Admin Page" ; include( "inc/header.php"); ?>

<h1 class='center'> Staticsitcs about your website </h1>

<div class='paddingBottom'></div>
<section>
<h3>Product Summary</h3>


<div class='paddingBottom'></div>


<ul>

  <!--This prints the total number of: Services in the databse-->
  <li>The Total amount of Services:
    <div id='totalServices'></div>
    <div class='paddingBottom'></div>
  </li>

  <!--This prints the total number of: Classes in the database-->
  <li>The Total amount of Classes:
    <div id='totalClasses'></div>
    <div class='paddingBottom'></div>
  </li>

  <!--This prints the total number of: Emails that the admin hasn't responded too-->
  <li>The Total amount of Email's to Respond too:
    <div id='emailStillToAswer'></div>
    <div class='paddingBottom'></div>
  </li>

  <!--This prints the total number of:Emails that the admin has responded too-->
  <li>The Total amount of Email's you HAVE responded too:
    <div id='emailAnswered'></div>
    <div class='paddingBottom'></div>
  </li>

</ul>
</section>


<div class='paddingBottom'></div>
<section>

  <!--This prints the total number of: Overall classes. It prints them out in a list. -->
<p> Here is a list of all the classes you have on at the moment - please navigate to the Modify - Delete Page to change anything :)</p>
<div class='paddingBottom'></div>
<div id='allClasses'></div>

</section>


<!--This is the javacript file that runs this page.-->
<script src="js/fetchInfo.js"></script>

<?php include( "inc/footer.php"); ?>
