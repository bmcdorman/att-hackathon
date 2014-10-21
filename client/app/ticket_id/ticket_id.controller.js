'use strict';

angular.module('attApp')
  .controller('TicketIdCtrl', function ($scope, $http, $stateParams) {
    $http.get('/api/tickets/' + $stateParams.id)
    	.success(function (value) {
    		$scope.ticket = value;
			$http.get('/api/leads/' + value.lead_id)
				.success(function (lead) {
					$scope.lead = lead;
    				});
			$http.get('/api/quotes/ticket/' + value._id)
				.success(function (quotes) {
					$scope.quotes = quotes;
				});
    	});
    $scope.increment = function() {$scope.ticket.status += 1; save();};
    $scope.decrement = function() {$scope.ticket.status -= 1; save();};
    var save = function() {
    	$http.put('/api/leads/' + $scope.lead._id, $scope.lead);
    	$http.put('/api/tickets/' + $scope.ticket._id, $scope.ticket);
    	$scope.quotes.forEach(function (quote) {
    		$http.put('/api/quotes/' + quote._id, quote);
    	})
    }
    $scope.remove = function(array, index){
	    $http.delete('/api/quotes/' + array.splice(index, 1)[0]._id)
	    	.success(function (data) {
	    		console.log(data);	
	    	});
	}
	$scope.newQuote = function() {
		$http.post('/api/quotes/', {ticket_id: $scope.ticket._id, service: "New Quote", given_price: 0}).success(function (data) {
			console.log(data);
			$scope.quotes.push(data)
		});
	}
  });
