(function () {
    'use strict';

    angular.module('widgets')
        .filter('FarToCelcius', function () {
            return function (f) {
                if (!_.isNumber(f)) {
                    return;
                }
                return ((f-32)*5/9).toFixed(1);
            };
        });
})();
