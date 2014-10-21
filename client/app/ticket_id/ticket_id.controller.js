'use strict';

angular.module('attApp')
  .controller('TicketIdCtrl', function ($scope, $http, $stateParams, $location) {
    $http.get('/api/tickets/' + $stateParams.id)
    	.success(function (value) {
    		$scope.ticket = value;
    		if (value.lead_id) {
    			$http.get('/api/leads/' + value.lead_id)
    				.success( function(lead) {
    					$scope.lead = lead;
    				});
    		}
			$http.get('/api/quotes/ticket/' + value._id)
				.success(function (quotes) {
					$scope.quotes = quotes;
				});
    	});

   	$http.get('/api/leads/')
    	.success(function (value) {
    		$scope.leads = value;
    	});

    $scope.increment = function() {$scope.ticket.status += 1; save();};
    $scope.decrement = function() {$scope.ticket.status -= 1; save();};
    var save = function() {
    	$http.put('/api/leads/' + $scope.lead._id, $scope.lead);
    	$http.put('/api/tickets/' + $scope.ticket._id, $scope.ticket);
    	$scope.quotes.forEach(function (quote) {
    		$http.put('/api/quotes/' + quote._id, quote)
    			.success( function(date) {
    				console.log(date);
    			});
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
			$scope.quotes.push(data)
		});
	}

	$scope.setLead = function(item) {
		$scope.lead = item;
		$scope.ticket.lead_id = item._id;
	}

	$scope.pendingApproval = function () {
		var sum = $scope.quotes.map(function(v) {
			return v.approved;
		}).reduce(function(a, b) {
			return a + b;
		});
		return !sum;
	}

	$scope.addDate = function (quote) {
		quote["followup" + quote.followupIndex] = quote.date;
		quote.date = undefined;
		quote.followupIndex += 1;
		save();
	}

	$scope.accept = function (quote) {
		quote.acceptanceDate = quote.date;
		quote.date = undefined;
		quote.accepted = true;
		save();
	}

	$scope.finalize = function (quote) {
		quote.finalizeDate = quote.date;
		quote.date = undefined;
		quote.finalized = true;
		$scope.ticket.open = false;
		save();
	}
  });
