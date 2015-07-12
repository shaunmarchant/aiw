'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:AddresultCtrl
 * @description
 * # AddresultCtrl
 * Controller of the amiwinningApp
 */
angular.module('amiwinningApp')
  .controller('AddresultCtrl', function ($scope, $routeParams, $http) {
	$scope.competitionID = $routeParams.competitionID;
    $scope.message = "Adding result for competition " + $scope.competitionID;
	$scope.submitbtn = "Add Result";
	
	$scope.members = [
      {name: 'Marchant, Shaun', handicap: '15.2', category: '3'},
      {name: 'Williams, Dave', handicap: '20.2', category: '3'},
      {name: 'Beedy, Sarah', handicap: '5.5', category: '2'}
    ];
	
	$scope.members2 = [
      {FirstName: 'Shaun', LastName: 'Marchant', handicap: '15.2', category: '3'},
      {FirstName: 'Zeberdy', LastName: 'Williams', handicap: '20.2', category: '3'},
      {FirstName: 'Sarah', LastName: 'Beedy', handicap: '5.5', category: '2'}
    ];

	$scope.selectedLastname = function(selected) {
		$scope.Handicap = selected.description;
		$scope.newName = selected.title.split(',');
		$scope.FirstName = $scope.newName[1].trim();
		$scope.LastName = $scope.newName[0].trim();
	};
	
	$scope.igotcalled = function() {
		console.log("hello");
	}
	
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
		//$scope.results.push(data);
	  }).error(function (data) {
	    $scope.submitbtn = "Add Result";
		$scope.message = "An error has occurred:" + data;
	  });

	};
 });
