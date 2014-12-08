//Sends though the ID of the product that the user wants to UPDATE.
function ajaxModify(productID, str, target) {
  ajaxGet("SQL/updateProductSQL.php?id=" + productID, updateProduct, target, str);
}
//Shows the new form that allows the user to enter in the new information.
function updateProduct(jsonObj, target, str) {

  console.log(jsonObj);
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
    "<p>Please Update the Class Name: *<input type='text' id='classUpdate' name='classUpdate' value = " + json_output[i].classname + " > </p>" +
    "<p>Please Update the Class Description: *<input type='text' id='descriptionUpdate' name='descriptionUpdate' value = " + json_output[i].classdescription + " > </p>" +
    "<p>Please Update the Class Price: £ *<input type='text' id='priceUpdate' name='priceUpdate' value = " + json_output[i].classprice + " > </p>" +
    "<p>Please Update the Class Disclamier: *<input type='text' id='disclaimerUpdate' name='disclaimerUpdate' value = " + json_output[i].classdisclamer + " > </p>" +
    "<p>Please enter a Service:* <select id='serviceDropDown'>" +
    "<option value=  " + json_output[i].service + " > " + json_output[i].service +  "</option>" +
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
