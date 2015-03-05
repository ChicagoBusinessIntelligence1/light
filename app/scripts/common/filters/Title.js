(function () {
    'use strict';

    angular.module('common')
        .filter('Title', function () {
            return function (input,length) {

                return input.substring(0,length)+'...';
            };
        });
})();
