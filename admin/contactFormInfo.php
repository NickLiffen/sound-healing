<?php $title="Contact Page - Admin" ; include( "inc/header.php"); ?>

    <h1>Contact Form Information</h1>
    <div class='paddingBottom'></div>

      <!--This is where the results fromm the database are going to be outputted-->
      <div id='outputContactInfo'></div>

      <!--This is where the box comes up to reply to the contact message-->
      <div id="replyBox"></div>


    <!--This is the script that runs the AJAX request to get the information-->
    <script src="js/getContactInfo.js"></script>


<?php include( "inc/footer.php"); ?>
