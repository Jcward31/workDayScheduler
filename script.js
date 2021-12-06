
var crntDay = document.getElementById("currentDay");
var saveBtn = document.querySelectorAll("saveBtn");



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

}




//linking the api styles


//after save button commits are made to local storage



//load previous saves when paged loads