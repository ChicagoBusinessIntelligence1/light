(function () {
    'use strict';
    angular.module('auth')
        .directive('svLumxAuth', function ($window,$famous) {
            function getDimensions(w) {
                var large = 760;
                var tablet = 500;
                var cell = 500;
                var dimensions;
                switch (true) {
                    case w >= large:
                        dimensions = [4, 1];
                        break;
                    case w >= tablet && w < large:
                        dimensions = [2, 2];
                        break;
                    case  w < tablet:
                        dimensions = [1, 4];
                        break;
                    default:
                        dimensions = [4, 1];
                }
                return dimensions;
            }

            return {
                templateUrl: 'scripts/auth/directives/sv-lumx-auth.html',
                controller: function ($scope) {
                    $scope.grids = [{bgColor: "orange"}, {bgColor: "red"}, {bgColor: "green"}, {bgColor: "yellow"}];

                },
                link: function ($scope, element, attr) {
                    $scope.win = angular.element($window);

                    var w = angular.element(element[0].children[0]).width();
                    var h = $scope.win.height();
                    $scope.w = w;
                    $scope.h = h;
                    $scope.dimensions = getDimensions(w);
                    $scope.myGridLayoutOptions = {
                        dimensions: $scope.dimensions // specifies number of columns and rows
                    };
                    console.log($scope.myGridLayoutOptions.dimensions);

                    $scope.win.bind('resize', function () {
                        $scope.$apply(function () {

                            w = angular.element(element[0].children[0]).width();
                            h = $window.innerHeight;

                            $scope.w = w;
                            $scope.h = h;

                            $scope.dimensions = getDimensions(w);
                            $scope.myGridLayoutOptions = {
                                dimensions: $scope.dimensions
                            }
                            console.log($scope.myGridLayoutOptions.dimensions);
                        });
                    });


                }

            }

        });
})();
