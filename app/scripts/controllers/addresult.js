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
      {name: 'Marchant, Shaun', eHandicap: '15.2', category: '3'},
      {name: 'Zeberdy, Sharon', eHandicap: '8.6', category: '2'},
      {name: 'Beedy, Sarah', eHandicap: '1.2', category: '1'}
    ];
	
	$scope.addResult = function() {
	  $scope.submitbtn = "Saving...";
	  var result = {
		'CompID': $scope.competitionID,
		'FirstName': $scope.newResult.FirstName,
		'LastName': $scope.newResult.LastName,
		'Handicap': $scope.newResult.Handicap,
		'GrossScore': $scope.newResult.GrossScore,
		'NR': $scope.newResult.NR,
		'NettScore': $scope.newResult.NettScore,
		'Rank': $scope.newResult.Rank
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
