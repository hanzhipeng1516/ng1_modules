app.service("$net", function ($http, $q) {
    var domain = "";
    return {
        /**
         *
         * @returns {string}
         */
        getDomain: function () {
            return domain;
        },
        setDomain: function (main) {
            domain = main;
        },
        /**
         * get方法
         * @param url
         * @param param
         * @returns {Promise}
         */
        get: function (url, param) {
            var deffer = $q.defer();
            $http({
                method: 'GET',
                headers: {'Content-Type': 'charset=UTF-8'},
                url: domain + url,
                params: param
            }).then(function (result) {
                if (result.status == 200)
                    deffer.resolve(result.data);  // 声明执行成功，即http请求数据成功，可以返回数据了
            }).catch(function (result) {
                //错误信息
                deffer.reject(result);   // 声明执行失败，即服务器返回错误
            });
            return deffer.promise;
        },

        /**
         * post方法
         * @param url
         * @param param
         * @returns {Promise}
         */
        post: function (url, param) {
            var deffer = $q.defer();
            $http({
                method: "POST",
                url: domain + url,
                data: param,
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    return str.join("&");
                }
            }).then(function (result) {
                if (result.status == 200)
                    deffer.resolve(result.data);  // 声明执行成功，即http请求数据成功，可以返回数据了
            }).catch(function (result) {
                //错误信息
                deffer.reject(result);   // 声明执行失败，即服务器返回错误
            });
            return deffer.promise;
        }
    }
});