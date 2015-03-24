(function () {
    'use strict';

    angular.module('header')
        .directive('svHeader', function () {
            return {
                templateUrl: 'scripts/header/directives/sv-header.html',
                replace: true,
                link: function ($scope, element, attr) {
                }
            };
        });
})();
