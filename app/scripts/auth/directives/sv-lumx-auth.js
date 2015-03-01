(function () {
    'use strict';

    angular.module('auth')
        .directive('svLumxAuth', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-lumx-auth.html'
            };
        });
})();
