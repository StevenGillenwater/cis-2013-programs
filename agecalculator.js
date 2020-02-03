var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parsefloat(prompt("Enter your age"));
    floatDays = parsefloat().toFixed(2)(floatAge*365.25);
    //This calculates age in days (and accounts for leap years).
    floatMonths = parsefloat().toFixed(2)(floatAge*12);
    //This calculates age in months.
    intWeeks = parseInt(floatDays/7);
    //This calculates age in weeks.
    intFortnights = parseInt(floatDays/14);
    //This calculates age in fortnights
    alert("Your age is= "+floatAge);
    alert("Age in days= "+floatDays);
    alert("Age in months= "+floatMonths);
    alert("Age in weeks= "+intWeeks);
    alert("Age in fortnights= "+intFortnights);

