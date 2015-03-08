(function () {
    'use strict';

    angular.module('common')
        .factory('NewsGeneratorServ', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
