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
        target.innerHTML = "<div class='noResults'><p>No classes are available at the moment - please check again soon<p></div>";
    }
    else {
    //Starts the loop -- THIS IS HOW I OUTPUT THE DATA ON THE PAGE
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='service" + json_output[i].id + "' class='center'>" +
      "<button type='button' class='replyContactForm'  >" + json_output[i].servicename + "</button>" +
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
      output = "<div id='serviceInfo" + json_output[i].id + "' class='center'>" +
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
    target.innerHTML = "<div class='noResults'><p>FUCK somethings gone wrong!<p></div>";
  } else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='item" + json_output[i].id + "'>" +
      "<div class = 'itemBoxes'>"+
      "<fieldset>" +
      "<legend><span>" +json_output[i].classname + "</span></legend>" +
      "<p><span class='bold'> Class Description: </span>" + json_output[i].classdescription + '</p>' +
      "<p><span class='bold'> Class Price: £ </span>" + json_output[i].classprice + '</p>' +
      "<p><span class='bold'> Class Date: </span>" + json_output[i].classdate + " <span class='bold'>Time: </span> " + json_output[i].classstarttime + ' - ' + json_output[i].classendtime + '</p>' +
      "<p><span class='bold'> Number of spaces left: </span>" + json_output[i].classparticipants + '</p>' +
      "<p><span class='bold'> Class Disclaimer: </span>" + json_output[i].classdisclamer + '</p>' +
      "<p> <input type='button' class='modify' value='Book Now'/> </p>" +
      "</fieldset>" +
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
      
      "<form enctype='multipart/form-data' id='addClass' method='post' name='myForm' onsubmit='return false'>" +
                  
      "<p>Class Name Your Booking: </p><input id='className' name='className' type='text' value = '" + json_output[i].classname + "'>" +
              
      "<p>To Confirm, the Price: </p><input id='classPrice' name='classPrice' type='text' value = '" + json_output[i].classprice + "'>" +

      "<p>Your Name: </p><input id='customerName' name='name'><span id='errorname'></span><span class='error'></span> <span id='errorfullname'></span> <span class='error'></span>" +

      "<p>Your Email: </p><input id='customerEmail' name='email'><span id='erroremail'></span><span class='error'></span><span id='erroremail'></span> <span class='error'></span>" +

      "<p>Telephone: </p><input id='customerTelephone' name='telephone'><span id='errortelephone'></span><span class='error'></span> <span id='errorTelephone'></span> <span class='error'></span>" +

      "<p>Any Comments: </p><textarea id='comment' rows='5'></textarea><span id='errorcomment'></span><span class='error'></span><span id='errorMessage'></span> <span class='error'></span>" +

      "<p> Any price will be payed in cash/cheque on the day of the class. We will send you a confirmation email to confirm you have been booked on. If you do not receve this please contact us through the contact form section on this website - thank you.</p>" +

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

 _('className').readOnly = true;
  _('classPrice').readOnly = true;

  var fetchSubmitButton;

  fetchSubmitButton = _("submit");
  if(fetchSubmitButton){
    fetchSubmitButton.addEventListener("click", function(){

//Inititiates all the varibles that we are going to use to validae the form.
  var errors, a, b, c, d, e, errorFirstName, errorLastName, errorEmail, errorTelephone, errorMessage = " ";

  //Sets errors to 0
  errors = 0;

  //Checks the First Name value of the form is entered.
    a = document.forms["addClass"]["customerName"].value;
    if (a == null || a == "") {
        errorFirstName = _('errorfullname');
        errorFirstName.style.color ='red';
        errorFirstName.innerHTML = "Please enter your Name";
        errors = errors + 1;
    }

  //Checks to see if the Email has been entered.
    c = document.forms["addClass"]["customerEmail"].value;
    var atpos = c.indexOf("@");
    var dotpos = c.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=c.length) {
        errorEmail = _('erroremail');
        errorEmail.style.color ='red';
        errorEmail.innerHTML = "Please enter a valid email";
        errors = errors + 1;
    }

    //Checks the Telephone vaue has been entered.
      d = document.forms["addClass"]["customerTelephone"].value;
      if (d == null || d == "" || !isNumber(d)) {
          errorTelephone = _('errortelephone');
          errorTelephone.style.color = 'red';
          errorTelephone.innerHTML = "Please enter a valid phone number";
          errors = errors + 1;
      }

      //Checks the Telephone vaue has been entered.
        e = document.forms["addClass"]["comment"].value;
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
  messsage = _("successMessage").style.display = "block";
  display = _('changeDisplay').style.display = 'none';
  contactForm = _("contactForm1").style.display = "none";
  window.setTimeout(vanishText, 5000);
  //This scrolls down to the part where the contact form is printed out.
      $('html,body').animate({
        scrollTop: $("#navID").offset().top
        });
}
//Makes both the display of Modify and Delete Messages none.
function vanishText() {
  _("successMessage").style.display = 'none';
}


//Event Listner for when the page loads.
window.addEventListener("load", pageLoaded);