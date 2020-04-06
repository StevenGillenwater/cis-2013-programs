var intMax, intMin, intRandom, intGuess, intCount, intTotalRemaining; 

/* IntCount keeps count of how many guesses the user has made (limited to three),
   while IntTotalRemaining is used to give the user an countdown of how many guesses that they have left. */


intMin = parseInt(prompt("Please enter the lowest number (no lower than 0) for your guessing range: ")); //prompts the user for the minimum value for their range. Cannot be less than 0 and must be a number.

while (isNaN(intMin) || intMin < 0) { //The while loop validates that the number entered is greater than 0 and a number. If either of these conditions are not met it prompts the user to re-enter. 
    
       intMin = parseInt(prompt("The number that you entered was invalid. \n" + "Please enter the lowest number (no lower than 0) for your guessing range: "));
}


intMax = parseInt(prompt("Please enter the highest number (must be at least two more than your lowest number) for your guessing range: ")); /*Prompts the user for the maximum value for their range.
                                                                                                                                              Must be at least two greater than the minimum number entered and a number. */

while (isNaN(intMax) || intMax < intMin + 2) { //The while loop validates that the number entered is at least two more than the minimum numbered entered and a number. If either of these condtions are not met it prompts the user to re-enter. 
    
    intMax = parseInt(prompt("The number that you entered was invalid. \n" + "Please enter the highest number (must be at least two more than your lowest number) for your guessing range: "));
}


intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin); //Calculates the random computer generated number for the game. 


intTotalRemaining = 3; //Sets the displayed countdown to 3 guesses. Each time a user enters a number that is incorrect the counter will display one less. 
intCount = 1; //Sets the count to begin at 1. This is set to 1 rather than 0 because the user is prompted to enter a guess prior to entering the main game loop. If the user's first guess is wrong, they are prompted to enter a new number and THEN the count is increased by 1. 

intGuess = parseInt(prompt("You have three guesses in total. Enter your guess: ")); //Alerts the user to the number of guesses that they have, and allows the first guess. 

while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) { //While loop that checks to make sure that the guess is a number and within the allowed range. If either of these conditions are not met it prompts the user to re-enter. 
    
    intGuess = parseInt(prompt("Invalid entry. Please make sure that your number is between the range " + intMin + " and " + intMax + "\n Enter your guess: "));
    
}

while (intCount < 3) { //Allows for three guesses in total. If the player has not entered the correct number by the time that the counter is done, the loop is exited and the "Better luck next time" message is sent. 
    
    if (intGuess != intRandom) { //Checks to see whether or not the player has guessed the correct randomly generated number. 
        
        if (intGuess < intRandom) { 
            
            intTotalRemaining--; //Decreases the user facing count by one. 
            
            intGuess = parseInt(prompt("Your guess of " + intGuess + " is too low!" + "\nYou have " + intTotalRemaining + " guesses remaining." + " Enter your guess: "));
        
            while  (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {  //Checks to see if the newly entered number fits within the confines of the range and is a number. If these conditions are not met the player is prompted to re-enter. 
                
                intGuess = parseInt(prompt("Invalid entry. Please make sure that your number is between the range " + intMin + " and " + intMax + "\nEnter your guess: "));
            
            }
            
        } else if (intGuess > intRandom) {
            
            intTotalRemaining--; //Decreases the user facing count by one. 
            
            intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high!" + "\nYou have " + IntTotalRemaining + " guesses remaining." + " Enter your guess: "));
        
            while  (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) { //Checks to see if the newly entered number fits within the confines of the range and is a number. If these conditions are not met the player is prompted to re-enter. 
                
                intGuess = parseInt(prompt("Invalid entry. Please make sure that your number is between the range " + intMin + " and " + intMax + "\nEnter your guess: "));
                
             }
        
        }
        
    } else { /* If the player has entered the correct number, the "game" loop is exited and they are congradulated on their correct guess.
                The reason that the alert is not within this loop, is because in the event the player enters the correct number before the counter is up the game will continue entering the winning number
                until the counter reaches 2. */
        
    break;
            
    }
      intCount++; //Increases the counter by one. Stops the loop when the counter reaches 3. 
    }
    
if (intGuess != intRandom) { //Once the loop is exited, whether by winning or utilizing all turns, this statement checks which final message to display. 
        
        alert ("Better luck next time!");
    
    } else { //If the user guesses the correct number it then checks to see how many guesses that it took and adjusts the message accordingly. 
        
        if (intTotalRemaining === 3) {
            
            alert ("Are you a mind-reading wizard?! Congrats on guessing the correct number of " + intRandom + ". It only took you " + intCount + " guesses!");
            
        } if (intTotalRemaining === 2) {
            
            alert ("You are a master guesser! Congrats on guessing the correct number of " + intRandom + ". It only took you " + intCount + " guesses!");
            
        } else if (intTotalRemaining === 1) {
            
            alert ("You are a slightly above average guesser! Congrats on guessing the correct number of " + intRandom + ". It only took you " + intCount + " guesses!");
            
        }
           
    }
    
 
    
    
    