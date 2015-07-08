'use strict';

describe('Service: getCompetitions', function () {

  // load the service's module
  beforeEach(module('amiwinningApp'));

  // instantiate service
  var getCompetitions;
  beforeEach(inject(function (_getCompetitions_) {
    getCompetitions = _getCompetitions_;
  }));

  it('should do something', function () {
    expect(!!getCompetitions).toBe(true);
  });

});
