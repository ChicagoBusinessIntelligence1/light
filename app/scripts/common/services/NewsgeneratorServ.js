(function () {
    'use strict';

    angular.module('common')
        .factory('NewsGenerator', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
