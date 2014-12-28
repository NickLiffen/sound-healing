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
      "<p><span class='bold'> Class Start & End Time: </span>" + json_output[i].classstarttime + ' - ' + json_output[i].classendtime + '</p>' +
      "<p><span class='bold'> Number of spaces left: </span>" + json_output[i].classparticipants + '</p>' +
      "<p><span class='bold'> Class Disclaimer: </span>" + json_output[i].classdisclamer + '</p>' +
      "<p> <input type='button' class='modify' value='Find Out More'/> </p>" +
      "</fieldset>" +
      "</div>" +
      "</div>";
      target.innerHTML += output;
    }
  }

}

//Event Listner for when the page loads.
window.addEventListener("load", pageLoaded);