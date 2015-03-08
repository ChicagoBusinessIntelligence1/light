(function () {
    'use strict';

    angular.module('common')
        .factory('NewsGeneratorServ', function ($http) {


            return {
                getPoliticalNews: function () {
                    return meaningOfLife;
                }
            };
        });
})();
