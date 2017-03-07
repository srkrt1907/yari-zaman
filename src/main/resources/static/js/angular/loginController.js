	angular.module('myApp').controller('loginController',
	function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {
	
	var self = this;

    (function initController() {
   	 
		delete $sessionStorage.ilan;
		delete $sessionStorage.autanticatet;
		delete $sessionStorage.currentUsername;
	   
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
                    // store username and token in local storage to keep user logged in between page refreshes
                    $localStorage.currentUser = { username: self.email, token: response.token };

                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
                    $sessionStorage.autanticatet=true;
                    $sessionStorage.currentUsername=self.email;
                    // execute callback with true to indicate successful login
                    result=true;
                    $location.path('/');
                } else {
                    // execute callback with false to indicate failed login
                	result =false;
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
	            $http.defaults.headers.common.Authorization = '';
               
            } else {
                self.error = 'error for log out';
                self.loading = false;
            }
        });
    
    	

    
    }

    self.forgotpassword = function(form){
		self.loading = true;
    	var data ={  			
    			email : self.email,
    			telefon : self.password
    	};
		$http({
    		url:'/forgotpassword',
    		method: 'POST', 
    		data: data   
		}).then(function(response) {
	    	if(response.data.success){
	    		 $rootScope.forgotpasswordconfirm=true;
	    		 $location.path('/changePassword');
	    		}
	    	});	
    	}

  });
