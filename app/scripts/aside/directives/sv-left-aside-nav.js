(function () {
    'use strict';

    angular.module('aside')
        .directive('svLeftAsideNav', function ($rootScope) {
            return {
                scope:{},
                link: function ($scope, element, attr) {
                    $scope.closeSideBar = function () {
                        $rootScope.$broadcast('close:leftSideBar');

                    };

                },
                templateUrl: 'scripts/aside/directives/sv-left-aside-nav.html'
            };
        });
})();
