'use strict';

describe('Filter: lowHcp', function () {

  // load the filter's module
  beforeEach(module('amiwinningApp'));

  // initialize a new instance of the filter before each test
  var lowHcp;
  beforeEach(inject(function ($filter) {
    lowHcp = $filter('lowHcp');
  }));

  it('should return the input prefixed with "lowHcp filter:"', function () {
    var text = 'angularjs';
    expect(lowHcp(text)).toBe('lowHcp filter: ' + text);
  });

});
