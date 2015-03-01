(function () {
    'use strict';

    angular.module('auth')
        .directive('svSvetAuth', function ($mdDialog, LxDialogService) {
            return {
                templateUrl: 'scripts/auth/directives/sv-svet-auth.html',
                restrict: 'E',
                link: function ($scope, element, attr) {
                    $scope.openLogin = function (loginId) {
                        LxDialogService.open(loginId);
                    };
                    $scope.closeLogin = function (loginId) {
                        LxDialogService.close(loginId);
                    };
                }
            };
        });
})();
