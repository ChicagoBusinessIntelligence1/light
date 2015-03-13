(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function ($mdDialog, $rootScope, AuthServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                restrict: 'E',
                link: function ($scope, element, attr) {
                    $scope.showAdvanced = function (ev) {
                        $mdDialog.show({
                            templateUrl: 'scripts/auth/directives/sv-auth-dialog.html',
                            targetEvent: ev
                        }).then(function (answer) {
                            $scope.alert = 'You said the information was "' + answer + '".';
                        }, function () {
                            $scope.alert = 'You cancelled the dialog.';
                        });
                    };

                    $scope.$on('cancel', function () {
                        $mdDialog.cancel();
                    });

                    $rootScope.$watch('user', function (newVal, oldVal) {
                        $scope.user = newVal;
                    })

                    $scope.logout = function () {
                        AuthServ.logout();

                    };
                }
            };
        });
})();
