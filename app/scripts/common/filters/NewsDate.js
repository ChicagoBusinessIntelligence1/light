(function () {
    'use strict';

    angular.module('common')
        .filter('NewsDate', function () {
            return function (input) {
                var start = input.indexOf(',')+1;
                var shortDate = input.substr(start,12);
                return shortDate;
            };
        });
})();
