'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:EditresultsCtrl
 * @description
 * # EditresultsCtrl
 * Controller of the amiwinningApp
 */
angular.module('amiwinningApp')
  .controller('EditresultsCtrl', function ($scope, $routeParams, $interval, $http) {
    $scope.competitionID = $routeParams.competitionID;
	$scope.loading = true;
	
	$scope.loadResults = function() {
		console.log('Loading results for ' + $scope.competitionID);
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
	}
	
	$scope.loadResults();
	
	$scope.save = function() {
		var data = $scope.results;
		for (var i = 0, len = data.length; i < len; i++) {
			if (data[i].changed) {
				console.log('Saving row ' + i);
				$scope.putResult(data[i]);
			}
		}
	}
	
	$scope.putResult = function(data) {
	  var result = {
		'EntryID': data.EntryID,  
		'CompID': data.CompID,
		'FirstName': data.FirstName,
		'LastName': data.LastName,
		'Handicap': data.Handicap,
		'GrossScore': data.GrossScore,
		'NR': data.NR,
		'NettScore': data.NettScore,
		'Rank': data.Rank
	  };
	  $http.put('http://5.179.74.124:86/api/Results/' + data.EntryID,
			JSON.stringify(result),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).success(function (data) {
			console.log("Changes to entry " + result.EntryID + " saved.");
			$scope.loadResults();
	  }).error(function (data) {
		alert("An error has occurred:" + data);
	  });

	};
	
  });
