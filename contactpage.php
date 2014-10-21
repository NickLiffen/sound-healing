<?php $title="Contact Page" ; include( "inc/header.php"); ?>

                <h1 id="contactwelcome">Get In Touch</h1>

                <!-- This form send the data through multipart form data (Ajax Request),
                and stores it in a database. It collects the inputted data from the user
                through the ID's of each section. If there is an error it prints it out
                in the error* part of that section E.G errorfirstname.-->

                <form enctype="multipart/form-data" id="myForm" method="post"
                name="myForm" onsubmit="return false">

                    <!-- First Name Field -->
                    <p>First Name<br><input id="firstname" name=
                    "firstname" type="text" autofocus> <span id=
                    "errorfirstname"></span> <span class=
                    "error"></span></p>

                    <!-- Last Name Field -->
                    <p>Last Name <br><input id="lastname" name=
                    "lastname" type="text"> <span id=
                    "errorlastname"></span> <span class=
                    "error"></span></p>

                    <!-- Email Field -->
                    <p>Email<br><input id="email" name=
                    "email"  type="email"> <span id=
                    "erroremail"></span> <span class=
                    "error"></span></p>

                    <!-- Telephone Field-->
                    <p>Telephone<br><input id=
                    "telephone" name="telephone" >
                    <span id="errortelephone"></span> <span class=
                    "error"></span></p>

                    <!-- Comments Field-->
                    <p>Comments</p>
                    <textarea id="Comment" rows="5"></textarea>
                    <span id="errortelephone"></span> 
                    <span class="error"></span>

                    <!-- Submit Button.-->
                    <input id="submit" name="submit" type="button"
                    value="Submit Form">

                  </form>

    <!--This is the AJAX function that adds the contact information to the database.-->
    <script src="js/addContactInfo.js"></script>

<?php include( "inc/footer.php"); ?>
