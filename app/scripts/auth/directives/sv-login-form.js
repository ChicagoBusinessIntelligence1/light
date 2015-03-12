(function () {
    'use strict';

    angular.module('auth')
        .directive('svLoginForm', function ($rootScope, $firebaseAuth) {
            return {
                templateUrl: 'scripts/auth/directives/sv-login-form.html',
                replace: true,
                scope:{},
                link: function ($scope, element, attr) {

                    $scope.signin = function () {
                        console.log($scope.user);

                    };

                    $scope.user = {
                        email: '',
                        pass: ''
                    };

                    $scope.cancel = function () {
                        $rootScope.$broadcast('cancel');
                    }

                }
            };
        });
})();
