/*
* @Author: Jessica Wang
* @Date:   2018-07-01 22:33:41
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-01 23:30:55
*/
(function(angular){
	angular.module('movieCat.directive.auto_focus',[])
	.directive('autoFocus', ['$location', function($location){
		// Runs during compile
		var path = $location.path();// /coming_soon/1
		return {
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			link: function($scope, iElm, iAttrs, controller) {
				// console.log(iElm);
				// console.log(iAttrs);
				var aLink = iElm.children().attr("href");
				// console.log(aLink);//#/in_theaters/1
				var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');// /coming_soon
				// console.log(path+"...."+type);
				if(path.startsWith(type)){
					iElm.addClass('active');
				}
				iElm.on('click',function(){
					iElm.parent().children().removeClass("active")
					iElm.addClass('active');
					// window.iElm = iElm;
				});
			}
		};
	}]);
})(angular)