

getContactInfo = function(){
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
        target.innerHTML = "<div class='noResults'><p>No Contact Information where found, Sorry!<p></div>";
    }
    else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
        output = "<div id='contactID" + json_output[i].id + "' class='contactID'>" +
            "<p> Person's Name: " + json_output[i].fullname + '</p>' +
            "<p> Person's Email: " + json_output[i].email + '</p>' +
            "<p> Person's Telephone: " + json_output[i].telephone + '</p>' +
            "<p> Product Comment: " + json_output[i].comment + '</p>' +
            "<p class='bold'> Date Form was Sent: " + json_output[i].currentDate + '</p>' +
            "</div>";
        target.innerHTML += output;
    }
  }
};

//Event Listner for when the page loads.
window.addEventListener("load", getContactInfo);
