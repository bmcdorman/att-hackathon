'use strict';

angular.module('attApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lead', {
        url: '/lead',
        templateUrl: 'app/lead/lead.html',
        controller: 'LeadCtrl'
      });
  });