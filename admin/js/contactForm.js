
/*

This page handles the JavaScript for the contactForm.php page. It firstly prints out all the contact form information out onto the page.
Then it allows the user to click on it to bing up more information and the reply button. When the user clicks on the reply button it prints out
a form that the admin can reply too.

Things to do:

1. Make the spacing between each contact form details smaller.
2. Make the output of the database search a bit nice.
3. When the user clicks on a specific contact form section make that look a little better.

*/




//This outputs the contact information to the screen.
function getContactInfo(){
    var target;
    target = _("outputContactInfo");
    target.innerHTML = "";
    target.style.display = 'block';
    ajaxGet("SQL/collectContactInfoSQL.php", json, target, null);

};


//Parses the JSON Object created and formats it to the way I like
function json(jsonObj, target) {
  var json_output, output;
    json_output = JSON.parse(jsonObj);
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No Contact Information<p></div>";
    }
    else {
    //Starts the loop -- THIS IS HOW I OUTPUT THE DATA ON THE PAGE
    for (var i = 0; i < json_output.length; i++) {


      output = "<div id='item" + json_output[i].id + "' class='contactID'>" +
      "<h3 class='center'> Email Message </h3>" +
      "<p> Person's Name: " + json_output[i].fullname + '</p>' +
      "<p> Person's Email: " + json_output[i].email + '</p>' +
      "<p> Person's Telephone: " + json_output[i].telephone + '</p>' +
      "<p> Product Comment: " + json_output[i].comment + '</p>' +
      "<p> Date Form was Sent: " + json_output[i].currentDate + '</p>' +
      "<p class='bold'> Have you Responded: " + json_output[i].respondedToEmail + '</p>' +
      "</div>";
      target.innerHTML += output;


        //Collecting te ID of the Contact Request
        var id = json_output[i].id

        setListeners(id,target);
    }
  }
};


//Whenever you click on the customer information you want to extend, this collects the ID of the information
function setListeners(id, target) {
  var itemsContainer, e, data;
  itemsContainer = _("outputContactInfo");
  itemsContainer.addEventListener("click", function (event) {
    e = event.target;
    while (e.id.indexOf('item') == -1) {
      e = e.parentNode;
    }
    data = e.id;
    productID = data.replace(/[^0-9.]/g, "");
    focusAjax(productID, target);
  }, false);
}


//This function fires off an AJAX request to get the information that the Admin has clicked on
function focusAjax(newID, target){
  ajaxGet("SQL/customerInfoSQL.php?id=" + newID, outputIndividual, target, null);
}

function outputIndividual(jsonObj, target){

  var json_output, output;

  json_output = JSON.parse(jsonObj);

  //Loops through the parsed object.
  for (var i = 0; i < json_output.length; i++) {

    contact_id = json_output[i].id;

    output = "<h3 class='center'> Email Message </h3>" +
    "<div id='item" + json_output[i].id + "' class='itemModal'>" +
    "<p> Person's Name: " + json_output[i].fullname + '</p>' +
    "<p> Person's Email: " + json_output[i].email + '</p>' +
    "<p> Person's Telephone: " + json_output[i].telephone + '</p>' +
    "<p> Product Comment: " + json_output[i].comment + '</p>' +
    "<p class='bold'> Date Form was Sent: " + json_output[i].currentDate + '</p>' +
    "<p class='bold'> Have you Responded: " + json_output[i].respondedToEmail + '</p>' +
    "<div id='emailBtn'><input type='button' class='replyContactForm' value='Reply'/><div id ='divider'></div><input type='button' id='backButtonPress' value ='Back'/></div>" +
    "</div>" +
    "</div>";

    injectIntoFocus(contact_id, output);
  }
}


//Injects product information into Modal
function injectIntoFocus(product_id, data) {
  var searchFeatures, oldTarget, focusTarget;

  oldTarget =   _("outputContactInfo");
  focusTarget = _("outputContactInfoFocus");
  finalResponce = _('replyBox');

  oldTarget.style.display = 'none';
  focusTarget.style.display = 'block';
  finalResponce.style.display = 'none';

  focusTarget.innerHTML = data;

  getButton(product_id, focusTarget);
  backButton(focusTarget, oldTarget, finalResponce);
  //closeFocus(focusTarget, oldTarget, finalResponce);
}


//Closes the Focus through pressing the back button.
function backButton(focusTarget, oldTarget, value){
  var backButtonPressed;
  backButtonPressed = _("backButtonPress");
  if(backButtonPressed){
    backButtonPressed.addEventListener("click", function() {

      focusTarget.innerHTML = "";
      focusTarget.style.display = 'none';

      finalResponce.innerHTML = "";
      finalResponce.style.display = 'none';

      oldTarget.style.display = 'block';

      getContactInfo();
    });
  }
}

/*
//Closes the Focus using the ESC key
function closeFocus(focusTarget, oldTarget, value) {
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {

      focusTarget.innerHTML = "";
      focusTarget.style.display = 'none';

      finalResponce.innerHTML = "";
      finalResponce.style.display = 'none';

      oldTarget.style.display = 'block';

      getContactInfo();
    }
  }
};
*/

//This function collects the buttons for Replying to the user.
function getButton(str, target) {
  var fetchReplyButton;
  //Gets the button that says reply
  fetchReplyButton = _c("replyContactForm");

  //Reply Button.
  for (var i = 0, j = fetchReplyButton.length; i < j; i++) {
    fetchReplyButton[i].addEventListener("click", function () {
      var e, productID, newID;
      //Bubbles up and finds the ID of the product they want to modify
      e = event.target;
      while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
      }
      productID = e.id;
      //Removes everything but the numbers.
      newID = productID.replace(/[^0-9.]/g, "");

      replyContactInfo(newID, target);
    });
  }
}

//This gets the contact form information that the Admin has clicked on.
function replyContactInfo(newID, target){
  ajaxGet("SQL/customerInfoSQL.php?id=" + newID, replyContactForm, target, newID);
}


//This outputs the Form that the Admin can Respond to.
function replyContactForm(jsonObj, target, newID){


  var json_output, newTarget, output;

  //Converting to a JSON Object
  json_output = JSON.parse(jsonObj);

  //Modifying what the Page Looks like
  target.innerHTML = "";
  newTarget = _('replyBox');
  newTarget.innerHTML = "";
  newTarget.style.display = "block";


  //Starts the loop and prints out the form.
  for (var i = 0; i < json_output.length; i++) {
    output = "<h2 class='center'>Reply Form</h2>" +
    "<form enctype='multipart/form-data' id='contactForm' method='post' name=myForm' onsubmit='return false'>" +
    "<input type = 'hidden'  id='idUpdate' value = " + json_output[i].id + " > " +
    "<p>Customer Name: </p><input id='name' name= 'fullname' type='text' value = '" + json_output[i].fullname + "' autofocus> <span id='errorfullname'></span> <span class='error'></span>" +
    "<p>Customer Email: </p> <input id='customerEmail' name='email'  type='email' value = '" + json_output[i].email + "' > <span id='erroremail'></span> <span class='error'></span>" +
    "<p>Your Email Address: </p><input id='yourEmail' name='telephone' value='Your Email will go here'><span id='errortelephone'></span> <span class='error'></span>" +
    "<p>Please Enter your Message: </p><textarea id='messsage' rows='5'></textarea><span id='errorcomment'></span><span class='error'></span>" +
    "<div id ='submitBtn'><input id='submit' name='submit' type='button' value='Submit'></div>" +
    "<div class='paddingBottom'></div>" +
    "<span id='successMessage'></span>";

  newTarget.innerHTML += output;
}

sendEmail(newTarget, newID);
}

//This is the function that will send the email off to the customer - THIS DOESNT WORK YET AS LOCALHOST CAN'T SEND EMAILS
function sendEmail(newTarget, newID){

  var fetchSubmitButton;

  fetchSubmitButton = _("submit");
  if(fetchSubmitButton){
    fetchSubmitButton.addEventListener("click", function(){

      var name, customerEmail, yourEmail, messsage, id;

      name = _('name').value;
      customerEmail = _('customerEmail').value;
      yourEmail = _('yourEmail').value;
      messsage = _('messsage').value;

    //ALL THE ABOVE VALUES ARE CORRECT I HAVE CHECKED

      updateContactTable(newTarget, newID)

    });
  }
}

//This updated the table 'contactForm' in the database. Changes the RespondedToEmail to 1
function updateContactTable(newTarget, newID){

    var updateIDNew, updateRespondedToEmail, formdata;

    updateIDNew = (newID);
    updateRespondedToEmail = 'Yes';

    //FormData is a safe and easy method of posting data.
    formdata = new FormData();
    formdata.append("updateIDNew", updateIDNew);
    formdata.append("updateRespondedToEmail", updateRespondedToEmail);

    ajaxPost("SQL/updateResponceSQL.php", formdata, changeScreenLayout, newTarget, null);
}

//Once the Admin has replied it changes the screen back to the way it was
function changeScreenLayout(jsonObj, newTarget){
  var message;
  newTarget.style.display = "none";
  messsage = _("productMessage").style.display = "block";
  window.setTimeout(vanishText, 1000);
  getContactInfo();
}


//Makes Text Disapear after 1 second.
function vanishText(str) {
  _("productMessage").style.display = 'none';
}

//Event Listner for when the page loads.
window.addEventListener("load", getContactInfo());
