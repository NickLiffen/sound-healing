
//AJAX function that sends the ONKEYUP letters.
function searchAJAX(str) {
  var target;
  if (str.length == 0) {
    _("collectInfo").innerHTML = "";
    _("collectInfo").style.border = "0px";
    return;
  }
  target = _("collectInfo");
  ajaxGet("SQL/searchDatabaseSQL.php?str=" + str, json, target, str);
}
//This function sends through the letters to the AJAX function.
function pageLoaded(str) {
  var fetchbutton;
  fetchbutton = _("searchBox");
  if (fetchbutton) {
    fetchbutton.addEventListener("focus", searchAJAX(str));
  }
}

function json(jsonObj, target, str) {
  var json_output, output;
  //Sets the page content to nothing so we don't see multiple of the same products on screen.
  target.innerHTML = "";
  json_output = JSON.parse(jsonObj);
  //Checks to see if anything has come back from the search. If nothing has. Prints out message.
  if (isEmpty(json_output)) {
    target.innerHTML = "<div class='noResults'><p>No Items where found for " + str + " Sorry!<p></div>";
  } else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
      output = "<div id='item" + json_output[i].id + "' class='item'>" +
      '<p> Class Name: ' + json_output[i].classname + '</p>' +
      '<p> Class Description: ' + json_output[i].classdescription + '</p>' +
      '<p> Class Price: £ ' + json_output[i].classprice + '</p>' +
      '<p> Class Disclamer: ' + json_output[i].classdisclamer + '</p>' +
      '<p> Service Name: ' + json_output[i].service + '</p>' +
      "<p> Delete Product? <input type='button' class='delete' value='Delete'/> </p>" +
      "<p> Update Product? <input type='button' class='modify' value='Modify'/> </p>" +
      "</div>";

      //This outputs the array
      target.innerHTML += output;
      getButtons(str, target);
    }
  }
}

//This function collects the buttons for Deleting and Modiying a product.
function getButtons(str, target) {
  var fetchRemoveButton, fetchModifyButton;
  //Gets the button that says 'Remove'
  fetchRemoveButton = _c("delete");
  //Gets the button that says 'Modify'
  fetchModifyButton = _c("modify");


  //Remove Button.
  for (var i = 0, j = fetchRemoveButton.length; i < j; i++) {
    fetchRemoveButton[i].addEventListener("click", function () {
      var e, productID, newID;
      //Bubbles up and finds the ID of the product they want to modify
      e = event.target;
      while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
      }
      productID = e.id;
      //Removes everything but the numbers.
      newID = productID.replace(/[^0-9.]/g, "");
      ajaxDelete(newID, str);
    });
  }


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
      //Removes everything but the numbers.
      newID = productID.replace(/[^0-9.]/g, "");
      ajaxModify(newID, str, target);
    });
  }
}


// -----------  This part of the file modifies the class    -------------



//Sends though the ID of the product that the user wants to UPDATE.
function ajaxModify(productID, str, target) {
  ajaxGet("SQL/updateProductSQL.php?id=" + productID, updateProduct, target, str);
}
//Shows the new form that allows the user to enter in the new information.
function updateProduct(jsonObj, target, str) {

  var json_output, newTarget, output;
  json_output = JSON.parse(jsonObj);
  //Removes all other products from the page. Focuses the user on that one specific update form.
  target.innerHTML = "";
  newTarget = _("modifyResult");
  //Removes all other forms that have been on the page before. The user only wants to see the current form not all the previous ones.
  newTarget.innerHTML = "";
  newTarget.style.display = "block";

  //Starts the loop and prints out the form.
  for (var i = 0; i < json_output.length; i++) {
    output = "<h2>Would you like to Update a product?</h2>" +
    "<form method='post' id = 'Form' enctype='multipart/form-data' name='Form' onsubmit='return false;'>" +
    "<br />" +
    "<input type = 'hidden'  id='idUpdate' name = 'id' value = " + json_output[i].id + " > " +
    "<p>Please Update the Class Name: *<input type='text' id='classUpdate' name='classUpdate' value = '" + json_output[i].classname + "' > </p>" +
    "<p>Please Update the Class Description: *<input type='text' id='descriptionUpdate' name='descriptionUpdate' value = '" + json_output[i].classdescription + "' > </p>" +
    "<p>Please Update the Class Price: £ *<input type='text' id='priceUpdate' name='priceUpdate' value = '" + json_output[i].classprice + "' > </p>" +
    "<p>Please Update the Class Disclamier: *<input type='text' id='disclaimerUpdate' name='disclaimerUpdate' value = '" + json_output[i].classdisclamer + "' > </p>" +
    "<p>Please enter a Service:* <select id='serviceDropDown'>" +
    "<option value=  '" + json_output[i].service + "' > '" + json_output[i].service +  "' </option>" +
    "<option value='ShaktySounds' id='shaktySounds'>Shakty Sounds</option>" +
    "<option value='CrystalHealing' id ='crystalHealing'>Crystal Healing</option>" +
    "<option value='Test' id='test'>Test</option>" +
    "</select></p>" +
    "<br />" +
    "<input name='submitNew' id='submitNew' type='button' value='Update Class'/>" +
    "</form>" +
    "<div id='statusUpdate'></div>";
    //This outputs the array
    newTarget.innerHTML += output;
  }
  finalUpdate(str, newTarget);
}
//Sends through the final information to be updated.
function finalUpdate(str, newTarget) {
  var fetchSubmitButton;
  fetchSubmitButton = _("submitNew");
  if (fetchSubmitButton) {
    fetchSubmitButton.addEventListener("click", function () {
      //Creates Varaibles.
      var idUpdate, classUpdate, descriptionUpdate, priceUpdate, serviceUpdate, serivceText, disclaimerUpdate, formData;


      //All the files brought in from the form.
      idUpdate = _("idUpdate").value;
      classUpdate = _("classUpdate").value;
      descriptionUpdate = _("descriptionUpdate").value;
      priceUpdate = _("priceUpdate").value;
      disclaimerUpdate = _("disclaimerUpdate").value;
      serivceText = _("serviceDropDown");
      serviceUpdate = serivceText.options[serivceText.selectedIndex].value;


      //FormData is a safe and easy method of posting data.
      formdata = new FormData();
      formdata.append("idUpdate", idUpdate);
      formdata.append("classUpdate", classUpdate);
      formdata.append("descriptionUpdate", descriptionUpdate);
      formdata.append("priceUpdate", priceUpdate);
      formdata.append("disclaimerUpdate", disclaimerUpdate);
      formdata.append("serviceUpdate", serviceUpdate);
      //Calling the AJAX Post function that I have already created
      ajaxPost("SQL/updatedProductInfoSQL.php", formdata, modifyMessage, newTarget, str);
    });
  }
}
//Shows the user the modified message.
function modifyMessage(jsonObj, newTarget, str) {
  var message;
  newTarget.style.display = "none";
  messsage = _("productModifyShow").style.display = "block";
  window.setTimeout(vanishText, 1000);
  searchAJAX(str);
}





// -----------  This part of the file deletes the class once the delete button has been pressed    -------------

//AJAX function that sends though the DELETED ID.
function ajaxDelete(productID, str) {
  ajaxGet("SQL/deleteProductSQL.php?id=" + productID, deleteMessage, str, null);
}
//Makes the message visible for 1 second.
function deleteMessage(object, str) {
  var message;
  messsage = _("productDeleteShow").style.display = "block";
  window.setTimeout(vanishText, 1000);
  searchAJAX(str);
}
//Makes both the display of Modify and Delete Messages none.
function vanishText(str) {
  _("productModifyShow").style.display = 'none';
  _("productDeleteShow").style.display = 'none';
}



// -----------  This file is called once the delete button is pressed. It deletes a class from a database     -------------



function getSearchBar(){
  var getSearch;
  getSearch = _("searchBox");
  if(getSearch){
    getSearch.addEventListener("keyup", function(){
      getSearch.addEventListener("focus", searchAJAX(this.value));
    });
  }
}
window.addEventListener("load", getSearchBar());
