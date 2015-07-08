'use strict';

/**
 * @ngdoc function
 * @name amiwinningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the amiwinningApp
 */
angular.module('amiwinningApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
