//Getting API Key//
function getinfo() {
    var weather = new XMLHttpRequest();
    weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9255cdccfab1422f15ed5016615fc92b", false);
    weather.send(null);
    var r = JSON.parse(weather.response);
    var weather = "<br/>" + "Current location: " + r.name + "<br/>";
    var temp = "Temperature:" + r.main.temp + "<br/>";
    var wind = "Wind:" + r.wind.deg + "<br/>";
    var humid = "Humidity:" + r.main.humidity + "<br/>"
    var lat = "Latitude:" + r.coord.lat + "<br/>";
    var log = "Longitude:" + r.coord.lon + "<br/>";

    document.getElementById("weather").innerHTML = weather;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("wind").innerHTML = wind;
    document.getElementById("humid").innerHTML = humid;
    document.getElementById("lat").innerHTML = lat;
    document.getElementById("log").innerHTML = log;
}
//Email and Confirm Email Validation//
function Confirm() {
    var email = document.details.email.value;
    var Confirmemail = document.details.Confirmemail.value;
    if (email != Confirmemail) {
        alert("Email Mismatch");
        document.details.Confirmemail.style.borderColor = "red";
    } else {
        document.details.Confirmemail.style.borderColor = "white";
    }
}
//Form Pop-up//
function formpopup() {
    var a = document.details.name.value;
    var b = document.details.email.value;
    var c = document.details.Confirmemail.value;
    var d = document.details.Phoneno.value;
    if (window.confirm("NAME:" + a + "\n" + "EMAIL ID:" + b + "\n" + "CONFIRM EMAIL:" + c + "\n" + "PHONE NO:" + d))
        document.getElementById("form").reset();
    else
        window.alert("dont reset!")
}