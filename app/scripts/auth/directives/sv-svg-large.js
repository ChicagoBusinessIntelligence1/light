(function () {
    'use strict';

    angular.module('auth')
        .directive('svSvgLarge', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-svg-large.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
