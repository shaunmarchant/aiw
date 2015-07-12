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
			$scope.loadResults();
	  }).error(function (data) {
		alert("An error has occurred:" + data);
	  });

	};
	
	$scope.removeEntry = function(data, idx) {
		console.log("Deleting " + data);
		$http.delete('http://5.179.74.124:86/api/Results/' + data).
			success(function (data, status) {
				$scope.results.splice(idx,1);
				alert(data.EntryID + " deleted!");
			}).
			error(function(data) {
				alert("An error has occurred: " + data.EntryID);
			});
		$scope.loadResults();
	};
		
		
	// Add Result Code
	$scope.submitbtn = "Add Result";	
	
	$scope.members = [
      {name: 'Marchant, Shaun', handicap: '15.2', category: '3'},
      {name: 'Williams, Dave', handicap: '20.2', category: '3'},
      {name: 'Beedy, Sarah', handicap: '5.5', category: '2'}
    ];

	$scope.selectedLastname = function(selected) {
		$scope.Handicap = selected.description;
		$scope.newName = selected.title.split(',');
		$scope.FirstName = $scope.newName[1].trim();
		$scope.LastName = $scope.newName[0].trim();
	};
	
	$scope.addResult = function() {
	  $scope.submitbtn = "Saving...";
	  console.log($scope.LastName);
	  var result = {
		'CompID': $scope.competitionID,
		'FirstName': $scope.FirstName,
		'LastName': $scope.LastName,
		'Handicap': $scope.Handicap,
		'GrossScore': $scope.GrossScore,
		'NR': $scope.NR,
		'NettScore': $scope.NettScore,
		'Rank': $scope.Rank
	  };
	  console.log(result);
	  $http.post('http://5.179.74.124:86/api/Results',
			JSON.stringify(result),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).success(function (data) {
		$scope.submitbtn = "Saved!";
		alert('Added successfully!');
		$scope.results.push(data);
		$scope.addScore.$setUntouched()
	  }).error(function (data) {
	    $scope.submitbtn = "Add Result";
		$scope.message = "An error has occurred:" + data;
	  });

	};
	
  });
