'use strict';

describe('Service: playerLookup', function () {

  // load the service's module
  beforeEach(module('amiwinningApp'));

  // instantiate service
  var playerLookup;
  beforeEach(inject(function (_playerLookup_) {
    playerLookup = _playerLookup_;
  }));

  it('should do something', function () {
    expect(!!playerLookup).toBe(true);
  });

});
