(function () {
    'use strict';
    angular.module('auth')
        .directive('svSvetAuth', function ($mdDialog) {
            return {
                templateUrl: 'scripts/auth/directives/sv-svet-auth.html',
                restrict: 'E',
                link: function ($scope, element, attr) {
                    $scope.showAdvanced = function (ev) {
                        $mdDialog.show({
                            templateUrl: 'scripts/auth/directives/sv-lumx-auth.html',
                            targetEvent: ev
                        }).then(function (answer) {
                            $scope.alert = 'You said the information was "' + answer + '".';
                            }, function () {
                                $scope.alert = 'You cancelled the dialog.';
                            });
                    };
                }
            };
        });
})();
