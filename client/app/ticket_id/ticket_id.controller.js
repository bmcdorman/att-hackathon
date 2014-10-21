'use strict';

angular.module('attApp')
  .controller('TicketIdCtrl', function ($scope, $http, $stateParams) {
    $http.get('/api/tickets/' + $stateParams.id)
    	.success(function (value) {
    		$scope.ticket = value;
			$http.get('/api/leads/' + value.lead_id)
				.success(function (lead) {
					value.lead = lead;
    				});
			$http.get('/api/quotes/ticket/' + value._id)
				.success(function (quotes) {
					value.quotes = quotes;
				});
			console.log(value);
    	});
    $scope.increment = function() {$scope.ticket.status += 1};
    $scope.decrement = function() {$scope.ticket.status -= 1};
    $scope.remove = function(array, index){
	    array.splice(index, 1);
	}
	$scope.newQuote = function() {
		$scope.ticket.quotes.push({service: "New Quote", given_price: 0})
	}
  });
