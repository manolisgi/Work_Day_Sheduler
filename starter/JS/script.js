let text09 = localStorage.getItem("hourNote0");
document.querySelectorAll("#textarea")[0].value = text09;
let text10 = localStorage.getItem("hourNote1");
document.querySelectorAll("#textarea")[1].value = text10;
let text11 = localStorage.getItem("hourNote2");
document.querySelectorAll("#textarea")[2].value = text11;
let text12 = localStorage.getItem("hourNote3");
document.querySelectorAll("#textarea")[3].value = text12;
let text13 = localStorage.getItem("hourNote4");
document.querySelectorAll("#textarea")[4].value = text13;
let text14 = localStorage.getItem("hourNote5");
document.querySelectorAll("#textarea")[5].value = text14;
let text15 = localStorage.getItem("hourNote6");
document.querySelectorAll("#textarea")[6].value = text15;
let text16 = localStorage.getItem("hourNote7");
document.querySelectorAll("#textarea")[7].value = text16;
let text17 = localStorage.getItem("hourNote8");
document.querySelectorAll("#textarea")[8].value = text17;

// var count = localStorage.getItem("count");

// textarea.textContent = count;


// Display the current day at the top of the calender when a user opens the planner
setInterval(
    function(){
$("#currentDay").text(moment().format("dddd D/MMM/YYYY h:mm:ss "));
}, 1000);


// Create an "on-click" event attached to the "timeButton" id





$(".btn0").on("click", function (event) {
    event.preventDefault();
    let note0 = document.querySelectorAll("#textarea")[0].value;
    localStorage.setItem("hourNote0", note0);
})
$(".btn1").on("click", function (event) {
    event.preventDefault();
    let note1 = document.querySelectorAll("#textarea")[1].value;
    localStorage.setItem("hourNote1", note1);
})
$(".btn2").on("click", function (event) {
    event.preventDefault();
    let note2 = document.querySelectorAll("#textarea")[2].value;
    localStorage.setItem("hourNote2", note2);
})
$(".btn3").on("click", function (event) {
    event.preventDefault();
    let note3 = document.querySelectorAll("#textarea")[3].value;
    localStorage.setItem("hourNote3", note3);
})
$(".btn4").on("click", function (event) {
    event.preventDefault();
    let note4 = document.querySelectorAll("#textarea")[4].value;
    localStorage.setItem("hourNote4", note4);
})
$(".btn5").on("click", function (event) {
    event.preventDefault();
    let note5 = document.querySelectorAll("#textarea")[5].value;
    localStorage.setItem("hourNote5", note5);
})
$(".btn6").on("click", function (event) {
    event.preventDefault();
    let note6 = document.querySelectorAll("#textarea")[6].value;
    localStorage.setItem("hourNote6", note6);
})
$(".btn7").on("click", function (event) {
    event.preventDefault();
    let note7 = document.querySelectorAll("#textarea")[7].value;
    localStorage.setItem("hourNote7", note7);
})
$(".btn8").on("click", function (event) {
    event.preventDefault();
    let note8 = document.querySelectorAll("#textarea")[8].value;
    localStorage.setItem("hourNote8", note8);
})



