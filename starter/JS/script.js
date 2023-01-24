let texts = document.querySelectorAll("textarea");
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





// Display the current day at the top of the calender when a user opens the planner
setInterval(
    function () {
        $("#currentDay").text(moment().format("dddd D/MMM/YYYY h:mm:ss "));
    }, 1000);

// var els = document.querySelectorAll('.publish_0');
// for (var i=0; i < els.length; i++) {
//     els[i].setAttribute("class", "publish_1");
// }


// Compare the time in order to paint the textarea

texts[0].setAttribute("data-hour", 09);
texts[1].setAttribute("data-hour", 10);
texts[2].setAttribute("data-hour", 11);
texts[3].setAttribute("data-hour", 12);
texts[4].setAttribute("data-hour", 13);
texts[5].setAttribute("data-hour", 14);
texts[6].setAttribute("data-hour", 15);
texts[7].setAttribute("data-hour", 16);
texts[8].setAttribute("data-hour", 17);

for (let i = 0; i < 9; i++) {
    
    
    if (moment().format("hh") === document.querySelectorAll("#textarea")[i].getAttribute("data-hour")) {
        document.querySelectorAll("#textarea")[i].classList.add("present")
    }
    else if (moment().format("hh") > document.querySelectorAll("#textarea")[i].getAttribute("data-hour")) {
        document.querySelectorAll("#textarea")[i].classList.add("past")
    }
    else {
        document.querySelectorAll("#textarea")[i].classList.add("future")
    
    }
        
}







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



