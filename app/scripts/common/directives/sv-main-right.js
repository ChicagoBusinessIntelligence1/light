(function () {
    'use strict';

    angular.module('common')
        .directive('svMainRight', function ($mdBottomSheet) {
            return {
                templateUrl: 'scripts/common/directives/sv-main-right.html',
                replace:true,
                link: function ($scope, element, attr) {

                    $scope.openBottomSheet = function () {
                        $mdBottomSheet.show({
                            templateUrl: 'scripts/footer/templates/social-media-links.html'
                        });
                    };

                }
            };
        });
})();
