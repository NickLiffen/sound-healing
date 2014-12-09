var totalServices;




//Runs a function that goes and collects the total number of products in the database
totalServices = function () {
  var targetOne;
  targetOne = _("totalServices");
  ajaxGet("SQL/totalServices.php", totalSerciesOutput, targetOne, null);
};
function totalSerciesOutput(jsonObjOne, targetOne){
  var json_output, output;
  json_output = JSON.parse(jsonObjOne);
  if (isEmpty(json_output)) {
    targetOne.innerHTML = "You have no services - SOMETHING'S WRONGGG";
  } else {
    for (var i = 0; i < json_output.length; i++) {
      output = json_output[i].id;
      targetOne.innerHTML += output;
    }
  }
  totalClasses();
}



//Runs a function that goes and collects the total number stock
function totalClasses() {
  var targetTwo;
  targetTwo = _("totalClasses");
  ajaxGet("SQL/totalClassesSQL.php", totalClassesOutput, targetTwo, null);
};
function totalClassesOutput(jsonObjTwo, targetTwo){
  var json_output, output;
  json_output = JSON.parse(jsonObjTwo);
  if (isEmpty(json_output)) {
    targetTwo.innerHTML = "You have no classes - WHYYYYY :( :( !";
  } else {
    for (var i = 0; i < json_output.length; i++) {
      output = json_output[i].id;
      targetTwo.innerHTML += output;
    }
  }
  emailsToRespondTo();
}






//Runs a function that goes and collects the procut with the most stock
function emailsToRespondTo() {
  var targetThree;
  targetThree = _("emailStillToAswer");
  ajaxGet("SQL/emailsStillToAnswerSQL.php", emailsToRespondToOutput, targetThree, null);
};
function emailsToRespondToOutput(jsonObjThree, targetThree){
  var json_output, output;
  json_output = JSON.parse(jsonObjThree);
  if (isEmpty(json_output)) {
    targetThree.innerHTML = "You have no products so nothing with a maximum stock stock";
  } else {
    for (var i = 0; i < json_output.length; i++) {
      output = json_output[i].id;
      targetThree.innerHTML += output;
    }
  }
  emailsRespondedTo();
}





//Runs and collects the products with the least amount of stock
function emailsRespondedTo() {
  var targetFour
  targetFour = _("emailAnswered");
  ajaxGet("SQL/emailsRespondedTo.php", emailsRespondedToOutput, targetFour, null);
};
function emailsRespondedToOutput(jsonObjFour, targetFour){
  var json_output, output;
  json_output = JSON.parse(jsonObjFour);
  if (isEmpty(json_output)) {
    targetFour.innerHTML = "You have no products so nothing with a minimum stock!";
  } else {
    for (var i = 0; i < json_output.length; i++) {
      output = json_output[i].id;
      targetFour.innerHTML += output;
    }
  }
  outputAllClasses();
}




//This is a function that collects all different products that have 0 stock reamaining.
function outputAllClasses() {
  var targetFive
  targetFive = _("allClasses");
  ajaxGet("SQL/allClassesSQL.php", outputItems, targetFive, null);
};
function outputItems(jsonObjFive, targetFive) {
  var json_output, output;
  json_output = JSON.parse(jsonObjFive);
  //Checks to see if anything has come back from the search. If nothing has. Prints out message.
  if (isEmpty(json_output)) {
    targetFive.innerHTML = "<div class='noResults'><p>You Currently have no classes :(<p></div>";
  } else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='item" + json_output[i].id + "' class='item'>" +
      '<p> Class Name: ' + json_output[i].classname + '</p>' +
      '<p> Class Description: ' + json_output[i].classdescription + '</p>' +
      '<p> Class Price: £ ' + json_output[i].classprice + '</p>' +
      '<p> Class Disclamer: ' + json_output[i].classdisclamer + '</p>' +
      '<p> Service Name: ' + json_output[i].service + '</p>' +
      "</div>";

      //This outputs the array
      targetFive.innerHTML += output;
    }
  }
}
//Set up the Event Listener.
window.addEventListener("load", totalServices);
