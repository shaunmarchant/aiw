'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:CompetitionStablefordCtrl
 * @description
 * # CompetitionStablefordCtrl
 * Controller of the amiwinningApp
 */
angular.module('amiwinningApp')
  .controller('CompetitionStablefordCtrl', function ($scope, $routeParams, $interval, $http) {
    $scope.competitionID = $routeParams.competitionID;
	$scope.currentPage = 0;
	$scope.pageSize = 10;
	$scope.loading = true;
	
	var url = 'http://5.179.74.124:86/api/Results/CompID/';
	$http.get(url+$scope.competitionID).
	 success(function(data, status, headers, config) {
		$scope.loading = false;
		$scope.results = data;
	 }).
	error(function(data, status, headers, config) {
		$scope.loading = false;
		console.log('error');
	});
					 
	$scope.numberOfPages=function() {
		if ($scope.results > 0) {
			return Math.ceil(($scope.results.length/$scope.pageSize)-1);
		}
		return '1';
	}
	
	$scope.callAtInterval = function(){
		if($scope.currentPage < $scope.numberOfPages()-1) {
			$scope.currentPage = $scope.currentPage+1;
		}
		else
		{
			$scope.currentPage = 0;
		}
	}
	$interval( function() {$scope.callAtInterval(); }, 15000);

  });
