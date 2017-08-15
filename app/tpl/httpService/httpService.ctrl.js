app.controller('HttpServiceCtrl', function ($scope, $net) {
    $net.setDomain("http://www.baidu.com");
    $scope.doGet = function () {
        $net.get('/dev/activity/activityList', null).then(function (data) {
            console.log(data);
        })
    };
    $scope.doPost = function () {
        $net.post('/dev/activity/activityList', null).then(function (data) {
            console.log(data);
        })
    }
});