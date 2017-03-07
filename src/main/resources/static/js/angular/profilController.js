	angular.module('myApp').controller('profilController',
	function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices, $localStorage) {
	
		var self = this;
		 (function initController() {
			 	$rootScope.currentUser=  $sessionStorage.currentUser
				$rootScope.autanticatet=  $sessionStorage.autanticatet
				$rootScope.currentUsername= $sessionStorage.currentUsername
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
		
//        self.prfoilKaydet = function(form){
//        	self.loading = true;
//    		
//    		 var data ={ 
//    			name: self.name,
//    	    	surname: self.surname,
//    	    	telefon: self.telefon,
//    	    	passwordConfirm: self.passwordConfirm,
//    		 	email : self.email,
//    	    	password : self.password
//    	    	};
//    		$http({
//        		url:'/updateUser',
//        		method: 'POST', 
//        		data: data   
//    		}).then(function(response) {
//    	    	if(response.data.success){
//                        $location.path('/login');
//                    } else {
//                        FlashService.Error(response.message);
//                        self.dataLoading = false;
//                    }
//                });
//        }
//  
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
	    			user:{
	    				email:$localStorage.currentUser.username
	    			}
	    	};
			$http({
	    		url:'/ilanekle',
	    		method: 'POST', 
	    		data: data   
			}).then(function(response) {
		    	if(response.data.success)
	    		{
		    		$rootScope.addNewSucceses="İşleminiz başarılı bir şekilde gerçekleşmiştir.";
		    		$location.path('/profil/ilanekle');
	    		}else{
	    			$rootScope.addNewfail="İşleminiz Yapılırken Hata Oluştu. Lütfen daha sonra tekrar deneyin.";
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
		    	$rootScope.changepasswithAutSucceses="İşleminiz başarılı bir şekilde gerçekleşmiştir.";
		    	$location.path('/profil/duzenle');
	    		}
		    	else{
	    			$rootScope.changepasswithAutfail="İşleminiz Yapılırken Hata Oluştu. Lütfen daha sonra tekrar deneyin.";
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
	    		{   $rootScope.changeContactSucceses="İşleminiz başarılı bir şekilde gerçekleşmiştir.";
		    		$location.path('/profil/duzenle');
	    		}
		    	else{
	    			$rootScope.changeContactfail="İşleminiz Yapılırken Hata Oluştu. Lütfen daha sonra tekrar deneyin.";
		    		$location.path('/profil/duzenle');
	    		}
			});
	    	
	    	
	    }
	    
	    
    

  });
