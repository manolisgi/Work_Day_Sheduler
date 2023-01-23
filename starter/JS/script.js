let text09 = document.querySelectorAll("#textarea")[0].value;
let text10 = document.querySelectorAll("#textarea")[1].value;
let text11 = document.querySelectorAll("#textarea")[2].value;
let text12 = document.querySelectorAll("#textarea")[3].value;
let text13 = document.querySelectorAll("#textarea")[4].value;
let text14 = document.querySelectorAll("#textarea")[5].value;
let text15 = document.querySelectorAll("#textarea")[6].value;
let text16 = document.querySelectorAll("#textarea")[7].value;
let text17 = document.querySelectorAll("#textarea")[8].value;

// let note = localStorage.getItem("hourNote");
// let note1 = localStorage.getItem("hourNote1");
// $("textarea").text(note);
// let hourNotes = document.querySelectorAll("#textarea");



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


