'use strict';

describe('Controller: CompetitionMedalCtrl', function () {

  // load the controller's module
  beforeEach(module('amiwinningApp'));

  var CompetitionMedalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitionMedalCtrl = $controller('CompetitionMedalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
