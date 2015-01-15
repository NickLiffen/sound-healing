<?php $title="Shakty Sounds Contact Form" ; include( "inc/header.php"); ?>


    <div class = "paddingBottom"></div>
    <div class = "paddingBottom"></div>
    <div class = "paddingBottom"></div>
    <div class = "paddingBottom"></div>

              <h1 id="contactwelcome">Contact Me</h1>

                <!-- This form send the data through multipart form data (Ajax Request),
                and stores it in a database. It collects the inputted data from the user
                through the ID's of each section. If there is an error it prints it out
                in the error* part of that section E.G errorfirstname.-->
<p>
                <form enctype="multipart/form-data" id="contactForm" method="post" name="myForm" onsubmit="return false">
                    <p id='formMessage'> Please feel free to contact me on: test@test.com.</p>
                    <!-- First Name Field -->
                    <p>Full Name: </p>
                    <input type="text" id="fullname" name="fullname"> 
                    <span id="errorfullname"></span> 


                    <!-- Email Field -->
                    <p>Email Address:</p> 
                    <input type="email" id="email" name="email"> 
                    <span id="erroremail"></span> 

                    <!-- Telephone Field-->
                    <p>Telephone:</p>
                    <input type="text" id="telephone" name="telephone">
                    <span id="errortelephone" ></span> 

                    <!-- Comments Field-->
                    <p>Query/Question/Comment: </p>
                    <textarea id="comment" rows="3"></textarea>
                    <span id="errorcomment"></span>

                    <div id ="submitBtn">
                    <!-- Submit Button.-->
                    <input id="submit" name="submit" type="button" value="Submit">
                    </div>
                     <div id='formSuccess'></div>
                  </form>
                 
</p>
    <!--This is the AJAX function that adds the contact information to the database.-->
    <script src="js/addContactInfo.js"></script>

<?php include( "inc/footer.php"); ?>
