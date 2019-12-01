
var submission= function() {

    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var done = document.getElementById("done");
    var dateOfTheWeek = new Date (year + "/" + month + "/" + day);
    var result = dateOfTheWeek.getDay();


    var day =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    var male =["Kwasi","Kwadwo","Kwabena","KwakuYaw","Kofi","Kwame"];
    var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    if (month < 1 || month > 12) {
        done.innerHTML = "Invalid month please try again";
      }
    
      else if (day < 1 || day > 31) {
        done.innerHTML ="Invalid date please try again";
      }
    
     else if (year < 1900) {
      done.innerHTML = "Invalid year please try again";
     }
     else if (male.checked){
         done.innerHTML="You were born on" + day[result] + "and your akan name is " + male[result]
     }
    else {
        done.innerHTML= "You were born on " + day[result] + "and your akan name is"+ female[result]
    }

};