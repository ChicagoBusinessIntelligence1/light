(function () {
    'use strict';

    angular.module('sections.test')
        .directive('svIzyaOberman', function () {
            return {
                templateUrl: 'scripts/sections/test/directives/sv-izya-oberman.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
