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
function confirmmail(Confirm) {
    var email = document.details.email.value;
    var Confirmemail = document.details.Confirmemail.value;
    if (Confirmemail == "") {
        document.getElementById('con').innerHTML = "";
        return false;
    }
    if (email != Confirmemail) {
        document.getElementById("con").innerHTML = "Email Mismatch";
        document.details.Confirmemail.style.borderColor = "red";
    } else {
        document.details.Confirmemail.style.borderColor = "white";
        document.getElementById("con").innerHTML = "Success";
    }
    return false;
}
//Phone number Validation//
function phonenumber() {
    var a = document.details.Phoneno.value;
    if (a == "") {
        document.getElementById('phones').innerHTML = "";
        return false;
    } else if (a.length != 10) {
        document.getElementById('phones').innerHTML = "Enter  10 Digits";
        return false;
    } else if ((a.charAt(0) != 9) && (a.charAt(0) != 8) && (a.charAt(0) != 7)) {
        document.getElementById('phones').innerHTML = "Input digits starting from 7,8 or 9";
        return false;
    } else {
        document.getElementById('phones').innerHTML = "Success";
        return false;
    }
}
//Form Pop-up with given fields//
function formpopup() {
    var a = document.details.name.value;
    var b = document.details.email.value;
    var c = document.details.Confirmemail.value;
    var d = document.details.Phoneno.value;
    if (confirm("NAME:" + a + "\n" + "EMAIL ID:" + b + "\n" + "CONFIRM EMAIL:" + c + "\n" + "PHONE NO:" + d))
        location.reload();


}
//Email Validation//
function validateemail() {
    var a = document.details.email.value;
    if (a == "") {
        document.getElementById('mails').innerHTML = "";
        return false;
    }
    if (a.indexOf('@') <= 0) {
        document.getElementById('mails').innerHTML = "Invalid email id";
        return false;
    } else if ((a.charAt(a.length - 4) != '.') && (a.charAt(a.length - 3) != '.')) {
        document.getElementById('mails').innerHTML = "Give Proper Format";
        return false;
    } else {
        document.getElementById('mails').innerHTML = "Success";
    }
}

//Name Validation//
function checkforblank() {
    if (document.details.name.value == "") {
        document.getElementById('username').innerHTML = "Field is empty";
        return false;
    } else if ((document.details.name.value.length < 8) || (document.details.name.value.length > 26)) {
        document.getElementById('username').innerHTML = " Name should have min 8 and max 26 charachers";
        return false;
    } else if (!isNaN(document.details.name.value)) {
        document.getElementById('username').innerHTML = "Only characters are allowed";
    } else {
        document.getElementById('username').innerHTML = "Success";
    }
}