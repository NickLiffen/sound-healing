<?php $title="Admin Page" ; include( "inc/header.php"); ?>

<h1 class='center'> Staticsitcs about your website </h1>

<div class='paddingBottom'></div>
<section>
<h3>Product Summary</h3>
<div class='paddingBottom'></div>
<ul>
  <li>The Total amount of Services:
    <div id='totalServices'></div>
    <div class='paddingBottom'></div>
  </li>
  <li>The Total amount of Classes:
    <div id='totalClasses'></div>
    <div class='paddingBottom'></div>
  </li>
  <li>The Total amount of Email's to Respond too:
    <div id='emailStillToAswer'></div>
    <div class='paddingBottom'></div>
  </li>
  <li>The Total amount of Email's ypu HAVE responded too:
    <div id='emailAnswered'></div>
    <div class='paddingBottom'></div>
  </li>
</ul>
</section>


<div class='paddingBottom'></div>
<section>

<p> Here is a list of all the classes you have on at the moment - please navigate to the Modify - Delete Page to change anything :)</p>
<div class='paddingBottom'></div>
<div id='allClasses'></div>

</section>

<script src="js/fetchInfo.js"></script>

<?php include( "inc/footer.php"); ?>
