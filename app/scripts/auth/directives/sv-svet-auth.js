(function () {
    'use strict';

    angular.module('auth')
        .directive('svSvetAuth', function ($mdDialog,LxDialogService,LxNotificationService) {
            return {
                templateUrl: 'scripts/auth/directives/sv-svet-auth.html',
                restrict: 'E',
                link: function ($scope, element, attr) {

                    $scope.opendDialog = function(dialogId)
                    {
                        LxDialogService.open(dialogId);
                    };

                    $scope.closingDialog = function()
                    {
                        LxNotificationService.info('Dialog closed!');
                    };


                }
            };
        });
})();
