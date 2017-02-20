angular.module('myApp').controller('ilanController',

		function($rootScope, $http, $location, $route ,$sessionStorage,NgTableParams,mainServices) {		
		var self = this;
		
		self.originalData = {};
		self.orginalData = {};
		mainServices.getilan().then(function(dataResponse) {
			self.originalData = angular.copy(dataResponse.data);
			self.tableParams = new NgTableParams({}, { dataset: self.originalData});
			
			
	    });
		
		self.del = function del(user) {
	    	
	    	$http({
	    		url:'/ilanSil',
	    		method: 'POST', 
	    		data: user
	    	}).then(function(response) {
	        	if(response.data.success)
	    		{
	        		var index = self.originalData.indexOf(user);
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
		
		self.addRow = function(form){		
	    	var data ={  			
	    			ilan_dec : self.ilan_dec
	    	};
			$http({
	    		url:'/ilanekle',
	    		method: 'POST', 
	    		data: data   
			}).then(function(response) {
		    	if(response.data.success)
	    		{
		    		self.originalData.splice(0, 0, data);
		    		self.tableParams.reload();
	    		}
			});

	    };

		
		
		});