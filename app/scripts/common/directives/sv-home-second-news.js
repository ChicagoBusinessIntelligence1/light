(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeSecondNews', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-home-second-news.html',
                scope:{},
                link: function ($scope, element, attr) {
                    $scope.secondTiles = [];

                    for (var i = 0; i < 10; i++) {
                        $scope.secondTiles.push(i);
                    }
                }
            };
        });
})();
