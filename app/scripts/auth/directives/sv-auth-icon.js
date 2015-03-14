(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthIcon', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-icon.html',
                scope: {},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
