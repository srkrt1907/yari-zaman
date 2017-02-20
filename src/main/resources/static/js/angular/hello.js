var app = angular.module('myApp', [ 'ngRoute' ,'ngStorage' ,"ngTable"  ]).config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl : 'ilan.html',
		controller : 'ilanController',
		controllerAs : 'demo'
	}).otherwise('/');

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

}).controller('controller',
		function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams) {
		console.log("basladık");
}).service('mainServices', function ($http) 
		{
		var self = this;	

		
		self.getilan= function() {
	        // $http() returns a $promise that we can add handlers with .then()
			return $http({
				url:'ilanListele',
				method: 'GET'   
			});
	     }
		
		
		
		
	
		});
