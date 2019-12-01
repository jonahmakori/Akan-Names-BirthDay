
var submission= function() {

    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var male = document.getElementsByName("gender");
    var female = document.getElementsByName("gender");
    var done = document.getElementById("done");
    var dateOfTheWeek = new Date (year + "/" + month + "/" + day);
    var result = dateOfTheWeek.getDay();


    var day =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    var male =["Kwasi","Kwadwo","Kwabena","KwakuYaw", "Yaw","Kofi","Kwame",];
    var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    if (month < 1 || month > 12 && "/"  ) {
        done.innerHTML = "Invalid month please try again";
      }
    
      else if (day < 1 || day > 31 && "/"  ) {
        done.innerHTML ="Invalid date please try again";
      }
    
     else if (year < 1900  && "/") {
      done.innerHTML = "Invalid year please try again";
     }
  
    else if (gender[0].checked==true){
         done.innerHTML="Hey <b>Boy-Child</b> You were born on  a  " + day[result] + "  and your Akan name Happens to be  " + male[result]
     }
    else if (gender[1].checked==true){
        done.innerHTML= "Hey <b>Girl-Child</b> you were born on a  " + day[result] + " and your Akan name Happens to be "+ female[result]
    }
    else{
      console.log("success");
    }

}