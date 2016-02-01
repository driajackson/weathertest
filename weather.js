$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h1>Current Weather:</h1>"
     + "<h1>" + data.currently.summary + ", the temperature is " + data.currently.temperature + " degrees, and " + data.currently.icon + " outside.</h1>"
        + "<h2>The 3 day forecast is:</h2>"
        + "<h3>Monday:</h3>"
        + "<li> " + data.daily.data[0].icon + " and a high temperature of " + data.daily.data[0].temperatureMax + ".</li>"
+ "<h3>Tuesday:</h3>"

      + "<li> " + data.daily.data[1].icon + " and a high temperature of " + data.daily.data[1].temperatureMax + ".</li>"
+ "<h3>Wednesday:</h3>"
        + "<li> " + data.daily.data[2].icon + " and a high temperature of " + data.daily.data[2].temperatureMax + ".</li>"

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
