(function () {
    'use strict';

    angular.module('common')
        .factory('NewsCategoriesServ', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
