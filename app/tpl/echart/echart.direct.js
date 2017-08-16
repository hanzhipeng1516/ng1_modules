app.directive('eChart', function () {
    return {
        scope: {
            id: "@",
            legend: "=",
            item: "=",
            data: "=",
            type: "="
        },
        restrict: 'E',
        template: '<div style="width: 100%;color:#fff;min-height: 200px;"></div>',
        replace: true,
        link: function ($scope, element, attrs, controller) {
            console.log($scope);
            var option = {
                // 提示框，鼠标悬浮交互时的信息提示
                tooltip: {
                    show: false,
                    trigger: 'item'
                },
                legend: {
                    data: $scope.legend,
                    textStyle: {
                        color: '#798FA6',
                        fontSize: 14
                    }
                },
                textStyle: {
                    color: "#fff"
                },
                // 横轴坐标轴
                xAxis: [{
                    nameLocation: 'right',
                    type: 'category',
                    boundaryGap: true,
                    splitLine: {show: false},
                    splitArea: {
                        show: false,
                    },
                    data: $scope.item,
                    axisLabel: {show: true, textStyle: {color: '#798FA6', fontSize: 14}},
                    axisLine: {
                        show: false
                    }
                }],
                grid: {
                    left: '1%',
                    right: '0',
                    bottom: '1%',
                    containLabel: true,
                    borderWidth: '0px'
                },
                // 纵轴坐标轴
                yAxis: [{
                    splitLine: {show: true, lineStyle: {color: ["#2C334C"]}},
                    splitArea: {
                        show: false,
                    },
                    type: 'value',
                    axisLabel: {show: true, textStyle: {color: '#333333', fontSize: 14}},
                    axisLine: {
                        show: false
                    }
                }],
                dataZoom: [
                    {
                        type: 'inside'
                    }
                ],
                // 数据内容数组
                series: function () {
                    var serie = [];
                    for (var i = 0; i < $scope.legend.length; i++) {
                        var item = {
                            name: $scope.legend[i],
                            type: $scope.type,
                            data: $scope.data[i],
                            barCategoryGap: '50%',
                            itemStyle: {normal: {lineStyle: {barBorderRadius: 5}}}
                        };
                        serie.push(item);
                    }
                    return serie;
                }()
            };
            var myChart = echarts.init(document.getElementById($scope.id), 'macarons');
            myChart.setOption(option);
        }
    }
});