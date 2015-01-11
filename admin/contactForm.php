<?php $title="Contact Page - Admin" ; include( "inc/header.php"); ?>

    <h1 id='contactwelcome'>Contact Form Information</h1>

<p id="subwriting"> Please click on any of the contact information to bring up more information and reply to them</p>
    <div class='paddingBottom'></div>

    <!--This is where the message comes up saying that they have replied. At the moment it is set to display: none, when they reply it shows for 3 seconds-->
    <div id='productMessage'>
      <h3>You Have Replied</h3>
    </div>

<!--This is where the message comes up saying that they have replied. At the moment it is set to display: none, when they reply it shows for 3 seconds-->
    <div id='productDelete'>
      <h3>Email Deleted</h3>
    </div>
    <!--I use this instead of using the <br> tags. It gives a padding bottom on 10px-->
      <div class='paddingBottom'></div>


      <!--This is where the results fromm the database are going to be outputted-->
      <div id='outputContactInfo'></div>


      <!--This is where the results fromm the database are going to be outputted-->
      <div id='outputContactInfoFocus'></div>


      <!--This is where the box comes up to reply to the contact message-->
      <div id="replyBox"></div>


    <!--This is the script that runs the AJAX request to get the information-->
    <script src="js/contactForm.js"></script>


<?php include( "inc/footer.php"); ?>
