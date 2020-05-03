$(document).ready(function () {
  //Display current date
  var today = moment().format("dddd, MMMM Do");
  $("#currentDay").text(today);
  var currentHour = parseInt(moment().format("H"));

  //create array of hours
  var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  var militaryTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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
    newInput.attr("id", hour[i]);
    newBtn.addClass("col-sm-1 saveBtn fa fa-save");
    // Make past gray, make present red, and make future green
    // If hour is less than present, apply the "past" class
    // If hour is present, apply the "present" class
    // If hour is greater than present, apply the "future" class
    if (militaryTimes[i] < currentHour) {
      newInput.addClass("past");
    } else if (militaryTimes[i] === currentHour) {
      newInput.addClass("present");
    } else newInput.addClass("future");

    //Appending new elements to the DOM
    newDiv.append(newP, newInput, newBtn);
    $(".container").append(newDiv);
  }
  // Store the inputs in local storage when the save button is clicked
  $(".saveBtn").on("click", function () {
    var masterInputs = [];
    for (var i = 9; i < 12; i++) {
      var userInputAM = $("#" + i + "AM").val();
      masterInputs.push(userInputAM);
    }
    for (var i = 12; i < 18; i++) {
      var userInputPM = $("#" + i + "PM").val();
      masterInputs.push(userInputPM);
    }
    localStorage.setItem("savedTasks", masterInputs);
  });
});
