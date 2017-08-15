/**
 * 懒加载
 */
app.constant('Modules_Config', [])
    .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: []
        });
    }])
;