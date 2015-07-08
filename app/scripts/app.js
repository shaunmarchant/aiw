'use strict';

/**
 * @ngdoc overview
 * @name amiwinningApp
 * @description
 * # amiwinningApp
 *
 * Main module of the application.
 */
angular
  .module('amiwinningApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'angucomplete-alt'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/competition.html',
        controller: 'CompetitionCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/competition', {
        templateUrl: 'views/competition.html',
        controller: 'CompetitionCtrl'
      })
      .when('/competition/new', {
        templateUrl: 'views/competitionnew.html',
        controller: 'CompetitionnewCtrl'
      })
      .when('/competition/:competitionID', {
        templateUrl: 'views/competitiondetail.html',
        controller: 'CompetitiondetailCtrl'
      })
      .when('/competition/:competitionID/edit', {
        templateUrl: 'views/competitionedit.html',
        controller: 'CompetitioneditCtrl'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl'
      })
      .when('/competition/Stableford/:competitionID', {
        templateUrl: 'views/competition/stableford.html',
        controller: 'CompetitionStablefordCtrl'
      })
      .when('/competition/Medal/:competitionID', {
        templateUrl: 'views/competition/medal.html',
        controller: 'CompetitionMedalCtrl'
      })
      .when('/addResult/:competitionID', {
        templateUrl: 'views/addresult.html',
        controller: 'AddresultCtrl'
      })
      .when('/editResults/:competitionID', {
        templateUrl: 'views/editresults.html',
        controller: 'EditresultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
