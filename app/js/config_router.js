/**
 * 路由配置
 * --按需加载
 */
app.run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
).config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/app/index');
            $stateProvider
                .state('app', {
                    url: '/app'
                })
                .state('app.index', {
                    url: '/index',
                    templateUrl: 'tpl/index/index.html',
                    controller: "ModuleListCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'tpl/index/index.css',
                                'tpl/index/index.ctrl.js'
                            ]);
                        }]
                    }
                })
                .state('app.httpService', {
                    url: '/httpService',
                    templateUrl: 'tpl/httpService/httpService.html',
                    controller: 'HttpServiceCtrl',
                    prefetchTemplate: false,
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'tpl/httpService/httpService.css',
                                'tpl/httpService/netService.js',
                                'tpl/httpService/httpService.ctrl.js'
                            ]);
                        }]
                    }
                })
                .state('app.webUploader', {
                    url: '/webUploader',
                    templateUrl: 'tpl/webUploader/webUploader.html',
                    controller: 'WebUploaderCtrl',
                    prefetchTemplate: false,
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'tpl/webUploader/webUploader.css',
                                'tpl/webUploader/webUploader.direct.js',
                                'tpl/webUploader/webUploader.ctrl.js'
                            ]);
                        }]
                    }
                })
            // .state('tap.oven', {
            //     url: '/oven',
            //     templateUrl: 'tpl/tablet/oven/oven.html',
            //     prefetchTemplate: false,
            //     controller: "tap_OvenCtrl",
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //             return $ocLazyLoad.load([
            //                 'tpl/tablet/oven/oven.ctrl.js',
            //                 'tpl/tablet/oven/oven.css',
            //             ]);
            //         }]
            //     }
            // })
        }]);