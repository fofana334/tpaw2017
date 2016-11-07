

window.onload = function(){ 
	document.getElementById(“searchCity”).addEventListener(“submit”, function(​event​){
		​event.preventDefault(); // pour annuler le rechargement de la page
		var city = document.getElementById(“city”).value; 

	}); 
}

function searchCity(_city){
	 console.log(‘searchCity’,‘Hello from ‘+_city); //A compléter dans la suite du TP
}

function searchLatLng(_lat, _ lng){
console.log(searchLatLng,‘Hello from ‘+_lat+’,’+lng);
//A compléter dans la suite du TP

}