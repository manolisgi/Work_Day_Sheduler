let note = localStorage.getItem("hourNote");
$("textarea").text(note);
let hourNotes = document.querySelectorAll("#textarea");



// Display the current day at the top of the calender when a user opens the planner
setInterval(
    function(){
$("#currentDay").text(moment().format("dddd D/MMM/YYYY h:mm:ss "));
}, 1000);


// Create an "on-click" event attached to the "timeButton" id

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let note = $("#textarea")[0].value;
    localStorage.setItem("hourNote", note);
})

// for (let i = 0; i < array.length; index++) {
//     const element = array[index];
    
// }