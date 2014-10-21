'use strict';

describe('Controller: LeadCtrl', function () {

  // load the controller's module
  beforeEach(module('attApp'));

  var LeadCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeadCtrl = $controller('LeadCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
