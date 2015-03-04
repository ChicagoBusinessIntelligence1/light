(function () {
    'use strict';

    angular.module('auth')
        .directive('svLoginForm', function ($rootScope) {
            return {
                templateUrl: 'scripts/auth/directives/sv-login-form.html',
                replace: true,
                link: function ($scope, element, attr) {
                    $scope.cancel = function () {
                        $rootScope.$broadcast('cancel');
                    }

                }
            };
        });
})();
