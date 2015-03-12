(function () {
    'use strict';

    angular.module('sections.test')
        .directive('svIzya', function () {
            return {
                templateUrl: 'scripts/sections/test/directives/sv-izya.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
