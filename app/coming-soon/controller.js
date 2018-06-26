(function(angular){
	'use strict';
// 创建正在热映模块
	var module = angular.module('moviecat.coming-soon', ['ngRoute']);
// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/coming-soon', {
	    templateUrl: 'coming-soon/view.html',
	    controller: 'ComingSoonCtrl'
	  });
	}]);

	module.controller('ComingSoonCtrl', ['$scope', function($scope) {
		
	}]);
})(angular)
