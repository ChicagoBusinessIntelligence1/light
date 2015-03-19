(function () {
    'use strict';

    angular.module('common')
        .directive('svAsideNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-aside-nav.html',
                link: function ($scope, element, attr) {
                }
            };
        });
})();
