'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'moviecat.in_theaters',
  'moviecat.coming-soon',
  'moviecat.top250'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters'});
}]);
