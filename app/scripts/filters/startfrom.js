'use strict';

/**
 * @ngdoc filter
 * @name amiwinningApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the amiwinningApp.
 */
angular.module('amiwinningApp')
  .filter('startFrom', function () {
    return function(input, start) {
        if (input != null) {
			start = +start; 
			return input.slice(start);
		}
    }
  });
