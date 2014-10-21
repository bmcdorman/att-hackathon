'use strict';

angular.module('attApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
  	Auth.getCurrentUser().$promise.then(function(user) {
  		$http.get('/api/tickets/user/' + user._id)
	    	.success(function (data, status, headers, config) {
	    		console.log(data);
	    	});
  	});
    
  });
