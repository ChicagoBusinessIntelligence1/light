(function () {
    'use strict';

    angular.module('common')
        .factory('Newsgenerator', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
