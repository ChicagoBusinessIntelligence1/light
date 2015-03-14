(function () {
    'use strict';

    angular.module('widgets')
        .factory('FServ', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
