'use strict';

/**
 * @ngdoc filter
 * @name amiwinningApp.filter:lowHcp
 * @function
 * @description
 * # lowHcp
 * Filter in the amiwinningApp.
 */
angular.module('amiwinningApp')
  .filter('lowHcp', function () {
    return function (items) {
	  if (items != null) {
	  var filtered = [];
	  for (var i = 0; i < items.length; i++) {
		var item = items[i];
		if (item.Handicap < 12.5 ) {
			filtered.push(item);
		}
	  }
	}
      return filtered;
    };
  });