	angular.module('myApp').controller('registerController',
	function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {
	
		var self = this;
		
 
        self.register = function(form){
        	self.loading = true;
    		
    		 var data ={ 
    			name: self.name,
    	    	surname: self.surname,
    	    	telefon: self.telefon,
    	    	passwordConfirm: self.passwordConfirm,
    		 	email : self.email,
    	    	password : self.password
    	    	};
    		$http({
        		url:'/register',
        		method: 'POST', 
        		data: data   
    		}).then(function(response) {
    	    	if(response.data.success){
                        $location.path('/login');
                    } else {
                    	$rootScope.errorpopup=true;
                        self.dataLoading = false;
                    }
                });
        }
  
    

  });
