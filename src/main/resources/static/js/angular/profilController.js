	angular.module('myApp').controller('profilController',
	function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {
	
		var self = this;
		 (function initController() {
			 	delete $rootScope.forgotUserEmail;
	            delete $rootScope.forgotpasswordconfirm;
	            delete $sessionStorage.forgotpasswordconfirm;
	            delete $sessionStorage.forgotUserEmail;
			 	$rootScope.currentUser=  $sessionStorage.currentUser
				$rootScope.autanticatet=  $sessionStorage.autanticatet
				$rootScope.currentUsername= $sessionStorage.currentUsername
				$rootScope.myilans=$sessionStorage.myilans
		    })();
 
		self.getusers = function getusers(){

			return $http({
				url:'getusers',
				method: 'POST' 
			}).then(function(response) {
	        	
	         $rootScope.user=response.data;
	        		
	    			
	    		});
	  }
		self.profilDuzenle = function profilDuzenle(){

			$location.path('/profil/duzenle');
	  }
		
		self.getilceler = function getilceler(id){
			 $rootScope.selectedil=id;
			return $http({
				url:'ilceGetir',
				method: 'POST',
				data:id	
			}).then(function(response) {
	        	
	        		 $rootScope.ilceler=response.data;
	        		
	    			
	    		});
	  }

        self.addRow = function(form){		
	    	var data ={  			
	    			
	    			 il: self.il,
	    			 ilce: self.ilce,
	    			 mahalle : self.mahalle,
	    			ilan_tarihi : self.ilan_tarihi,
	    			calisma_saatleri : self.calisma_saatleri,
	    			calisma_tipi : self.calisma_tipi,
	    			 
	    			baslik : self.baslik,
	    			aciklama : self.aciklama,
	    			ucret : self.ucret,
	    			user:currentUser
	    	};
			$http({
	    		url:'/ilanekle',
	    		method: 'POST', 
	    		data: data   
			}).then(function(response) {
		    	if(response.data.success)
	    		{
		    		$rootScope.addNewSucceses=true;
		    		$route.reload();
	    		}else{
	    			$rootScope.errorpopup=true;
	    			$rootScope.addNewfail=true;
		    		$location.path('/profil/ilanekle');
	    		}
			});

	    };
	    
	    self.sifreDegistir = function(form){
	    	if(self.newpassword==self.passwordConfirm){
	    	var data ={  			
	    			
	    			password: self.oldpassword,
	    			passwordConfirm : self.passwordConfirm,
	    			
	    	};
			$http({
	    		url:'/profil/changepasswithAut',
	    		method: 'POST', 
	    		data: data   
			}).then(function(response) {
		    	if(response.data.success)
	    		{
		    		
		    	$rootScope.changepasswithAutSucceses=true;
		    	$location.path('/profil/duzenle');
	    		}
		    	else{
		    		
	    			$rootScope.changepasswithAutfail=true;
		    		$location.path('/profil/duzenle');
	    		}
			});
	    	}	
	    	else{
	    		alert("şifreler Uyuşmuyor");
	    	}
	    };
	    
	    self.changeContact = function(form){
	    	var data ={  			
	    			
	    			email: self.email,
	    			telefon : self.telefon,
	    			
	    	};
			$http({
	    		url:'/profil/changeContact',
	    		method: 'POST', 
	    		data: data   
			}).then(function(response) {
		    	if(response.data.success)
	    		{   $rootScope.changeContactSucceses=true;
		    		$location.path('/profil/duzenle');
	    		}
		    	else{
	    			$rootScope.changeContactfail=true;
		    		$location.path('/profil/duzenle');
	    		}
			});
	    	
	    	
	    }
	    
	    
    

  });
