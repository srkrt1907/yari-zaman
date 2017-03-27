var app = angular.module('myApp', [ 'ngRoute' ,'ngStorage' ,"ngTable"  ]).config(function($routeProvider, $httpProvider) {

	
	
	$routeProvider.when('/', {
		templateUrl : 'ilan.html',
		controller : 'ilanController',
		controllerAs : 'demo'
	}).when('/login', {
		templateUrl : 'login.html',
		controller : 'loginController',
		controllerAs : 'demo'
	}).when('/ilandetay', {
		templateUrl : 'ilanDetay.html',
		controller : 'ilanController',
		controllerAs : 'demo'
	}).when('/profil/ilanDuzenleDatay', {
		templateUrl : 'ilanDuzenle.html',
		controller : 'profilController',
		controllerAs : 'demo'
	}).when('/kayit', {
		templateUrl : 'kayit.html',
		controller : 'registerController',
		controllerAs : 'demo'
	}).when('/profil', {
		templateUrl : 'profil.html',
		controller : 'profilController',
		controllerAs : 'demo'
	}).when('/profil/duzenle', {
		templateUrl : 'profilDuzenle2.html',
		controller : 'profilController',
		controllerAs : 'demo'
	}).when('/profil/ilanekle', {
		templateUrl : 'yeniilan.html',
		controller : 'profilController',
		controllerAs : 'demo'
	}).when('/contactus', {
		templateUrl : 'contactus.html',
		controller : 'outGeneralController',
		controllerAs : 'demo'
	}).when('/forgotpwd', {
		templateUrl : 'forgotpwd.html',
		controller : 'outGeneralController',
		controllerAs : 'demo'
	}).when('/changePassword', {
		templateUrl : 'changePassword.html',
		controller : 'outGeneralController',
		controllerAs : 'demo'
	}).otherwise('/');

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

}).controller('controller',
		function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,$localStorage) {
	
	$rootScope.currentUser=  $sessionStorage.currentUser
	$rootScope.ilan= $sessionStorage.ilan
	$rootScope.autanticatet=  $sessionStorage.autanticatet
	$rootScope.currentUsername= $sessionStorage.currentUsername
	// keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
    	
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

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
