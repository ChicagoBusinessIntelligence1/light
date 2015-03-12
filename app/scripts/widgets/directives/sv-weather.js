(function () {
    'use strict';

    angular.module('widgets')
        .directive('svWeather', function (WeatherServ) {
            return {
                templateUrl: 'scripts/widgets/directives/sv-weather.html',
                scope:{},
                link: function ($scope, element, attr) {
                    WeatherServ.getForeCast(1);

                }
            };
        });
})();
