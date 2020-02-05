var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parseFloat(prompt("What is your age?"));
    floatDays = parseFloat(floatAge*365.25).toFixed(2);
    //Calculates your age in days (accounts for leap years)
    floatMonths = parseFloat(floatAge*12).toFixed(2);
    //Calculates your age in months
    intWeeks = parseInt(floatDays/7);
    //Calculates your age in Weeks
    intFortnights = parseInt(floatDays/14);
    //Calculates your age in fortnights
    alert("Your age = " + floatAge);
    alert("Your age in days = " + floatDays);
    alert("Your age in months = " + floatMonths);
    alert("Your age in weeks = " + intWeeks);
    alert("Your age in fortnights = " + intFortnights);
