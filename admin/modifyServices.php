<?php $title="Add a Class - Admin" ; include( "inc/header.php"); ?>

    <h1 class='center'>Add a Class?</h1>

    <!-- This is the form that adds a Class Under a certain Service. There
    are going to 3 different types of services apperently and this is how you
    add a class.-->
    <form enctype="multipart/form-data" id="addClass" method="post"
    name="addClass" onsubmit="return false">

      <!-- Class Name Feild-->
      <p>Class Name: </p><input id="classname" name=
      "classname" type="text" autofocus> <span id=
      "errorclassname"></span> <span class=
      "error"></span>

      <!-- Class Description Field -->
      <p>Class Description: </p><input id="classdescription" name=
      "classDescription" type="text"> <span id=
      "errorclassDescription"></span> <span class=
      "error"></span>

      <!-- Class Price Feild-->
      <p>Class Price: </p><input id="classprice" name=
      "classprice" type="text"> <span id=
      "errorclassprice"></span> <span class=
      "error"></span>

      <!-- Class Disclamer Feild-->
      <p>Class Discalmer: </p><input id="classdisclamer" name=
      "classdisclamer" type="text"> <span id=
      "errorclassdisclamer"></span> <span class=
      "error"></span>

      <!-- Choose a service for the class to fal under-->
      <p>What Service do you want to add a class to?</p>
        <select name="differentServices" id="differentServices">
          <option value="ShaktySounds" id="shaktySounds">Shakty Sounds</option>
          <option value="CrystalHealing" id ="crystalHealing">Crystal Healing</option>
          <option value="Test" id="test">Test</option>
      </select>

      <!-- Submit Button -->
      <div id ="submitBtn">
      <input id="submit" name="submit" type="button" value="Submit">
      </div>
    </form>


    <span id='successMessage'></span>

<!--This is the AJAX function that adds the contact information to the database.-->
<script src="js/addClassInfo.js"></script>
<?php include( "inc/footer.php"); ?>
