(function () {
    'use strict';

    angular.module('common')
        .directive('svWeather', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-weather.html',
                scope: {},
                link: function ($scope, element, attr) {
                    console.log('test');
                }
            };
        });
})();
