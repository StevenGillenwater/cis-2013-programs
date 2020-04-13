//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
    //Declares all of the values that will be used within the function. 
    var i, j, k, stringOutput, intNumber, intCount;
    
    //Sets the intial values for i, j, intCount, and the stringOutput. 
    i = 0;
    j = 1;
    stringOutput = i + " " + j;
    intCount = 2;
    
    //Gets the number of fib numbers that the user wishes to be displayed from the HTML.
    intNumber = parseInt($("total_fib").value);
    
    //Validates that the user entry is a number and between 1 and 100. If these conditions are not met this code clears the input and alerts the user to re-enter a valid number.
    if (isNaN(intNumber) || intNumber<1 || intNumber>100) {
        
        $("total_fib").value = "";
        alert ("Invalid Entry. Please enter a number that is greater than 1 and less than 100.");
        
      //If the number entered is 1, it will not enter the loop. The output will simply be the initial values for i and j.
      //If the number entered is greater than 1, the loop will run until intCount (starting value 2) is greater than the number entered. 
    } else {
        
        while (intCount <= intNumber) {
            
            k = i+j;
            i = j;
            j = k;
            intCount ++;
            stringOutput = stringOutput + " " + k;
          
        }
        
        //This statement sends the value of stringOutput to the DOM. It will output each fib number until the loop is done. 
        $("output").value = stringOutput;
         
    }
};

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};  