'use strict';

describe('Controller: CompetitionnewCtrl', function () {

  // load the controller's module
  beforeEach(module('amiwinningApp'));

  var CompetitionnewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitionnewCtrl = $controller('CompetitionnewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
