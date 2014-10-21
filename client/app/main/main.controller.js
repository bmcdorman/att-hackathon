'use strict';

angular.module('attApp')
  .controller('MainCtrl', function ($scope, Auth) {
    console.log(Auth.getCurrentUser());
  });
