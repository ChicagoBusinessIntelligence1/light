(function () {
    'use strict';

    angular.module('sections.tost')
        .directive('svTostDirectiveTest', function () {
            return {
                templateUrl: 'scripts/sections/tost/directives/sv-tost-directive-test.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
