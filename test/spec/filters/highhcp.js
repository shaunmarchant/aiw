'use strict';

describe('Filter: highHcp', function () {

  // load the filter's module
  beforeEach(module('amiwinningApp'));

  // initialize a new instance of the filter before each test
  var highHcp;
  beforeEach(inject(function ($filter) {
    highHcp = $filter('highHcp');
  }));

  it('should return the input prefixed with "highHcp filter:"', function () {
    var text = 'angularjs';
    expect(highHcp(text)).toBe('highHcp filter: ' + text);
  });

});
