(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthDropdown', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-dropdown.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
