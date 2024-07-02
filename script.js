let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("calculatebtn").addEventListener("click" , ()=> {

    if(dob.value == "" || currentDate.value == "")
        {
            output.innerHTML = "Please Select Date";
        }
        else{
            calculateAgeDiff(dob.value , currentDate.value);
        }


})

function calculateAgeDiff (start ,end){
    let dobyear = parseInt(start.substring(0,4),10);
    let dobmonth = parseInt(start.substring(5,7),10);
    let dobdate = parseInt(start.substring(8,10),10);
    let currentyear = parseInt(start.substring(0,4),10);
    let currentmonth = parseInt(start.substring(5,7),10);
    let currentdate = parseInt(start.substring(8,10),10);

    //year Diff

    let yearAgeDiff = currentyear - dobyear ;

    //month Diff

    let monthAgeDiff;

    if(currentmonth >= dobmonth){
        monthAgeDiff = currentmonth - dobmonth ;
    }
    else{
        yearAgeDiff--;
        monthAgeDiff = 12 + currentmonth - dobmonth ;
    }

    //date diff

    let dateAgeDiff;
    if(currentDate >= dobdate)
        {
            dateAgeDiff = currentDate - dobdate;

        }
        else{
            monthAgeDiff--;
            noOFDaysDob = daysInMonth(dobmonth,dobyear);
            dateAgeDiff = noOFDaysDob + currentDate - dobdate ;

            if(monthAgeDiff<0)
                {
                    monthAgeDiff=11;
                    yearAgeDiff--;
                }

        }

        output.innerHTML = yearAgeDiff + "Year" +  monthAgeDiff + " Month" + dateAgeDiff + "Date" ;
 }

 function daysInMonth(month , year)
 {
    return new Date(year,month,0).getDate();
 }