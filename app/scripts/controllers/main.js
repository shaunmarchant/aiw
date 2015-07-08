'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the amiwinningApp
 */
angular.module('amiwinningApp')
  .controller('MainCtrl', function ($scope) {
    $scope.competitions = [{ID: '1', Name: 'Saturday Stableford', Date: '23/05/2015', Type: 'Stableford'},
						   {ID: '2', Name: 'Sunday Stableford', Date: '24/05/2015', Type: 'Medal'},
						   {ID: '3', Name: 'Captains Day', Date: '31/05/2015', Type: 'Team'}
						  ];
  });
