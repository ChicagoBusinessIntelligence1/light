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
                    $scope.flipIt = function() {
                        $famous.find('fa-flipper')[0].flip();
                    };
                },
                link: function ($scope, element, attr) {
                    $scope.win = angular.element($window);
                    $scope.logWin = angular.element(element[0].children[0]);


                    var w = angular.element(element[0].children[0]).width();
                    var h = $scope.win.height();

                    $scope.w = w;
                    $scope.h = h;


                    $scope.win.bind('resize', function () {
                        $scope.$apply(function () {

                            w = $scope.logWin.width();
                            h = $scope.win.height();

                            $scope.w = w;
                            $scope.h = h;

                        });
                    });


                }

            }

        });
})();
