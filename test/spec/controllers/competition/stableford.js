'use strict';

describe('Controller: CompetitionStablefordCtrl', function () {

  // load the controller's module
  beforeEach(module('amiwinningApp'));

  var CompetitionStablefordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitionStablefordCtrl = $controller('CompetitionStablefordCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
