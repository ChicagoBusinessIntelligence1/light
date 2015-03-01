(function () {
    'use strict';
    angular.module('auth')
        .directive('svLumxAuth', function ($window) {
            return {
                templateUrl: 'scripts/auth/directives/sv-lumx-auth.html',
                link: function ($scope, element, attr) {
                    $scope.w = angular.element($window);

                    $scope.loginW = angular.element(element[0].children[0]).width();
                    $scope.loginH = $window.innerHeight;


                    $scope.w.bind('resize',function () {
                        $scope.$apply(function () {

                        $scope.loginW = angular.element(element[0].children[0]).width();
                        $scope.loginH = $window.innerHeight;

                        });
                    });

                }
            };
        });
})();
