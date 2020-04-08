/* IntCount keeps count of how many guesses the user has made (limited to three),
   while IntTotalRemaining is used to give the user an countdown of how many guesses that they have left. */

var intMax, intMin, intRandom, intGuess, intCount, intTotalRemaining; 


//prompts the user for the minimum value for their range. Cannot be less than 0 and must be a number.
intMin = parseInt(prompt("Please enter the lowest number (no lower than 0) for your guessing range: ")); 

//The while loop validates that the number entered is greater than 0 and a number. If either of these conditions are not met it prompts the user to re-enter.
while (isNaN(intMin) || intMin < 0) {  
    
       intMin = parseInt(prompt("The number that you entered was invalid. \n" + "Please enter the lowest number (no lower than 0) for your guessing range: "));
}

/*Prompts the user for the maximum value for their range.
 Must be at least two greater than the minimum number entered and a number. */
intMax = parseInt(prompt("Please enter the highest number (must be at least two more than your lowest number) for your guessing range: "));

//The while loop validates that the number entered is at least two more than the minimum numbered entered and a number. If either of these condtions are not met it prompts the user to re-enter. 
while (isNaN(intMax) || intMax < intMin + 2) { 
    
    intMax = parseInt(prompt("The number that you entered was invalid. \n" + "Please enter the highest number (must be at least two more than your lowest number) for your guessing range: "));
}

//Calculates the random computer generated number for the game. 
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin); 
    console.log(intRandom);
    
//Sets the displayed countdown to 3 guesses. Each time a user enters a number that is incorrect the counter will display one less. 
intTotalRemaining = 3;

/* Sets the count to begin at 1. This is set to 1 rather than 0 because the user is prompted to enter a guess prior to entering the main game loop. If the user's first guess is wrong,
 * they are prompted to enter a new number and THEN the count is increased by 1. */
intCount = 1;

//Alerts the user to the number of guesses that they have, and allows the first guess. 
intGuess = parseInt(prompt("You have three guesses in total. Enter your guess: "));

//While loop that checks to make sure that the guess is a number and within the allowed range. If either of these conditions are not met it prompts the user to re-enter. 
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) { 
    
    intGuess = parseInt(prompt("Invalid entry. Please make sure that your number is between the range " + intMin + " and " + intMax + "\n Enter your guess: "));
    
}

//Allows for three guesses in total. If the player has not entered the correct number by the time that the counter is done, the loop is exited and the "Better luck next time" message is sent. 
while (intCount < 3) {
    
    //Checks to see whether or not the player has guessed the correct randomly generated number. 
    if (intGuess != intRandom) { 
        
        if (intGuess < intRandom) {
            
            //Decreases the user facing count by one. 
            intTotalRemaining--; 
            
            intGuess = parseInt(prompt("Your guess of " + intGuess + " is too low!" + "\nYou have " + intTotalRemaining + " guesses remaining." + " Enter your guess: "));
            
            //Checks to see if the newly entered number fits within the confines of the range and is a number. If these conditions are not met the player is prompted to re-enter. 
            while  (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {  
                
                intGuess = parseInt(prompt("Invalid entry. Please make sure that your number is between the range " + intMin + " and " + intMax + "\nEnter your guess: "));
            
            }
            
        } else if (intGuess > intRandom) {
            
            //Decreases the user facing count by one. 
            intTotalRemaining--; 
            
            intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high!" + "\nYou have " + intTotalRemaining + " guesses remaining." + " Enter your guess: "));
            
            //Checks to see if the newly entered number fits within the confines of the range and is a number. If these conditions are not met the player is prompted to re-enter. 
            while  (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) { 
                
                intGuess = parseInt(prompt("Invalid entry. Please make sure that your number is between the range " + intMin + " and " + intMax + "\nEnter your guess: "));
                
             }
        
        }
        
    /* If the player has entered the correct number, the "game" loop is exited and they are congradulated on their correct guess.
       The reason that the alert is not within this loop, is because in the event the player enters the correct number before the counter is up the game will continue entering the winning number
       until the counter reaches 2. */
    } else { 
        
    break;
      
      
    } //Increases the counter by one. Stops the loop when the counter reaches 3.
      intCount++; 
    }
    
//Once the loop is exited, whether by winning or utilizing all turns, this statement checks which final message to display. 
if (intGuess != intRandom) { 
        
        alert ("Better luck next time!");
        
      //If the user guesses the correct number it then checks to see how many guesses that it took and adjusts the message accordingly. 
    } else { 
        
        if (intTotalRemaining === 3) {
            
            alert ("Are you a mind-reading wizard?! Congrats on guessing the correct number of " + intRandom + ". It only took you " + intCount + " guesses!");
            
        } if (intTotalRemaining === 2) {
            
            alert ("You are a master guesser! Congrats on guessing the correct number of " + intRandom + ". It only took you " + intCount + " guesses!");
            
        } else if (intTotalRemaining === 1) {
            
            alert ("You are a slightly above average guesser! Congrats on guessing the correct number of " + intRandom + ". It only took you " + intCount + " guesses!");
            
        }
           
    }
    
 
    
    
    