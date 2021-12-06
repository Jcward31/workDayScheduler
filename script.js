
var crntDay = document.getElementById("currentDay");



var Time9 = document.getElementById("9");
var Time10 = document.getElementById("10");
var Time11 = document.getElementById("11");
var Time12 = document.getElementById("12");
var Time1 = document.getElementById("1");
var Time2 = document.getElementById("2");
var Time3 = document.getElementById("3");
var Time4 = document.getElementById("4");
var Time5 = document.getElementById("5");


var amPm = [Time9,Time10,Time11,Time12,Time1,Time2,Time3,Time4,Time5];



//adding in date and time + linking color (event) to textarea
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
crntDay.innerHTML=date;


//setting up color change based on time
var hour = moment().format('H');

for (i = 0; i<9; i++) {

var time = i + 9;
var currentDay =amPm[i];

if (time < hour) {
    currentDay.classList.add("past");
}

if (time == hour) {
    currentDay.classList.add("present");
}

if (time > hour) {
    currentDay.classList.add("future");
}

}; 



//after save button commits are made to local storage

var saveBtn9 = document.getElementById("saveBtn9");
var saveBtn10 = document.getElementById("saveBtn10");
var saveBtn11 = document.getElementById("saveBtn11");
var saveBtn12 = document.getElementById("saveBtn12");
var saveBtn1 = document.getElementById("saveBtn1");
var saveBtn2 = document.getElementById("saveBtn2");
var saveBtn3 = document.getElementById("saveBtn3");
var saveBtn4 = document.getElementById("saveBtn4");
var saveBtn5 = document.getElementById("saveBtn5");


//var plan =localStorage.getitem ("dlyplan");

//var dlyplan = JSON.parse(plan);



saveBtn9.addEventListener("click",function() {
var ninetext =document.getElementById("9").value;


localStorage.setItem("plan9", ninetext);

});

saveBtn10.addEventListener("click",function() {
    var saveBtn10 =document.getElementById("saveBtn9").value;
    var tentext =document.getElementById("10").value;


    localStorage.setItem("plan10", tentext);

    });

    saveBtn11.addEventListener("click",function() {
        var saveBtn11 =document.getElementById("saveBtn9").value;
        var eleventext =document.getElementById("11").value;


        localStorage.setItem("plan11", eleventext);

        });

        
        saveBtn12.addEventListener("click",function() {
            var saveBtn12 =document.getElementById("saveBtn9").value;
            var twelvetext =document.getElementById("12").value;


            localStorage.setItem("plan12", twelvetext);

            });

            
            saveBtn1.addEventListener("click",function() {
                var saveBtn1 =document.getElementById("saveBtn9").value;
                var onetext =document.getElementById("1").value;


                localStorage.setItem("plan1", onetext);

                });

                saveBtn2.addEventListener("click",function() {
                    var saveBtn2 =document.getElementById("saveBtn9").value;
                    var twotext =document.getElementById("2").value;


                    localStorage.setItem("plan2", twotext);

                    });
                        
                
                saveBtn3.addEventListener("click",function() {
                    var saveBtn3 =document.getElementById("saveBtn9").value;
                    var threetext =document.getElementById("3").value;


                    localStorage.setItem("plan3", threetext);

                    });
                            
                    saveBtn9.addEventListener("click",function() {
                        var saveBtn4 =document.getElementById("saveBtn9").value;
                        var fourtext =document.getElementById("4").value;


                        localStorage.setItem("plan4", fourtext);

                        });

                        saveBtn5.addEventListener("click",function() {
                            var saveBtn5 =document.getElementById("saveBtn9").value;
                            var fivetext =document.getElementById("5").value;


                            localStorage.setItem("plan5", fivetext);

                            });

                            



//load previous saves when paged loads
 
var nineplan = localStorage.getItem("plan9");
document.getElementById("9").value=(nineplan);

var tenplan = localStorage.getItem("plan10");
document.getElementById("10").value=(tenplan);

var elevenplan = localStorage.getItem("plan11");
document.getElementById("11").value=(elevenplan);

var twelveplan = localStorage.getItem("plan12");
document.getElementById("12").value=(twelveplan);

var oneplan = localStorage.getItem("plan1");
document.getElementById("1").value=(oneplan);

var twoplan = localStorage.getItem("plan2");
document.getElementById("2").value=(twoplan);

var threeplan = localStorage.getItem("plan3");
document.getElementById("3").value=(threeplan);

var fourplan = localStorage.getItem("plan4");
document.getElementById("4").value=(fourplan);

var fiveplan = localStorage.getItem("plan5");
document.getElementById("5").value=(fiveplan);
