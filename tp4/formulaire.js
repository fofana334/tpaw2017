$(function() {

  //La fonction s'active sur l'évènement keydown dans la zone de texte
    $("#zone").keydown(function(limit) {

      //Définir la limite à atteindre
      var limit = "10";

      //Récupérer le nombre de caractères dans la zone de texte
      var currlength = $(this).val().length;

      //Afficher un texte de légende en fonction du nombre de caractères
      if(currlength >= limit){
        $("#legende").removeClass("insuffisant").addClass("suffisant").html("Vous avez saisi " + currlength + " caractères sur " + limit + ", c'est suffisant, mais si vous êtes inspiré, vous pouvez continuer.");
      }
      else{
        $("#legende").removeClass("suffisant").addClass("insuffisant").html("Vous avez saisi " + currlength + " caractères sur " + limit + ", c'est encore trop peu.");
      }

    });

  var valid,name,prenom,date,adresse,mail;
  valid = true;
  $("#gps_run").click(function(){

    });
});

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