(function () {
    'use strict';

    angular.module('common')
        .directive('svContent', function ($mdBottomSheet) {
            return {
                templateUrl: 'scripts/common/directives/sv-content.html',
                replace: true,

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
