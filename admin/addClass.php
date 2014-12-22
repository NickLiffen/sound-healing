<?php $title="Add a Class - Admin" ; include( "inc/header.php"); ?>

<h1 id="contactwelcome">Add a Class</h1>
<div id ="searchbox"> 
    <!-- This is the form that adds a Class Under a certain Service. There
    are going to 3 different types of services apperently and this is how you
    add a class.-->
    <form enctype="multipart/form-data" id="addClass" method="post"
    name="addClass" onsubmit="return false">

    <!-- Class Name Feild-->
    <p class = "adminForm">
    <input id="classname" name="classname" placeholder="Class Name" type="text" autofocus> 
    <span id="errorclassname"></span> 
    <span class="error"></span>
</p>

    <!-- Class Description Field -->
    <p class = "adminForm">
    <input id="classdescription" name="classDescription" placeholder="Class Description" type="text"> 
    <span id="errorclassDescription"></span> 
    <span class="error"></span>
    </p>

    <!-- Class Price Field-->
    <p class = "adminForm">
    <input id="classprice" name= "classprice" placeholder="Class Price" type="text"> 
    <span id= "errorclassprice"></span> 
    <span class="error"></span>
    </p>

    <!-- Class Disclamer Fld-->
    <p class = "adminForm">
    <input id="classdisclamer" name="classdisclamer" placeholder="Class Disclaimer" type="text"> 
    <span id= "errorclassdisclaimer"></span> 
    <span class="error"></span>
    </p>

    <!-- Choose a service for the class to fal under-->
    <p class = "adminForm">
    <select name="differentServices" id="differentServices">
      <option value ="Service Class"> Service Class </option>  
      <option value="ShaktySounds" id="shaktySounds">Shakty Sounds</option>
      <option value="CrystalHealing" id ="crystalHealing">Crystal Healing</option>
      <option value="Test" id="test">Test</option>
    </select>
    </p>
    <!-- Submit Button -->
    <div id ="submitBtn">
      <input id="submit" name="submit" type="button" value="Submit">
    </div>
  </div>
</form>
</p>

<!--This prints the success message once the admin has successfully added a service-->
<span id='successMessage'></span>

<!--This is the AJAX function that adds the contact information to the database.-->
<script src="js/addClass.js"></script>
<?php include( "inc/footer.php"); ?>
