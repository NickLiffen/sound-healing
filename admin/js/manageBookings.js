//This outputs the contact information to the screen.
function getClassNames(){
    ajaxGet("SQL/collectClassNamesSQL.php", json, null, null);
};

function json(jsonObj){

 	var json_output, output, target;
    json_output = JSON.parse(jsonObj);
    targetPeople = _("peopleInClass");
    target = _("bookings");
    target.innerHTML = "";
    targetPeople.innerHTML = "";

    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No One Has Booked A Class Yet - Sorry<p></div>";
    }
    else {
    //Starts the loop -- THIS IS HOW I OUTPUT THE DATA ON THE PAGE
    for (var i = 0; i < json_output.length; i++) {

      output = "<div id='item" + json_output[i].classname + "' class='contactID'>" +
      "<h3> " + json_output[i].classname + '</h3>' +
      "<p> <input type='button' class='modify' value='People In Class'/> </p>" +
      "<p> <input type='button' class='delete' value='Delete Class'/> </p>" +
      "</div>";
      target.innerHTML += output;
		getClassName();
    }
  }
}

function getClassName(){
  //Gets the button that says 'Modify'
  var fetchModifyButton = _c("modify");
  var fetchDelteButton = _c("delete");
  var target = _("bookings");

  //Modify Button.
  for (var i = 0, j = fetchModifyButton.length; i < j; i++) {
    fetchModifyButton[i].addEventListener("click", function (event) {
      var e, productID, newID;
      //Bubbles up and finds the ID of the product they want to modify
      e = event.target;
      while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
      }
      productID = e.id;
      classname = productID.replace("item", "")
      //Removes everything but the numbers.
      getDetails(classname);
  });
}

 //Modify Button.
  for (var i = 0, j = fetchDelteButton.length; i < j; i++) {
    fetchDelteButton[i].addEventListener("click", function (event) {
      var e, productID, newID;
      //Bubbles up and finds the ID of the product they want to modify
      e = event.target;
      while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
      }
      productID = e.id;
      classname = productID.replace("item", "")
      //Removes everything but the numbers.
      deleteClass(classname);
    });
  }
}



function getDetails(classname){
	ajaxGet("SQL/getCustomerInfo.php?id=" + classname, printDetails, null, null);
}

function printDetails(jsonObj){

	var target = _("peopleInClass");

	 //Sets the page content to nothing so we don't see multiple of the same products on screen.
	  target.innerHTML = "";
	  json_output = JSON.parse(jsonObj);
  //Checks to see if anything has come back from the search. If nothing has. Prints out message.
  if (isEmpty(json_output)) {
    target.innerHTML = "<div class='noResults'><p>Something has gone wrong :(<p></div>";
  } else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='item" + json_output[i].id + "' class='customerBooking'>" +
      "<div class = 'itemBoxes'>"+
      "<p><span class='bold'>" + json_output[i].classname + '</span></p>' +
      "<p><span class='underline'> Customer Name: </span>" + json_output[i].customername + '</p>' +
      "<p><span class='underline'> Customer Email: </span> " + json_output[i].customeremail + '</p>' +
      "<p><span class='underline'> Customer Telephone: </span>" + json_output[i].customerphone + '</p>' +
      "<p><span class='underline'> Customer Comment: </span>" + json_output[i].customercomment + '</p>' +
      "<p> <input type='button' class='deleteCustomer' value='Remove Customer'/> </p>" +
      "</div>" +
      "</div>";

      //This outputs the array
      target.innerHTML += output;
      getCustomerID();
    }
  }
}


function getCustomerID(){
  var fetchDelteButton = _c("deleteCustomer");
  var target = _("bookings");

  //Modify Button.
  for (var i = 0, j = fetchDelteButton.length; i < j; i++) {
    fetchDelteButton[i].addEventListener("click", function (event) {
      var e, productID, newID;
      //Bubbles up and finds the ID of the product they want to modify
      e = event.target;
      while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
      }
      productID = e.id;
      customerID = productID.replace("item", "");

      //This fires off an AJAX Request to delete the user
      ajaxGet("SQL/deleteCustomerSQL.php?id=" + customerID, deleteMessage, null, null);
      
  });
}
}

//This deletes the class
function deleteClass(classname){
  ajaxGet("SQL/deleteBookingSQL.php?id=" + classname, deleteMessage, null, null);
}

function deleteMessage(jsonObj){
  var message;
  messsage = _("successMessage").style.display = "block";
  window.setTimeout(vanishText, 2000);
  getClassNames();

}
//Makes both the display of Modify and Delete Messages none.
function vanishText() {
  _("successMessage").style.display = 'none';
}

//Event Listner for when the page loads.
window.addEventListener("load", getClassNames());