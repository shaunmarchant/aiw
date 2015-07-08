'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:CompetitionnewCtrl
 * @description
 * # CompetitionnewCtrl
 * Controller of the amiwinningApp
 */
angular.module('amiwinningApp')
  .controller('CompetitionnewCtrl', function ($scope, $http) {
    $scope.message = "";
	$scope.submitbtn = "Add Competition";
	$scope.addCompetition = function() {
	  $scope.submitbtn = "Saving...";
	  var competition = {
		CompName: $scope.newCompetition.CompName,
		CompType: $scope.newCompetition.CompType,
		CompCSS: $scope.newCompetition.CompCSS,
		EventDate: $scope.newCompetition.EventDate,
		CompCat: $scope.newCompetition.CompCat
	  };
	  $http.post('http://5.179.74.124:86/api/competitions', this.newCompetition).success(function (data) {
		$scope.submitbtn = "Saved!";
		alert('Added successfully!');
		$scope.competitions.push(data);
	  }).error(function (data) {
	    $scope.submitbtn = "Add Competition";
		$scope.message = "An error has occurred:" + data;
	  });
	  
	};
	
  });