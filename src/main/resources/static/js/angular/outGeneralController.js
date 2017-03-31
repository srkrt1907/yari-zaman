	angular.module('myApp').controller('outGeneralController',
	function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {
	
	var self = this;

    (function initController() {
    	delete $rootScope.forgotpasswordconfirmFail;
    	$rootScope.forgotpasswordconfirm=  $sessionStorage.forgotpasswordconfirm
		$rootScope.forgotUserEmail=  $sessionStorage.forgotUserEmail
		 $rootScope.selectedil=null;
   	 
    })();
	
    
    	

    self.forgotpassword = function(form){
		self.loading = true;
    	var data ={  			
    			email : self.email,
    			telefon : self.telefon
    	};
		$http({
    		url:'/forgotpassword',
    		method: 'POST', 
    		data: data   
		}).then(function(response) {
	    	if(response.data.success){
	    		$sessionStorage.forgotpasswordconfirm=true;
	    		 $sessionStorage.forgotUserEmail=self.email;
	    		 $location.path('/changePassword');
	    		}
	    	else{
	    		$rootScope.forgotpasswordconfirmFail=true;
	    	}
	    	});	
    	}
    self.changePwdOutLogin = function(form){
		self.loading = true;
    	var data ={  			
    			email : $rootScope.forgotUserEmail,
    			password : self.password,
    			passwordConfirm: self.passwordConfirm
    	};
		$http({
    		url:'/changePwdOutLogin',
    		method: 'POST', 
    		data: data   
		}).then(function(response) {
	    	if(response.data.success){
	    		$sessionStorage.forgotpasswordconfirm=false;
	    		 $sessionStorage.forgotUserEmail='';
	    		 $rootScope.pwdChangeSuccess=true;
	    		 $route.reload();
	    		}
	    	else{
	    		$rootScope.pwdChangeFail=true;
	    	}
	    	});	
    	}

    self.saveContactUs = function(form){
		self.loading = true;
    	var data ={  			
    			name: self.name,
    			surname: self.surname,
    			email: self.email,
    			telefon: self.telefon,
    			mesaj: self.mesaj
    	};
		$http({
    		url:'/saveContactUs',
    		method: 'POST', 
    		data: data   
		}).then(function(response) {
	    	if(response.data.success){
	    		 $rootScope.saveContactUsSucceses=true;
	    		 
	    		}
	    	else{
	    		$rootScope.saveContactUsFail=true;
	    	}
	    	});	
    	}

	});
