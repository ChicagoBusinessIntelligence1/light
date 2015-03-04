(function () {
    'use strict';
    angular.module('auth')
        .directive('svLumxAuth', function ($mdDialog) {
            return {
                templateUrl: 'scripts/auth/directives/sv-lumx-auth.html',
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
