var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";  //declares stringOutput inital value to be blank

    //define the individual troubleshooting tips per the chart
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    /* Need to be careful here when defining our boolean variables for use in the troubleshooting chart
     * and what you define as true or false.  For example, in the chart used in this problem,
     * a combination of Y-Y-Y results in messages 2, 3, & 4 being provided
     * to the user.  In this case, Y-Y-Y means
     * "the printer does NOT print"  AND "a red light is flashing" AND "the printer is unrecognized"
     */
    var boolPrinting = $("not_printing").selected;  //returns a value of true only when the not_printing html id is selected from the dropdown menu
    var boolRedLight = $("yes_redlight").selected;  //returns a value of true only when the yes_redlight html id is selected from the dropdown menu
    var boolRecognised = $("not_recognised").selected;  ////returns a value of true only when the not_recognized html id is selected from the dropdown menu

switch (true)
{
    case boolPrinting === true && boolRedLight === true && boolRecognised === true: //returns message when the user inputs that the printer is NOT working, the redlight IS flashing, and the computer is NOT recognizing the printer.
        stringOutput = stringMessage2 + stringMessage3 + stringMessage4;
        break;
    case boolPrinting === true && boolRedLight === true && boolRecognised === false: //printer is recognized by the computer, but it is not printing and the red light is flashing. 
        stringOutput = stringMessage4 + stringMessage5;
        break;
     case boolPrinting === true && boolRedLight === false && boolRecognised === true: //the red light is not flashing, but the printer is not printing nor recognized by the computer.
        stringOutput = stringMessage1 + stringMessage2 + stringMessage3;
        break;
     case boolPrinting === true && boolRedLight === false && boolRecognised === false: //the printer is not printing, but is recognized and the red light is not flashing. 
        stringOutput = stringMessage5;
        break;
     case boolPrinting === false && boolRedLight === true && boolRecognised === true: //the printer IS printing, despite the fact that the redlight IS flashing and the printer is NOT recognized. 
        stringOutput = stringMessage3 + stringMessage4;
        break;
     case boolPrinting === false && boolRedLight === true && boolRecognised === false: //the printer is printing, but the red light is flashing. 
        stringOutput = stringMessage4;
        break;
     case boolPrinting === false && boolRedLight === false && boolRecognised === true: //printer is printing, red light is not flashing, however it is not recognized by the computer. 
        stringOutput = stringMessage3;
        break;
     default: //statement that tells javascript to execute statements when none of the values match the value of the expression.
        stringOutput = stringMessage6;
        break;
}

$("output").value = stringOutput; //stores the value from stringOutput into "output" on the HTML

};


     
window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};


