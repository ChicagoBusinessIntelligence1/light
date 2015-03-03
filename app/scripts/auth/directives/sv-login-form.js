(function () {
    'use strict';

    angular.module('auth')
        .directive('svLoginForm', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-login-form.html',
                replace:true,
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
