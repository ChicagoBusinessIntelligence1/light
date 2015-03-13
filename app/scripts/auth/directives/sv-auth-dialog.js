(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthDialog', function ($mdDialog, AuthServ, $rootScope) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-dialog.html',
                link: function ($scope, element, attr) {

                    $scope.showAdvanced = function (ev) {
                        $mdDialog.show({
                            templateUrl: 'dialog1.tmpl.html',
                            targetEvent: ev
                        }).then(function (answer) {
                            $scope.alert = 'You said the information was "' + answer + '".';
                        }, function () {
                            $scope.alert = 'You cancelled the dialog.';
                        });
                    };

                }
            }
        });
})();
