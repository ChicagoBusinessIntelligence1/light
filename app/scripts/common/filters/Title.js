(function () {
    'use strict';

    angular.module('common')
        .filter('Title', function () {
            return function (input,length) {
                if (length === 0) {
                    return '';
                }
                if (input.length < length) {
                return input;

                }
                return input.substring(0,length)+'...';
            };
        });
})();
