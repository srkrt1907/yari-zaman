angular.module('myApp').controller('ilanController',

		function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {		
		var self = this;
	
		 (function initController() {
			 	
			 	delete $rootScope.forgotUserEmail;
	            delete $rootScope.forgotpasswordconfirm;
	            delete $sessionStorage.forgotpasswordconfirm;
	            delete $sessionStorage.forgotUserEmail;
			 	$rootScope.currentUser=  $sessionStorage.currentUser
				$rootScope.ilan= $sessionStorage.ilan
				$rootScope.autanticatet=  $sessionStorage.autanticatet
				$rootScope.currentUsername= $sessionStorage.currentUsername
				$rootScope.refresh=$sessionStorage.refresh
				if($rootScope.refresh==true){
					$sessionStorage.refresh=false
					$route.reload();
				}
			    getiller();
		    })();
	
		 function getiller(){
				return $http({
					url:'ilListele',
					method: 'GET' 
				}).then(function(response) {
		        	
					self.iller = response.data;
		        		
		    			
		    		});
		  }
		
		
		
		self.originalData = {};
		self.orginalData = {};
		mainServices.getilan().then(function(dataResponse) {
		self.originalData = angular.copy(dataResponse.data);
		self.tableParams = new NgTableParams({}, { dataset: self.originalData});
			
			
	    });
		self.getilceler = function getilceler(il){
			
			 var id=JSON.parse(self.il).il_id;
			 $rootScope.selectedil=id;
			return $http({
				url:'ilceGetir?id='+id,
				method: 'GET' 
			}).then(function(response) {
	        	
	        		 $rootScope.ilceler=response.data;
	        		
	    			
	    		});
	  }
	
		self.getIls = function getIls(){
			return $http({
				url:'ilListele',
				method: 'GET'   
			});
		  }
		
		self.detayGit = function detayGit(ilan) {
	    	
			$sessionStorage.ilan=ilan;
			$location.path('/ilandetay');

	    }
		
		self.clearFilter = function clearFilter() {
			 $rootScope.selectedil=null;
			$route.reload();

	    }
		
		function getauthenticatUser() {
			
			$http({
			url:'/authenticatUser',
			method: 'POST'   
		}).then(function(response) {
        	
        		$sessionStorage.currentUser=response.data;
        		return response.data;
    	});
     }
	
		
		});