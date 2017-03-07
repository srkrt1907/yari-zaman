angular.module('myApp').controller('ilanController',

		function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {		
		var self = this;
	
		 (function initController() {
			 	$rootScope.currentUser=  $sessionStorage.currentUser
				$rootScope.ilan= $sessionStorage.ilan
				$rootScope.autanticatet=  $sessionStorage.autanticatet
				$rootScope.currentUsername= $sessionStorage.currentUsername
		    })();
	
		
		
		
		self.originalData = {};
		self.orginalData = {};
		mainServices.getilan().then(function(dataResponse) {
		self.originalData = angular.copy(dataResponse.data);
		self.tableParams = new NgTableParams({}, { dataset: self.originalData});
			
			
	    });
		self.getilceler = function getilceler(id){
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
		
		self.getauthenticatUser= function getauthenticatUser() {
	        // $http() returns a $promise that we can add handlers with .then()
			return $http({
				url:'authenticatUser',
				method: 'GET'   
			}).then(function(response) {
	        	
       		 $rootScope.authenticatUser=response.data;
       		 $rootScope.autanticatet=true;
			 $rootScope.currentUsername=$authenticatUser.email;
   			
   		});
	     }
		
		self.del = function del(ilan) {
	    	
	    	$http({
	    		url:'/ilanSil',
	    		method: 'POST', 
	    		data: ilan
	    	}).then(function(response) {
	        	if(response.data.success)
	    		{
	        		var index = self.originalData.indexOf(ilan);
	      		  	if(index>=0)
	      			  self.originalData.splice(index, 1);
	      		  	
	        	      self.tableParams.reload().then(function(data) {
	        	        if (data.length === 0 && self.tableParams.total() > 0) {
	        	          self.tableParams.page(self.tableParams.page() - 1);
	        	          self.tableParams.reload();
	        	        }
	        	      });
	    		}
	        	else
	        		alert("hata");
	    	});

	    }
		
		
		
		
		});