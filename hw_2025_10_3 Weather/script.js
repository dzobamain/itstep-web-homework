// You can freely use this key for your own purposes.
const apiKey = "57a48ed0d9934f88e209c10a6f17c300";

$(document).ready(function () 
{
    $("#getWeather").click(getWeather);
    $("#city").on("keypress", function (e) {
        if (e.which === 13) getWeather();
    });
});

function getWeather() 
{
    const city = $("#city").val().trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    $.ajax({
        url: `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`,
        method: "GET",
        success: function (data) {
            if (data.success === false) {
                alert("Error: " + data.error.info);
                return;
            }
            displayWeather(data);
        },
        error: function () {
            alert("Unable to get weather data. Check your API key or city name.");
        },
    });
}

function displayWeather(data) 
{
    $("#weather").html(`
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p><strong>Updated:</strong> ${data.current.observation_time}</p>
    <img src="${data.current.weather_icons[0]}" alt="${data.current.weather_descriptions[0]}">
    <p>${data.current.weather_descriptions[0]}</p>
    <p><strong>Temperature:</strong> ${data.current.temperature} °C</p>
    <p><strong>Wind:</strong> ${data.current.wind_speed} km/h</p>
    <p><strong>Pressure:</strong> ${data.current.pressure} mbar</p>
    <p><strong>Precipitation:</strong> ${data.current.precip} mm</p>
  `);
}
