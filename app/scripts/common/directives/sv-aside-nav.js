(function () {
    'use strict';

    angular.module('common')
        .directive('svAsideNav', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-aside-nav.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
