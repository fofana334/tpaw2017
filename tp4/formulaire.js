

var x = document.getElementById("gps_run");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
   alert('goooooooo');
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";

}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}



// Methode 1

$(function() {
  var i=0,a=0,b=0, c=0, d=0;
  $("#inputName").keypress(function(){
    $("#nameChar").text(i += 1 ,"car.");
    });
  $("#inputPrenom").keypress(function(){
    $("#prenomChar").text(a += 1 ,"car.");
    });
  $("#inputDate").keypress(function(){
    $("#dateChar").text(b += 1 ,"car.");
    });
  $("#inputAdresse").keypress(function(){
    $("#adresseChar").text(c += 1 ,"car.");
    });
  $("#inputEmail").keypress(function(){
    $("#mailChar").text(d += 1 ,"car.");
    });


});

//Methode 2
//$(document).ready(function(){
  //    $("#inputName").keyup(function(){
   // $("#nameChar").text(().val().length);
    //});
      
    //});

function validate(){
  $("#messageLonging").html("<p> Bravo ! le formulaire est sauvegardé.</p>");
  $("#messageLonging").css("background-color","green");
} 