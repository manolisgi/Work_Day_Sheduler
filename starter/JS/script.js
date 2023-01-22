let note = localStorage.getItem("note");





// Display the current day at the top of the calender when a user opens the planner
setInterval(
    function(){
$("#currentDay").text(moment().format("dddd D/MMM/YYYY h:mm:ss "));
}, 1000);


// Create an "on-click" event attached to the "timeButton" id





$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let note = $("#textarea").value;
    localStorage.setItem("textarea", note);
    console.log(note)
})