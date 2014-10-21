'use strict';

angular.module('attApp')
  .controller('LeadCtrl', function ($scope, $http, $location, Auth) {
    $scope.newTicket = function (path) {
    	$http.post('/api/leads', $scope.lead)
    		.success(function (lead) {
    			$http.post('/api/tickets/', {user_id: Auth.getCurrentUser()._id})
					.success(function (ticket) {
						$location.path('ticket/' + ticket._id);
					});
			});
    }

    $scope.newLead = function (path) {
    	$http.post('/api/leads', $scope.lead)
    		.success(function (lead) {
				$location.path('lead');
    		});
    }

  });
