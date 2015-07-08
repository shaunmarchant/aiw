'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:CompetitionCtrl
 * @description
 * # CompetitionCtrl
 * Controller of the amiwinningApp
 */

 angular.module('amiwinningApp')
  .controller('CompetitionCtrl', function ($scope, $http) {
	$scope.loading = true;	
	var url = 'http://5.179.74.124:86/api/Competitions';
	$http.get(url).
	 success(function(data, status, headers, config) {
		$scope.loading = false;
		$scope.competitions = data;
	 }).
	error(function(data, status, headers, config) {
		$scope.loading = false;
		console.log('error');
	});

  });
 
 
 
 
 /**
 angular.module('amiwinningApp')
  .controller('CompetitionCtrl', ['getCompetitions', function(getCompetitions) {
	  var self = this;
	  self.list = function() {
		  $scope.competitions = getCompetitions.list();
		  return getCompetitions.list();
	  };
	  	  
	  self.add = function() {

		  };
	  }
  ]);
*/