	angular.module('myApp').controller('registerController',
	function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {
	
		var vm = this;
		
 
        vm.register = function(form){
        	vm.loading = true;
    		
    		 var data ={ 
    			name: vm.name,
    	    	surname: vm.surname,
    	    	telefon: vm.telefon,
    	    	passwordConfirm: vm.passwordConfirm,
    		 	email : vm.email,
    	    	password : vm.password
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
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
  
    

  });
