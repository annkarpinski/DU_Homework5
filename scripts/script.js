//Code for Workday Scheduler
$(document).ready(function () {
  //Display current date
  var today = moment().format("dddd, MMMM Do");
  $("#currentDay").text(today);

  //create array of hours
  var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

  for (var i = 0; i < hour.length; i++) {
    //Create new html elements
    var newDiv = $("<div>");
    var newP = $("<p>");
    var newInput = $("<input>");
    var newBtn = $("<button>");

    //Add class styles to new html elements
    newDiv.addClass("row");
    newP.addClass("col-sm-1 time-block hour");
    newP.text(hour[i]);
    newInput.addClass("col-sm-10 description");
    newBtn.addClass("col-sm-1 saveBtn");

    //Appending new elements to the DOM
    newDiv.append(newP, newInput, newBtn);
    $(".container").append(newDiv);
  }
});
