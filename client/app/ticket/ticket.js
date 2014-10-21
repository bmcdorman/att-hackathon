'use strict';

angular.module('attApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ticket', {
        url: '/ticket',
        templateUrl: 'app/ticket/ticket.html',
        controller: 'TicketCtrl'
      });
  });