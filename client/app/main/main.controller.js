'use strict';

angular.module('attApp')
  .controller('MainCtrl', function ($scope, $http, Auth, $location) {
  	Auth.getCurrentUser().$promise.then(function(user) {
  		$http.get('/api/tickets/user/' + user._id)
	    	.success(function (tickets) {
	    		$scope.tickets = tickets
	    		angular.forEach($scope.tickets, function(value) {
	    			$http.get('/api/leads/' + value.lead_id)
	    				.success(function (lead) {
	    					value.lead = lead;
 	    				});
	    			$http.get('/api/quotes/ticket/' + value._id)
	    				.success(function (quotes) {
	    					value.quotes = quotes;
	    				});
	    		});
	    	});

	    $scope.go = function(path) {
	    	$location.path(path);
	    }
  	});
    
  });
