/*This Page is going to:

1. Collect the values which the user has entered into the contact form.
2. Checks to see if all the information has been entered. (If not they can't proccedd and we will throw back an error message)
3. Pass the values to the database through an AJAX request and store it in the database.
4. Throw back a success or error message depending on if the data has been stored successfully or not.

*/

//This function clears the textboxes and ten ouputs a successMessage
function outputMessage(data){
      //Inititiates all the varibles that we are going to use to validae the form.
      var fullname, email, telephone, email, comment, successMessage;

      //Sets all the feilds in the Form to Blank.
      fullname = _("fullname").value=" ";
      email = _("email").value = " ";
      telephone = _("telephone").value = " ";
      comment = _("comment").value = " ";

      //Ouputs the success Message.
      successMessage = _("successMessage");
      successMessage.innerHTML = 'Your Form has been successfull sent - Thank You :)';
      successMessage.style.color = 'green';
}

//This function sends the data from the form to the database through AJAX request
function sendContactForm(){
  //Inititiates all the varibles that we are going to use to validae the form.
  var fullname, email, telephone, email, comment, respondedToEmail, formdata;

  //Collectting varibles. All using my _ function that collects ID's.
  fullname = _("fullname").value;
  email = _("email").value;
  telephone = _("telephone").value;
  comment = _("comment").value;
  respondedToEmail = '0';

  //FormData is a safe and easy method of posting data.
  formdata = new FormData();
  formdata.append("fullname", fullname);
  formdata.append("email", email);
  formdata.append("telephone", telephone);
  formdata.append("comment", comment);
  formdata.append("respondedToEmail", respondedToEmail);

  //Calling the AJAX Post function that I have already created
  ajaxPost("SQL/addConactInfoSQL.php", formdata, outputMessage, null, null);
}

//Validates the Form that allows the user to enter a product to the database.
validateForm = function () {

  //Inititiates all the varibles that we are going to use to validae the form.
  var errors, a, b, c, d, e, errorFirstName, errorLastName, errorEmail, errorTelephone, errorMessage = " ";

  //Sets errors to 0
  errors = 0;

  //Checks the First Name value of the form is entered.
    a = document.forms["contactForm"]["fullname"].value;
    if (a == null || a == "") {
        errorFirstName = _('errorfullname');
        errorFirstName.style.color ='red';
        errorFirstName.innerHTML = "Please enter your Name";
        errors = errors + 1;
    }

  //Checks to see if the Email has been entered.
    c = document.forms["contactForm"]["email"].value;
    var atpos = c.indexOf("@");
    var dotpos = c.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=c.length) {
        errorEmail = _('erroremail');
        errorEmail.style.color ='red';
        errorEmail.innerHTML = "Please enter a valid email";
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
        sendContactForm();
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
