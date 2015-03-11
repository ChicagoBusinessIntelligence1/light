(function () {
    'use strict';

    angular.module('sections.test')
        .directive('svTest', function () {
            return {
                templateUrl: 'scripts/sections/test/directives/sv-test.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
