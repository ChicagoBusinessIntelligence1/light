(function () {
    'use strict';

    angular.module('aside')
        .directive('svNavLink', function ($rootScope) {
            return {
                templateUrl: 'scripts/aside/directives/sv-nav-link.html',
                replace:true,
                scope:{
                    url:'@',
                    title:'@',
                    icon:'@'
                },
                link: function ($scope, element, attr) {

                    $scope.closeSideBar = function () {
                        $rootScope.$broadcast('close:leftSideBar');
                    };
                }
            };
        });
})();
