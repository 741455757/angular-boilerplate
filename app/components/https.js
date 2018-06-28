/*
* @Author: Jessica Wang
* @Date:   2018-06-27 22:56:47
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-06-28 08:07:23
*/
'use strict';

(function(angular){
	// 由于默认angular提供的异步请求对象不支持自定义回调函数名
	// angular随机分配的回调函数名称不被豆瓣支持
	var http = angular.module('moviecat.services.http', []);
	http.service('HttpService', ['$document', function($document){
		// console.log($document);
		this.jsonp = function(url,callback){
			 // url: http://api.douban.com/vsdf -> <script> ->http自动执行
			  // 1.处理url中的回调参数
			  // 2.创建一个script标签
			  // 3.挂在回调函数
			  // 4.将script标签放页面
		}
	}])
})(angular);