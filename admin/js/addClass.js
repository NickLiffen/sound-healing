
/*
This Page Runs the addClass.php Javascript. It validates the user inputs and then sends off the form to the database and prints a success message.

Things To Do:

1. Make the User be able to add an image.
2. Make the Form look a bit nicer and wow factor.
*/

//This function adds a class to the database.
function sendClassForm(){

  //Inititiates all the varibles that we are going to use to validae the form.
  var classname, classdescription, classprice, classstarttime, classdate, classendtime, classparticipants, classdiscalmer, dropDownServices, serviceChosen, formdata;

  //Collectting varibles. All using my _ function that collects ID's.
  classname = _("classname").value;
  classdescription = _("classdescription").value;
  classprice = _("classprice").value;
  classstarttime = _("classstarttime").value;
  classendtime = _("classendtime").value;
  classparticipants = _("classparticipants").value;
  classdisclamer = _("classdisclamer").value;
  classdate = _("classdate").value;
  //This gets the chosen Elemnet of the Drop Down box which chooses the services.
  dropDownServices = _("differentServices");
  serviceChosen = dropDownServices.options[dropDownServices.selectedIndex].value;

  //FormData is a safe and easy method of posting data.
  formdata = new FormData();
  formdata.append("classname", classname);
  formdata.append("classdescription", classdescription);
  formdata.append("classprice", classprice);
  formdata.append("classdisclamer", classdisclamer);
  formdata.append("serviceChosen", serviceChosen);
  formdata.append("classstarttime", classstarttime);
  formdata.append("classendtime", classendtime);
  formdata.append("classparticipants", classparticipants);
  formdata.append("classdate", classdate);

  //Calling the AJAX Post function that I have already created
  ajaxPost("SQL/addClassInfoSQL.php", formdata, outputMessage, null, null);
}


//This function is called once the class has been added. after the ajax call. it prints a success message.
function outputMessage(){

  //Inititiates all the varibles that we are going to use toe empty the values of the form
  var classname, classdescription, classprice, classdiscalmer, classstarttime, classendtime, classparticipants, successMessage;

  //Sets all the feilds in the Form to Blank.
  classname = _("classname").value = " ";
  classdescription = _("classdescription").value = " ";
  classprice = _("classprice").value = " ";
  classstarttime = _("classstarttime").value = " ";
  classendtime = _("classendtime").value = " ";
  classparticipants = _("classparticipants").value = " ";
  classdiscalmer = _("classdisclamer").value = " ";
  classdate = _("classdate").value = " ";

  //Ouputs the success Message.
  successMessage = _("successMessage");
  successMessage.innerHTML = 'Your Class has been added :)';
  successMessage.style.color = 'green';

}


//Validates the Form that allows the admin to add a class to the database
validateForm = function () {

  //Inititiates all the varibles that we are going to use to validae the form.
  var errors, a, b, c, d, e, f, g, h, i, errorClassName, errorClassDescription, errorcClassPrice, errorClassDisclamer, errorClassStartTime, errorClassEndTime, errorClassParticipants, errorClassDate;

  //Sets errors to 0
  errors = 0;

  //Checks the Class Name value of the form is entered.
    a = document.forms["addClass"]["classname"].value;
    if (a == null || a == "") {
      errorClassName = _('errorclassname');
      errorClassName.style.color ='red';
      errorClassName.innerHTML = "Please enter a Name";
      errors = errors + 1;
    }

  //Checks the Class Description of the form is entered
    c = document.forms["addClass"]["classdescription"].value;
    if (c == null || c == "") {
      errorClassDescription = _('errorclassDescription');
      errorClassDescription.style.color ='red';
      errorClassDescription.innerHTML = "Please enter a Description";
      errors = errors + 1;
    }

  //Checks the Class Price of the form is entered
    d = document.forms["addClass"]["classprice"].value;
    if (d == null || d == "" || !isNumber(d)) {
      errorcClassPrice = _('errorclassprice');
      errorcClassPrice.style.color = 'red';
      errorcClassPrice.innerHTML = "Please enter a valid Price";
      errors = errors + 1;
    }

  //Checks the Class Disclamer of the form is entered
    e = document.forms["addClass"]["classdisclamer"].value;
    if (e == null || e == "") {
        errorClassDisclamer = _('errorclassdisclaimer');
        errorClassDisclamer.style.color = 'red';
        errorClassDisclamer.innerHTML = "Please enter a Disclamer";
        errors = errors + 1;
      }

      //Checks the Class Start Time of the form is entered
    f = document.forms["addClass"]["classstarttime"].value;
    if (f == null || f == "") {
        errorClassStartTime = _('errorclassstarttime');
        errorClassStartTime.style.color = 'red';
        errorClassStartTime.innerHTML = "Please enter a Start Time";
        errors = errors + 1;
      }

      //Checks the Class Start Time of the form is entered
    g = document.forms["addClass"]["classendtime"].value;
    if (g == null || g == "") {
        errorClassEndTime = _('errorclassendtime');
        errorClassEndTime.style.color = 'red';
        errorClassEndTime.innerHTML = "Please enter a End Time";
        errors = errors + 1;
      }

      //Checks the Class Partisipants has been entered
    h = document.forms["addClass"]["classparticipants"].value;
    if (h == null || h == "") {
        errorClassDisclamer = _('errorclassparticipants');
        errorClassDisclamer.style.color = 'red';
        errorClassDisclamer.innerHTML = "Please enter a Max Num of People";
        errors = errors + 1;
      }

         //Checks the Class Date has been entered
    i = document.forms["addClass"]["classdate"].value;
    if (i == null || i == "") {
        errorClassDate = _('errorclassdate');
        errorClassDate.style.color = 'red';
        errorClassDate.innerHTML = "Please enter a Date";
        errors = errors + 1;
      }

  //If there are any errors are found it returns false but if not it proccedds.
    if (errors > 0) {
        return false;
    } else {
        sendClassForm();
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
