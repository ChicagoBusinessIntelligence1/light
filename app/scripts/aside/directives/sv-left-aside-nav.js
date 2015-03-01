(function () {
    'use strict';

    angular.module('aside')
        .directive('svLeftAsideNav', function () {
            return {
                scope:{},
                link: function ($scope, element, attr) {

                },
                templateUrl: 'scripts/aside/directives/sv-left-aside-nav.html'
            };
        });
})();
