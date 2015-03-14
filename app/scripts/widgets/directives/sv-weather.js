(function () {
    'use strict';

    angular.module('widgets')
        .directive('svWeather', function (WeatherServ) {
            function processIcon (icon) {
                var finalIcon;
                switch (true) {
                    case icon.indexOf('clear')>-1:
                       finalIcon = 'weather-sunny'
                        break;
                    case icon.indexOf('cloudy')>-1:
                       finalIcon = 'partly-cloudy'
                        break;
                    case icon.indexOf('rain')>-1:
                        finalIcon = 'rain'
                        break;
                    case icon.indexOf('snow')>-1:
                        finalIcon = 'snow'
                        break;
                    case icon.indexOf('mist')>-1:
                        finalIcon = 'mist'
                        break;
                }
                return finalIcon;
            }

            return {
                templateUrl: 'scripts/widgets/directives/sv-weather.html',
                scope: {},
                link: function ($scope, element, attr) {
                    var weatherObj = WeatherServ.getWeatherObj();
                    $scope.weather = weatherObj;

                    weatherObj.$loaded().then(function (w) {
                        $scope.icon = processIcon(w.currently.icon);
                    })

                    weatherObj.$bindTo($scope, 'weather')
                }
            };
        });
})();
