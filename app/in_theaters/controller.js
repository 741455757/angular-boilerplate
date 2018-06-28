(function(angular){
	'use strict';
// 创建正在热映模块
	var module = angular.module('moviecat.in_theaters', [
		'ngRoute',
		'moviecat.services.http'
		]);
// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'inTheatersCtrl'
	  });
	}]);

	module.controller('inTheatersCtrl', [
		'$scope', 
		'HttpService',
		function($scope,HttpService) {
		// 控制器分为2步 1.设计暴露数据 2.设计暴露行为
		 $scope.subjects = [];
		 $scope.message = '';
		 HttpService.jsonp('htt',function(){
		 	
		 })
	}]);
})(angular)
//  var doubanApiAddress = 'https://api.douban.com/v2/movie/in_theaters';
		// // 测试$http服务
		// // 在Angular中使用JSONP的方式做跨域请求，
		// // 就必须给当前地址加上一个参数callbaclk=JSON_CALLBACKE
		// $http.jsonp(doubanApiAddress+'?callbaclk=JSON_CALLBACK').then(function (data){
		// 	if(data.status == 200){
		// 		$scope.subjects = data.data.subjects;
		// 	}else{
		// 		$scope.message='获取数据失败,错误信息：'+res.status;
		// 	}
			
		// },function (err){
		// 	console.log(err);
		// 	$scope.message='获取数据失败,错误信息：'+err.status;
		// });