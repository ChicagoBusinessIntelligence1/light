(function () {
    'use strict';

    angular.module('widgets')
        .filter('FarToCelcius', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
