'use strict';

describe('Directive: playerLookup', function () {

  // load the directive's module
  beforeEach(module('amiwinningApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<player-lookup></player-lookup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playerLookup directive');
  }));
});
