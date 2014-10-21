'use strict';

angular.module('attApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ticket_id', {
        url: '/ticket/:id',
        templateUrl: 'app/ticket_id/ticket_id.html',
        controller: 'TicketIdCtrl'
      });
  });