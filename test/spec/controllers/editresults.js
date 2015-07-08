'use strict';

describe('Controller: EditresultsCtrl', function () {

  // load the controller's module
  beforeEach(module('amiwinningApp'));

  var EditresultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditresultsCtrl = $controller('EditresultsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
