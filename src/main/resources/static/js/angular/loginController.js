	angular.module('myApp').controller('loginController',
	function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {
	
	var self = this;

    (function initController() {
   	 	
		delete $sessionStorage.ilan;
		delete $sessionStorage.autanticatet;
		delete $sessionStorage.currentUsername;
		delete $sessionStorage.currentUser;
	   
    	logout()
    })();
	
	self.login = function(form){
		self.loading = true;
    	var data ={  			
    			email : self.email,
    			password : self.password
    	};
		$http({
    		url:'/giris',
    		method: 'POST', 
    		data: data   
		}).then(function(response) {
	    	if(response.data.success){
	    			getAuthentication()
	    			getmyilan()
//                    // store username and token in local storage to keep user logged in between page refreshes
//                    $localStorage.currentUser = { username: self.email, token: response.token };

                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
                    $sessionStorage.autanticatet=true;
                    $sessionStorage.currentUsername=self.email;
                    $sessionStorage.currentUser= getAuthentication()
                    $rootScope.currentUser=  $sessionStorage.currentUser
                    $sessionStorage.refresh=true
                    $location.path('/');
                } else {
                	$rootScope.errorpopup=true;
                }
      
        });
    
    	

    };

     function logout()  {

		self.loading = true;
    	var data ={ 
    			
    			email : $rootScope.currentUsername
    	};
		$http({
    		url:'/cikis',
    		method: 'POST', 
    		data: data   
		}).then(function(response) {
	    	if(response.data.success){
	    		delete $localStorage.currentUser;
	            delete  $rootScope.autanticatet;
	            delete $rootScope.currentUsername;
	            delete $rootScope.forgotUserEmail;
	            delete $rootScope.forgotpasswordconfirm;
	            delete $sessionStorage.forgotpasswordconfirm;
	            delete $sessionStorage.forgotUserEmail;
	            $http.defaults.headers.common.Authorization = '';
               
            } else {
                self.error = 'error for log out';
                self.loading = false;
            }
        });
    }

      function getAuthentication()  {
			$http({
				url:'/authenticatUser',
				method: 'POST'   
			}).then(function(response) {
	        	
	        		$sessionStorage.currentUser=response.data;
	        		return response.data;
	    	});
	     }
      function getmyilan()  {
			$http({
				url:'/getmyilan',
				method: 'POST'   
			}).then(function(response) {
	        	
	        		$sessionStorage.myilans=response.data;
	    		
	    	});
	     }


  });
