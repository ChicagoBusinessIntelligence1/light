(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function ($mdDialog, $rootScope, AuthServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                restrict: 'E',
                link: function ($scope, element, attr) {






                    $scope.$on('cancel', function () {
                        $mdDialog.cancel();
                    });

                    $rootScope.$watch('user', function (newVal, oldVal) {
                        $scope.user = newVal;
                    })

                    $scope.loginSvetUser = function (provider) {

                        AuthServ.authProvider(provider).then(function (user) {
                            $rootScope.user = user;

                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    };

                    $scope.logout = function () {
                        $rootScope.user = null;
                        AuthServ.logout();

                    };
                }
            };
        });
})();
