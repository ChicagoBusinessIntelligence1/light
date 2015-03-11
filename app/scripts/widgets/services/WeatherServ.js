(function () {
    'use strict';

    angular.module('widgets')
        .factory('WeatherServ', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
