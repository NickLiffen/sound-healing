//This function loads when the page is first loaded and it collects what services are avaible
function pageLoaded(){
	var target;
    target = _("servicesOptions");
    target.innerHTML = "";
    ajaxGet("SQL/collectServicesSQL.php", output, target, null);
}


function output(jsonObj, target){
	var json_output, output;
    json_output = JSON.parse(jsonObj);

    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No Services are available at the moment - please check again soon<p></div>";
    }
    else {
    //Starts the loop -- THIS IS HOW I OUTPUT THE DATA ON THE PAGE
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='service" + json_output[i].id + "' class='center'>" +
      "<button type='button' class='bookingServices'  >" + json_output[i].servicename + "</button>" +
      "</div>";
      target.innerHTML += output;
        //Collecting te ID of the Contact Request
        var id = json_output[i].id

        outputServiceInformation(id);
    }
  }
}

//This function will collect the ID of the service choosen as there can be many services.
function outputServiceInformation(id){
  var itemsContainer, e, data;

  itemsContainer = _("servicesOptions");
  itemsContainer.addEventListener("click", function (event) {
    e = event.target;
    while (e.id.indexOf('service') == -1) {
      e = e.parentNode;
    }
    data = e.id;
    productID = data.replace(/[^0-9.]/g, "");

    //This function prints out the description - pass through the ID for the AJAX Request, the target for display purposes later on, and the ID for any futher requests.
    collectInfo(productID, productID);
  }, false);
}

//Sends off an AJAX request to collect the information about the service choosen
function collectInfo(newID, productID){
	ajaxGet("SQL/serviceInfoSQL.php?id=" + newID, outputInfo, productID, null);
}

//Outputs the information onto the page.
function outputInfo(jsonObj, id){
	var json_output, output, display, serviceInformation;

	display = _('changeDisplay').style.display = 'block';

  json_output = JSON.parse(jsonObj);

	newTarget = _('serviceInformation');
	newTarget.innerHTML = " ";

//Starts the loop -- THIS IS HOW I OUTPUT THE DATA ON THE PAGE
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='serviceInfo" + json_output[i].id + "' class='classDescriptionBooking'>" +
      "<p>" + json_output[i].servicedescription + '</p>' +
      "</div>";
      newTarget.innerHTML += output;

      var serviceName = json_output[i].servicename;
    }

    collectClasses(serviceName);
}

//This function goes and collects the classes avaible for the service
function collectClasses(serviceName){
  ajaxGet("SQL/serviceClassInfoSQL.php?id=" + serviceName, outputClassInfo, null, null);
}


function outputClassInfo(jsonObj){

var json_output, output, target;
  //Sets the page content to nothing so we don't see multiple of the same products on screen.
  contactForm = _("contactForm1").style.display = "none";
  target = _("classesAvailble");
  target.innerHTML = "";
  json_output = JSON.parse(jsonObj);
  //Checks to see if anything has come back from the search. If nothing has. Prints out message.
  if (isEmpty(json_output)) {
    target.innerHTML = "<div class='noResults'><p>No Classes avaible at this moment in time - Sorry!<p></div>";
  } else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='item" + json_output[i].id + "'>" +
      "<div class = 'itemBoxes'>"+
      "<h3 class ='itemTitle'>" +json_output[i].classname + "</h3>" +
      "<div class = 'paddingBottom'></div>" +
      "<p class = 'itemDesc'>" + json_output[i].classdescription + '</p>' +
      "<div class ='itemInfo'>" +
      "<p class = 'itemDetails'><img src = 'img/glyphicons-268-credit-card.png'</img> £" + json_output[i].classprice + '</p>' +
      "<p class = 'itemDetails'><img src = 'img/glyphicons-46-calendar.png'</img> " + json_output[i].classdate +'</p>' + 
      "<p class = 'itemDetails'><img src = 'img/glyphicons-55-clock.png'</img> " + json_output[i].classstarttime + ' - ' + json_output[i].classendtime + '</p>' +
      "<p class = 'itemDetails'><img src = 'img/glyphicons-44-group.png'</img> " + json_output[i].classparticipants + ' remaining spaces</p>' + 
      "</div>" +
      "<p id ='bookingBox'> <input type='button' class='bookingSubmit' value='Book Now'/> </p>" +
      "</div>" +
      "</div>";
      target.innerHTML += output;

      getID();
    }
  }
}


//This gets the ID of the class
function getID(){
var fetchModifyButton;
    //Gets the button that says 'Modify'
    fetchModifyButton = _c("modify");
    //Remove Button.
    for (var i = 0, j = fetchModifyButton.length; i < j; i++) {
        fetchModifyButton[i].addEventListener("click", function () {
          var e, productID, newID;
            //Bubbles up and finds the ID of the product they want to modify
            e = event.target;
            while (e.id.indexOf('item') == -1) {
                e = e.parentNode;
            }
            productID = e.id;
            //Removes everything but the numbers.
            newID = productID.replace(/[^0-9.]/g, "");
            getClassInfoForBooking(newID, newID);
        });
    }
}

function getClassInfoForBooking(newID, IDtoUpdate){
    ajaxGet("SQL/classInfoForBooking.php?id=" + newID, outputForm, IDtoUpdate, null);
}

function outputForm(jsonObj, IDtoUpdate){
  var json_output, output, target;
  //Sets the page content to nothing so we don't see multiple of the same products on screen.
  target = _("contactForm1");
  target.innerHTML = "";
  target.style.display="block";
  json_output = JSON.parse(jsonObj);
  //Checks to see if anything has come back from the search. If nothing has. Prints out message.
  if (isEmpty(json_output)) {
    target.innerHTML = "<div class='noResults'><p>FUCK somethings gone wrong!<p></div>";
  } else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
      output = 

      "<h1 id ='contactwelcome'> Booking Form </h1>" +

      "<div id='item" + json_output[i].id + "'>" +
      
      "<form enctype='multipart/form-data' id='bookingForm' method='post' name='myForm' onsubmit='return false'>" +
                  
      "<p>Class Name Your Booking: </p><input id='className' name='className' type='text' value = '" + json_output[i].classname + "'>" +
              
      "<p>To Confirm, the Price: </p><input id='classPrice' name='classPrice' type='text' value = '" + json_output[i].classprice + "'>" +

      "<p>Your Name: </p><input id='customerName' name='name'><span id='errorname'></span><span class='error'></span> <span id='errorfullname'></span> <span class='error'></span>" +

      "<p>Your Email: </p><input id='customerEmail' name='email'><span id='erroremail'></span><span class='error'></span><span id='erroremail'></span> <span class='error'></span>" +

      "<p>Telephone: </p><input id='customerTelephone' name='telephone'><span id='errortelephone'></span><span class='error'></span> <span id='errorTelephone'></span> <span class='error'></span>" +

      "<p>Any Comments: </p><textarea id='comment' rows='5'></textarea><span id='errorcomment'></span><span class='error'></span><span id='errorMessage'></span> <span class='error'></span>" +

      "<div class = 'paddingBottom'></div>" +

      "<input type='checkbox' name='termsAndCondition' value='termsAndCondition' id='termsAndCondition'> Please Accept the <a id='termsButton'>Terms and Conditions</a>.<span id='errorTerms'></span><span class='error'></span> <span id='errorTerms'></span> <span class='error'></span>"  +

      "<p class='oblique'>Any Class will be paid in cash or bank transfer. You will recevier further information through a confirmation email. Please note your booking & attendance is only confirmed once payment is made & you receive email confirmation</p>" +

      "<div id ='submitBtn'><input id='submit' name='submit' type='button' value='Submit'></div>" +

      "</form>" +

      "</div>";
      target.innerHTML += output;

      //This scrolls down to the part where the contact form is printed out.
      $('html,body').animate({
        scrollTop: $("#contactForm1").offset().top
        });

      validateForm(IDtoUpdate);
    }
  }
}


function validateForm(IDtoUpdate){

var termsButton, fetchSubmitButton;

//Makes the Class Name and Price Read Only
_('className').readOnly = true;
_('classPrice').readOnly = true;

//This Checks the Terms and Conditions
termsButton = _("termsButton");
termsButton.style.textDecoration = "underline";
termsButton.style.fontWeight = "900";
if(termsButton){
    termsButton.addEventListener("click", function(){
        var windowObjectReference, strWindowFeatures;
        strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        windowObjectReference = window.open("termsandconditions.php", "Terms And Conditions", strWindowFeatures);
    });
  }



  fetchSubmitButton = _("submit");
  if(fetchSubmitButton){
    fetchSubmitButton.addEventListener("click", function(){

//Inititiates all the varibles that we are going to use to validae the form.
  var errors, a, b, c, d,  errorFirstName, errorLastName, errorEmail, errorTelephone, errorTerms = " ";

  //Sets errors to 0
  errors = 0;

  _('errorfullname').innerHTML = " ";
  _('erroremail').innerHTML = " ";
  _('errortelephone').innerHTML = " ";
  _('errorTerms').innerHTML = " ";

  //Checks the First Name value of the form is entered.
    a = document.forms["bookingForm"]["customerName"].value;
    if (a == null || a == "") {
        errorFirstName = _('errorfullname');
        errorFirstName.style.color ='red';
        errorFirstName.style.fontWeight ='bold';
        _('customerName').style.margin = "0px 0px 0px 0px";
        errorFirstName.innerHTML = "Please enter your Name";
        errors = errors + 1;
    }

  //Checks to see if the Email has been entered.
    c = document.forms["bookingForm"]["customerEmail"].value;
    var atpos = c.indexOf("@");
    var dotpos = c.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=c.length) {
        errorEmail = _('erroremail');
        errorEmail.style.color ='red';
        errorEmail.style.fontWeight ='bold';
        _('customerEmail').style.margin = "0px 0px 0px 0px";
        errorEmail.innerHTML = "Please enter a valid email";
        errors = errors + 1;
    }

    //Checks the Telephone vaue has been entered.
      d = document.forms["bookingForm"]["customerTelephone"].value;
      if (d == null || d == "" || !isNumber(d) || d.length > 11 || d.length < 11) {
          errorTelephone = _('errortelephone');
          errorTelephone.style.color = 'red';
          errorTelephone.style.fontWeight ='bold';
          _('customerTelephone').style.margin = "0px 0px 0px 0px";
          errorTelephone.innerHTML = "Please enter a valid phone number (11 Digits please)";
          errors = errors + 1;
      }

      if (_('termsAndCondition').checked) {
            //Do Nothing
        } else {
        errorTerms = _('errorTerms');
        errorTerms.style.color ='red';
        errorTerms.style.fontWeight ='bold';
        _('termsAndCondition').style.margin = "0px 0px 0px 0px";
        errorTerms.innerHTML = "Please Accept Terms and Conditions";
        errors = errors + 1;
            
        }



  //If there are any errors are found it returns false but if not it proccedds.
    if (errors > 0) {
        return false;
    } else {
        saveToDatabase(IDtoUpdate);
    }
      });
  }
}

function saveToDatabase(IDtoUpdate){


      var name, customerEmail, price, customerName, customerTelephone, comment, formdata;

      name = _('className').value;
      price = _('classPrice').value;
      customerName= _('customerName').value;
      customerEmail = _('customerEmail').value;
      customerTelephone = _('customerTelephone').value;
      comment = _('comment').value;

      //FormData is a safe and easy method of posting data.
      formdata = new FormData();
      formdata.append("IDtoUpdate", IDtoUpdate);
      formdata.append("name", name);
      formdata.append("price", price);
      formdata.append("customerName", customerName);
      formdata.append("customerEmail", customerEmail);
      formdata.append("customerTelephone", customerTelephone);
      formdata.append("comment", comment);

      //changeScreenLayout();

      ajaxPost("SQL/updateTableBooking.php", formdata, changeScreenLayout, null, null);

  
}

function changeScreenLayout(jsonObj){
  var message, display, contactForm;

  message = _('bookingConfirmation');
  display = _('changeDisplay').style.display = 'none';
  contactForm = _("contactForm1").style.display = "none";

  message.style.display = 'block';
  message.style.color ='green';
  message.style.fontWeight ='bold';
  message.style.textAlign="center";
  message.innerHTML = "Thank you - Your place has been booked - you will receciver a confirmation email"

  window.setTimeout(vanishText, 5000);


  //This scrolls down to the part where the contact form is printed out.
      $('html,body').animate({
        scrollTop: $("#navID").offset().top
        });
}
//Makes both the display of Modify and Delete Messages none.
function vanishText() {
  _("bookingConfirmation").style.display = 'none';
}


//Event Listner for when the page loads.
window.addEventListener("load", pageLoaded);