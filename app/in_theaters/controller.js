(function(angular){
	'use strict';
	var data =  [
        {
            "rating": {
                "max": 10,
                "average": 6.9,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "动作",
                "科幻",
                "冒险"
            ],
            "title": "侏罗纪世界2",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1017967/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408711300.32.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408711300.32.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408711300.32.jpg"
                    },
                    "name": "克里斯·帕拉特",
                    "id": "1017967"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1027772/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p315.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p315.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p315.jpg"
                    },
                    "name": "布莱丝·达拉斯·霍华德",
                    "id": "1027772"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1350981/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1523860646.23.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1523860646.23.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1523860646.23.jpg"
                    },
                    "name": "贾斯蒂斯·史密斯",
                    "id": "1350981"
                }
            ],
            "collect_count": 119850,
            "original_title": "Jurassic World: Fallen Kingdom",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1305510/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372318484.25.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372318484.25.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372318484.25.jpg"
                    },
                    "name": "胡安·安东尼奥·巴亚纳",
                    "id": "1305510"
                }
            ],
            "year": "2018",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522069454.jpg",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522069454.jpg",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522069454.jpg"
            },
            "alt": "https://movie.douban.com/subject/26416062/",
            "id": "26416062"
        },
        {
            "rating": {
                "max": 10,
                "average": 0,
                "stars": "00",
                "min": 0
            },
            "genres": [
                "剧情"
            ],
            "title": "明天有多远",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1317071/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38418.jpg",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38418.jpg",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38418.jpg"
                    },
                    "name": "池华琼",
                    "id": "1317071"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1319028/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45417.jpg",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45417.jpg",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45417.jpg"
                    },
                    "name": "王宇",
                    "id": "1319028"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1365453/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508385558.93.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508385558.93.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508385558.93.jpg"
                    },
                    "name": "何军",
                    "id": "1365453"
                }
            ],
            "collect_count": 6,
            "original_title": "明天有多远",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1382856/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508385498.43.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508385498.43.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508385498.43.jpg"
                    },
                    "name": "王劲松",
                    "id": "1382856"
                }
            ],
            "year": "2018",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524606602.jpg",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524606602.jpg",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524606602.jpg"
            },
            "alt": "https://movie.douban.com/subject/27175526/",
            "id": "27175526"
        },
        {
            "rating": {
                "max": 10,
                "average": 8.2,
                "stars": "45",
                "min": 0
            },
            "genres": [
                "喜剧",
                "动作",
                "动画"
            ],
            "title": "超人总动员2",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1002721/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21297.jpg",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21297.jpg",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21297.jpg"
                    },
                    "name": "格雷格·T·尼尔森",
                    "id": "1002721"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1031838/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48614.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48614.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48614.jpg"
                    },
                    "name": "霍利·亨特",
                    "id": "1031838"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1186797/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1529654136.33.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1529654136.33.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1529654136.33.jpg"
                    },
                    "name": "莎拉·沃威尔",
                    "id": "1186797"
                }
            ],
            "collect_count": 35800,
            "original_title": "Incredibles 2",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1027204/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1529655910.45.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1529655910.45.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1529655910.45.jpg"
                    },
                    "name": "布拉德·伯德",
                    "id": "1027204"
                }
            ],
            "year": "2018",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522880251.jpg",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522880251.jpg",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522880251.jpg"
            },
            "alt": "https://movie.douban.com/subject/25849049/",
            "id": "25849049"
        }
	   ];
// 创建正在热映模块
	var module = angular.module('moviecat.in_theaters', ['ngRoute']);
// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'inTheatersCtrl'
	  });
	}]);

	module.controller('inTheatersCtrl', ['$scope', function($scope) {
		// 控制器分为2步 1.设计暴露数据 2.设计暴露行为
		$scope.subjects = data;
	}]);
})(angular)
