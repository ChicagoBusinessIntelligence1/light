(function () {
    'use strict';

    angular.module('sections.test')
        .directive('svIss', function () {
            return {
                templateUrl: 'scripts/sections/test/directives/sv-iss.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
