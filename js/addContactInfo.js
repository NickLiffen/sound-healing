/*This Page is going to:

1. Collect the values which the user has entered into the contact form.
2. Checks to see if all the information has been entered. (If not they can't proccedd and we will throw back an error message)
3. Pass the values to the database through an AJAX request and store it in the database.
4. Throw back a success or error message depending on if the data has been stored successfully or not.

*/



//Validates the Form that allows the user to enter a product to the database.
validateForm = function () {

  //Inititiates all the varibles that we are going to use to validae the form.
  var errors, a, b, c, d, e, errorFirstName, errorLastName, errorEmail, errorTelephone, errorMessage = "";

  //Sets errors to 0
  errors = 0;

  //Checks the First Name value of the form is entered.
    a = document.forms["contactForm"]["firstname"].value;
    if (a == null || a == "") {
        errorFirstName = _('errorfirstname');
        errorFirstName.style.color ='red';
        errorFirstName.innerHTML = "Please enter your First Name";
        errors = errors + 1;
    }

  //Checks the Last Name value is entered.
    b = document.forms["contactForm"]["lastname"].value;
    if (b == null || b == "") {
        errorLastName = _('errorlastname');
        errorLastName.style.color = 'red';
        errorLastName.innerHTML = "Please enter your Last Name";
        errors = errors + 1;
    }

  //Checks to see if the Email has been entered.
    c = document.forms["contactForm"]["email"].value;
    if (c == null || c == "") {
        errorEmail = _('erroremail');
        errorEmail.style.color = 'red';
        errorEmail.innerHTML = "Please enter an Email";
        errors = errors + 1;
    }

    //Checks the Telephone vaue has been entered.
      d = document.forms["contactForm"]["telephone"].value;
      if (d == null || d == "" || !isNumber(d)) {
          errorTelephone = _('errortelephone');
          errorTelephone.style.color = 'red';
          errorTelephone.innerHTML = "Please enter a valid phone number";
          errors = errors + 1;
      }

      //Checks the Telephone vaue has been entered.
        e = document.forms["contactForm"]["comment"].value;
        if (e == null || e == "") {
            errorTelephone = _('errorcomment');
            errorTelephone.style.color = 'red';
            errorTelephone.innerHTML = "Please enter a Message";
            errors = errors + 1;
        }

  //If there are any errors are found it returns false but if not it proccedds.
    if (errors > 0) {
        return false;
    } else {
      console.log(errors)
        //uploadedProduct();
    }
}
//Waits and Checks to see when the submit button has been pressed.
pageLoaded = function () {
  var fetchButton;
    fetchbutton = _("submit");
    if (fetchbutton) {
        fetchbutton.addEventListener("click", validateForm);
    }
}
//Event Listner for when the page loads.
window.addEventListener("load", pageLoaded);
