'use strict';

angular.module('attApp')
  .controller('MainCtrl', function ($scope, $http, Auth, $location) {
  	Auth.getCurrentUser().$promise.then(function(user) {
  		$http.get('/api/tickets/user/' + user._id)
	    	.success(function (tickets) {
	    		$scope.tickets = tickets
	    		angular.forEach($scope.tickets, function(value) {
	    			if (value.lead_id) {
		    			$http.get('/api/leads/' + value.lead_id)
		    				.success(function (lead) {
		    					value.lead = lead;
	 	    				});
    				}
	    			$http.get('/api/quotes/ticket/' + value._id)
	    				.success(function (quotes) {
	    					value.quotes = quotes;
	    				});
	    		});
	    	});

	    $scope.createNew = function () {
	    	$http.post('/api/tickets/', {user_id: user._id})
				.success(function (ticket) {
					$scope.go('ticket/' + ticket._id);
				});
			};
  	});

  	$scope.go = function(path) {
	    	$location.path(path);
    }
    
  });
