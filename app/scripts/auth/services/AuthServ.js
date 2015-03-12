(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthServ', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
