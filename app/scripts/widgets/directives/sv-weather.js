(function () {
    'use strict';

    angular.module('widgets')
        .directive('svWeather', function (WeatherServ) {

            return {
                templateUrl: 'scripts/widgets/directives/sv-weather.html',
                scope: {},
                link: function ($scope, element, attr) {
                    var weatherObj = WeatherServ.getWeatherObj();
                    $scope.weather = weatherObj;


                    weatherObj.$bindTo($scope, 'weather')
                }
            };
        });
})();
