'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:CompetitiondetailCtrl
 * @description
 * # CompetitiondetailCtrl
 * Controller of the amiwinningApp
 */
angular.module('amiwinningApp')
  .controller('CompetitiondetailCtrl', function ($scope, $routeParams) {
    $scope.competitionID = $routeParams.competitionID;
	
	$scope.results = [{ID: '1', Competition: '1', Name: 'Marchant, Shaun', Handicap: '14.9', R1Score: '38', NR: 'false'},
					  {ID: '2', Competition: '1',  Name: 'Griffin, Stewie',  Handicap: '18', R1Score: '34', NR: 'false'},
					  {ID: '1', Competition: '1', Name: 'Simmons, Oberon', Handicap: '14.9', R1Score: '38', NR: 'false'},
					  {ID: '2', Competition: '2',  Name: 'Backman, Buddie',  Handicap: '18', R1Score: '34', NR: 'false'},
					  {ID: '1', Competition: '3', Name: 'Mcmahon, Dave', Handicap: '14.9', R1Score: '38', NR: 'false'},
					  {ID: '2', Competition: '2',  Name: 'Hoyte, Roy',  Handicap: '18', R1Score: '34', NR: 'true'},
					  {ID: '1', Competition: '2', Name: 'Genaidy, Steve', Handicap: '14.9', R1Score: '38', NR: 'false'},
					  {ID: '2', Competition: '3',  Name: 'Kern, Martin',  Handicap: '18', R1Score: '34', NR: 'false'},
					  {ID: '3', Competition: '1',  Name: 'Simpson, Homer',  Handicap: '8.1', R1Score: '40', NR: 'false'}
				     ];
  });
