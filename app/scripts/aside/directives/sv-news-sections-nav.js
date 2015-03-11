(function () {
    'use strict';

    angular.module('aside')
        .directive('svNewsSectionsNav', function ($rootScope) {
            return {
                scope: {},
                link: function ($scope, element, attr) {
                    $scope.closeSideBar = function () {
                        $rootScope.$broadcast('close:leftSideBar');
                    };
                },
                templateUrl: 'scripts/aside/directives/sv-news-sections-nav.html'
            };
        });
})();
