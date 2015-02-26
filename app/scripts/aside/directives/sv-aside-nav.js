'use strict';

angular.module('aside')
    .directive('svAsideNav', function () {
        return {
            templateUrl: 'scripts/aside/directives/sv-aside-nav.html',
            restrict: 'E',
            controller: function ($scope) {
                $scope.sub1Shown = false;
                $scope.showSub1 = function () {
                    $scope.sub1Shown = !$scope.sub1Shown;
                };

                $scope.sub2Shown = false;
                $scope.showSub2 = function () {
                    $scope.sub2Shown = !$scope.sub2Shown;
                };

                $scope.sub3Shown = false;
                $scope.showSub3 = function () {
                    $scope.sub3Shown = !$scope.sub3Shown;
                };
            }
        };
    });
