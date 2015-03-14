(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthSelect', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-select.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
