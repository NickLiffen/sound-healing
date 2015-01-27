<?php $title="Add a Class - Admin" ; include( "inc/header.php"); ?>

<div class = 'paddingBottom'></div>
<div class = 'paddingBottom'></div>

<h1 id="contactwelcome">Add a Class</h1>
<div id ="searchbox"> 
    <!-- This is the form that adds a Class Under a certain Service. There
    are going to 3 different types of services apperently and this is how you
    add a class.-->
    <form enctype="multipart/form-data" id="addClass" method="post"
    name="addClass" onsubmit="return false">

    <!-- Class Name Feild-->
    <p class = "adminForm">
    <input type="text"  id="classname" name="classname" placeholder="Class Name" autofocus> 
    <span id="errorclassname"></span> 
    <span class="error"></span>
    </p>

    <!-- Class Description Field -->
    <p class = "adminForm">
    <input type="text" id="classdescription" name="classDescription" placeholder="Class Description" > 
    <span id="errorclassDescription"></span> 
    <span class="error"></span>
    </p>

    <!-- Class Price Field-->
    <p class = "adminForm">
    <input id="classprice" name= "classprice" placeholder="Class Price" type="number"> 
    <span id= "errorclassprice"></span> 
    <span class="error"></span>
    </p>

    <!-- Class Start Time -->
    <p class = "adminForm">
    <input id="classstarttime" name="classstarttime" placeholder='Start Time'type="time"> 
    <span id= "errorclassstarttime"></span> 
    <span class="error"></span>
    </p>

    <!-- Class End Time-->
    <p class = "adminForm">
    <input id="classendtime" name="classendtime" placeholder='End Time' type="time"> 
    <span id= "errorclassendtime"></span> 
    <span class="error"></span>
    </p>

    <!-- Class End Time-->
    <p class = "adminForm">
    <input id="classdate" name="classdate" placeholder='Date' type="date"> 
    <span id= "errordate"></span> 
    <span class="error"></span>
    </p>

    <!-- Class Number of Partisipants-->
    <p class = "adminForm">
    <input id="classparticipants" name="classparticipants" placeholder="Number of Participants" type="number"> 
    <span id= "errorclassparticipants"></span> 
    <span class="error"></span>
    </p>

    <!-- Class Disclamer Fld-->
    <p class = "adminForm">
    <input type="text" id="classdisclamer" name="classdisclamer" placeholder="Class Disclaimer"> 
    <span id= "errorclassdisclaimer"></span> 
    <span class="error"></span>
    </p>

    <!-- Choose a service for the class to fal under-->
    <p class = "adminForm">
    <select name="differentServices" id="differentServices">
      <option value="SoundHealing" id="soundHealing">Sound Healing</option>
      <option value="CrystalHealing" id ="crystalHealing">Crystal Healing</option>
      <option value="SacredFeminine" id ="sacredFeminine">Sacred Feminine</option>
    </select>
    </p>
    <!-- Submit Button -->
    <div id ="submitBtnAdmin">
      <input id="submit" name="submit" type="button" value="Submit">
    </div>
  </div>
</form>
</p>

<!--This prints the success message once the admin has successfully added a service-->
<span id='successMessageForm'></span>

<!--This is the AJAX function that adds the contact information to the database.-->
<script src="js/addClass.js"></script>
<?php include( "inc/footer.php"); ?>
