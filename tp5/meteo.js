

alert("hello");



window.onload = function(){
 document.getElementById("searchCity").addEventListener("submit", function(event){
 		event.preventDefault(); // pour annuler le rechargement de la page
		var city = document.getElementById("city").value;
		searchCity(city);
	});
}

function searchCity(_city){
		var request = new XMLHttpRequest();
		var url     = 'http://api.openweathermap.org/data/2.5/weather?q='+_city+'&appid=b9cb9ca0d7d6d13d047ec6b795d6fc31';
		request.open('GET',url,true);
		request.onload =function(){
			 if(request.status >= 200&& request.status<400){
			 // Success!
			 var resp       = JSON.parse(request.responseText);
			 var img_url    = "http://openweathermap.org/img/w/02d.png";
			 var imgGPS_url = "http://maps.googleapis.com/maps/api/staticmap?markers="+resp.coord.lat+","+resp.coord.lon+"&size=640x400&zoom=5";
			 //VOTRE CODE JS pour afficher les données météo sur votre page
			 // en mettant à jour la DIV “result
			 document.getElementById("nameCity").innerHTML       = resp.name;
			 document.getElementById("Humidity_value").innerHTML = resp.main.humidity;
			 document.getElementById("Nuage_value").innerHTML    = resp.clouds.all;
			 document.getElementById("Vent_value").innerHTML     = resp.wind.speed;
			 document.getElementById("image_meteo").innerHTML    = "<img src='"+img_url+"'>";
			 document.getElementById("map").innerHTML      = "<img src='"+imgGPS_url+"'>";

			 document.getElementById("result").removeAttribute("hidden");
			 //document.getElementById("image_gps");

			 //document.getElementById("result").innerHTML= "<p> humidityValue ="resp.main.temp; //"<img src='"+img_url+"'><br> <p> "+resp+"</p>";
			}else{
			//We reached our target server, but it returned an error ==> async =false
		
			   document.getElementById("result").innerHTML = "error";
			}
		};
		request.onerror=function(){
		
			   document.getElementById("result").innerHTML = "error";
			}
		request.send();
}

 
function searchLatLng(_lat, _lng){
console.log(searchLatLng,'Hello from '+_lat+','+_lng);

		var request = new XMLHttpRequest();
		var url ="https://demo.bilelz.fr/owmap/?lat=42&lon=2&appid=b9cb9ca0d7d6d13d047ec6b795d6fc31"
		//var url     = "http://api.openweathermap.org/data/2.5/find?"+_lat+"&"+_lng+"&cnt=10 ";//"http://openweathermap.org/current#geo ";
		request.open('GET',url,true);
		request.onload = function(){
			if (request.status >= 66  && request.status < 666) {
				var resp    = JSON.parse(request.responseText);
				document.getElementById("long").innerHTML  = resp.coord.lon;
				document.getElementById("lat").innerHTML  = resp.coord.lat;

			}else{
				document.getElementById("result").innerHTML = "error fuction searchLatLng";
			}
		}
		request.onerror=function(){
			   document.getElementById("result").innerHTML = "error fuction searchLatLng";
			}

		request.send();
//A compléter dans la suite du TP
 }


var geo = document.getElementById("gps");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        geo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
   alert('goooooooo');
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            geo.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            geo.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            geo.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            geo.innerHTML = "An unknown error occurred."
            break;
    }
}

/*function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        //document.getElementById('bouton_'+id).innerHTML='Cacher le texte';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        //document.getElementById('bouton_'+id).innerHTML='Afficher le texte';
    }
    return true;
}
*/

/*window.onload = function(){
 	document.getElementById("gps").addEventListener(click ,function(){
 		getLocation();
 		//searchLatLng(_lat,_lng);
 	});
 }*/
/*window.onload = function(){ //[... Code JS précédent ...]
document.getElementById(“gps”).addEventListener(“click”, function(){
// ici votre code pour demander la géolocalisation à l’utilisateur
// et qui appelera la fonction ​searchLatLng(_lat, _ lng) });
}*/
