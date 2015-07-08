'use strict';

describe('Controller: CompetitionAddresultCtrl', function () {

  // load the controller's module
  beforeEach(module('amiwinningApp'));

  var CompetitionAddresultCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitionAddresultCtrl = $controller('CompetitionAddresultCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
