(function () {
    'use strict';

    angular.module('common')
        .directive('svGridResponsive', function ($mdMedia,$filter) {
            return {
                templateUrl: 'scripts/common/directives/sv-grid-responsive.html',
                replace: true,
                link: function ($scope, element, attr) {

                    $scope.tile1 = {
                        bg: 'red',
                        colspan: 3

                    }
                    $scope.tile2 = {
                        bg: 'blue',
                        colspan: 1
                    }




                    $scope.$watch(function () {
                        return $mdMedia('(min-width: 1234px)');
                    }, function (isLarge) {
                        if (isLarge) {
                            $scope.tiles = [];
                            $scope.tiles.push($scope.tile2);
                            $scope.tiles.push($scope.tile1);
                        } else{
                            $scope.tiles = [];
                            $scope.tiles.push($scope.tile1);
                            $scope.tiles.push($scope.tile2);

                        }
                    });





                }
            };
        });
})();
