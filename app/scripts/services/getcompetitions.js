'use strict';

/**
 * @ngdoc service
 * @name amiwinningApp.getCompetitions
 * @description
 * # getCompetitions
 * Service in the amiwinningApp.
 */
angular.module('amiwinningApp')
  .service('getCompetitions', function ($http) {
    var url = 'http://5.179.74.124:86/api/Competitions';
	var comps = [];
	$http.get(url).
	 success(function(data, status, headers, config) {
	 console.log(data);
		comps = data;
		console.log('Got competitions');
		return comps;
	 }).
	error(function(data, status, headers, config) {
		console.log('error');
	});
  });
