var meteoControllers = angular.module('meteoControllers', []);

meteoControllers.controller('MainController',['$scope','$http',
	function($scope, $http){

		$scope.recherche = function(){
			/*appel AJAX à l'API openweathermap */

			$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid=b9cb9ca0d7d6d13d047ec6b795d6fc31')
								.success(function(data){
									/*on met dans l'objet meteo les données rétournées par openweathermap*/
									$scope.meteo=data ;
								}).error(function(data){
									/*en cas d'erreur */
									$scope.errorMsg = "Hello !! Humm Error .. Please retry"
								});
		}


		// mise en place de gps
		$scope.gps = function(){
			/*appel AJAX à l'API openweathermap */

			$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid=b9cb9ca0d7d6d13d047ec6b795d6fc31')
								.success(function(data){
									/*on met dans l'objet meteo les données rétournées par openweathermap*/
									$scope.meteo=data ;
								}).error(function(data){
									/*en cas d'erreur */
									$scope.errorMsg = "Hello !! Humm Error .. Please retry"
								});
		}



	}]);