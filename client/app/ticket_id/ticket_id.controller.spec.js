'use strict';

describe('Controller: TicketIdCtrl', function () {

  // load the controller's module
  beforeEach(module('attApp'));

  var TicketIdCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketIdCtrl = $controller('TicketIdCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
