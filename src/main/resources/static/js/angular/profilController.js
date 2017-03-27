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
				$rootScope.ilan=  $sessionStorage.ilan
				getiller();
			 	 getCalismaTip();
		    })();
		 getCalismaTip
		 function getCalismaTip(){
				return $http({
					url:'getCalismaTip',
					method: 'GET' 
				}).then(function(response) {
		        	
					self.getCalismaTipleri = response.data;
		        		
		    			
		    		});
		  }
		 function getiller(){
			return $http({
				url:'ilListele',
				method: 'GET' 
			}).then(function(response) {
	        	
				self.iller = response.data;
	        		
	    			
	    		});
	  }
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
		
		self.getilceler = function getilceler(il){
			 $rootScope.selectedil=il;
			 var id=JSON.parse(self.il).il_id;
			 
			return $http({
				url:'ilceGetir?id='+id,
				method: 'GET' 
			}).then(function(response) {
	        	
	        		 $rootScope.ilceler=response.data;
	        		
	    			
	    		});
	  }

        self.addRow = function(form){		
	    	var data ={  			
	    			
	    			 il: JSON.parse(self.il),
	    			 ilce: JSON.parse(self.ilce),
	    			calisma_saatleri : self.calisma_saatleri,
	    			calisma_tipi : JSON.parse(self.calisma_tipi),
	    			 
	    			baslik : self.baslik,
	    			aciklama : self.aciklama,
	    			ucret : self.ucret,
	    			user: $rootScope.currentUser
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
		
		self.duzenleGit = function duzenleGit(ilan) {
	    	
			$sessionStorage.ilan=ilan;
			$location.path('/profil/ilanDuzenleDatay');

	    }
		
		self.duzenle = function duzenle(form) {
			var data ={  			
					ilan_id:self.id,
	    			 il: JSON.parse(self.il),
	    			 ilce: JSON.parse(self.ilce),
	    			calisma_saatleri : self.calisma_saatleri,
	    			calisma_tipi : JSON.parse(self.calisma_tipi),
	    			 
	    			baslik : self.baslik,
	    			aciklama : self.aciklama,
	    			ucret : self.ucret,
	    			user: $rootScope.currentUser
	    	};
	    	$http({
	    		url:'/profil/ilanDuzenle',
	    		method: 'POST', 
	    		data: data
	    	}).then(function(response) {
	        	if(response.data.success)
	    		{
	        		$rootScope.addNewSucceses=true;
		    		$route.reload();
	    		}
	        	else
	        		alert("hata");
	    	});

	    }
		
	    
    

  });
