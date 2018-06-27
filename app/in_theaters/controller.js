(function(angular){
	'use strict';
// 创建正在热映模块
	var module = angular.module('moviecat.in_theaters', ['ngRoute']);
// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'inTheatersCtrl'
	  });
	}]);

	module.controller('inTheatersCtrl', [
		'$scope', 
		'$http',
		function($scope,$http) {
		// 控制器分为2步 1.设计暴露数据 2.设计暴露行为
		 $scope.subjects = [];
		 $scope.message = '';
		// 测试$http服务
		$http.get('./data.json').then(function (data){
			if(data.status == 200){
				$scope.subjects = data.data.subjects;
			}else{
				$scope.message='获取数据失败,错误信息：'+res.status;
			}
			
		},function (err){
			console.log(err);
			$scope.message='获取数据失败,错误信息：'+err.status;
		});
	}]);
})(angular)
