<?php $title="Contact Page" ; include( "inc/header.php"); ?>

                <h1>Get In Touch</h1>

                <!-- This form send the data through multipart form data (Ajax Request),
                and stores it in a database. It collects the inputted data from the user
                through the ID's of each section. If there is an error it prints it out
                in the error* part of that section E.G errorfirstname.-->

                <form enctype="multipart/form-data" id="myForm" method="post"
                name="myForm" onsubmit="return false">

                    <!-- First Name Feild -->
                    <p>First Name:* <input id="firstname" name=
                    "firstname" placeholder="First Name" type="text" autofocus> <span id=
                    "errorfirstname"></span> <span class=
                    "error"></span></p>

                    <!-- Last Name Feild -->
                    <p>Last Name:* <input id="lastname" name=
                    "lastname" placeholder="Last Name" type="text"> <span id=
                    "errorlastname"></span> <span class=
                    "error"></span></p>

                    <!-- Email Feild -->
                    <p>Email* <input id="email" name=
                    "email" placeholder="Email" type="email"> <span id=
                    "erroremail"></span> <span class=
                    "error"></span></p>

                    <!-- Telephone Feild-->
                    <p>Telephone *<input id=
                    "telephone" name="telephone" placeholder="Telephone" type="number">
                    <span id="errortelephone"></span> <span class=
                    "error"></span></p>

                    <!-- Comments Feild-->
                    <p>Comments *<textarea id=
                    "telephone" name="telephone" rows="10" cols="30">
                    Please Enter Your Comments Here</textarea>
                    <span id="errortelephone"></span> <span class=
                    "error"></span></p>

                    <!-- Submit Button.-->
                    <p>Everything marked with a * is a mandatory
                    field</p><input id="submit" name="submit" type="button"
                    value="Submit Form">

                  </form>

    <!--This is the AJAX function that adds the contact information to the database.-->
    <script src="js/addContactInfo.js"></script>

<?php include( "inc/footer.php"); ?>
