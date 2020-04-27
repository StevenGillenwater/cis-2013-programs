var $ = function (id) 
{
    return document.getElementById(id);
}
//Function that counts the vowels (uppercase) in a user entered phrase. 
var vowels = function () 
{
    //Pulls the phrase from the DOM input, and stores it in stringEntry. Forces stringEntry to uppercase for simplicity in checking the vowels. 
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toUpperCase();
    //Checks to see if the user did not enter a phrase. If this condition is true, the user is alerted and prompted to enter a phrase and then select the desired option.
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
        //Declares intVowels, and initializes its value at 0. intVowel will be incremented for each vowel found in the user entered phrase. 
		var intVowels = 0;
		//For loop that counts the vowels. Uses intCount as the counter - it will run until intCount is no longer less than the length of the phrase string. All of the vowels are uppercase for simplicity. 
        for (var intCount = 0; intCount < stringEntry.length; intCount++)
        {
            if (stringEntry.charAt(intCount)==="A" || stringEntry.charAt(intCount)==="E" || stringEntry.charAt(intCount)==="I" || stringEntry.charAt(intCount)==="O" || stringEntry.charAt(intCount)==="U")
            {
                intVowels++;
            }
        }
		//Sends the intVowel count to the HTML. 
		$("output").value = "There are " + intVowels + " vowels in the above phrase.";
	}	
};
//Function that counts the number of consonants in a user entered phrase. 
var consonants = function () 
{
    //Pulls the phrase from the DOM input, and stores it in stringEntry. Forces entry to lowercase for simplicity in checking the consonants. 
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toLowerCase();
	
    //Checks to see if the user did not enter a phrase. If this condition is true, the user is alerted and prompted to enter a phrase and then select the desired option.
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
        //Declares intConsonants and initializes its value to 0. 
		var intConsonants = 0;
        //For loop that counts the number of consonants in a phrase. For simplicity, the counter is only incremented when the character is NOT a vowel. 
		for (var intCount = 0; intCount < stringEntry.length; intCount++)
        {
            //Switch statement that checks for vowels. If not a vowel, intConsonants is incremented. 
            switch (stringEntry.charAt(intCount))
            {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                case " ":
                    break;
                default:
                    intConsonants++;
                    break;
            }
        }
		
		
		//Stores the value of intConsonants in the HTML. 
		$("output").value = "There are " + intConsonants + " consonants in the above phrase.";
	}
};
//Function that reverses the user entered phrase. 
var reverse = function () 
{
    //Pulls the user input from the DOM, and stores it in stringEntry. Checks to see if the user did not enter a phrase. If that condition is true, the user is then notified and prompted to enter a phrase.
	var stringEntry = $("phrase").value;
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
        //Declares stringReversed, and initalizes its value to a blank. 
		var stringReversed = "";
		/*For loop that reverses the phrase entered. Sets intCount to the length of the phrase entered (minus 1) as to account for the fact that array values start at 0 rather than 1. 
         Decrements the counter until intCount is equal to 0.
        */
        for (var intCount = stringEntry.length - 1; intCount >= 0; intCount--)
        {   //Adds the value of each number at intCount to the already existing characters. 
            stringReversed = stringReversed + stringEntry.charAt(intCount);
        }
		//Sends the value of stringReversed into the HTML.
		$("output").value = "The reverse of the above phrase is:\n" + stringReversed;
	}
};

var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  