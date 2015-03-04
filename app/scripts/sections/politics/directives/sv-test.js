(function () {
    'use strict';

    angular.module('sections.politics')
        .directive('svTest', function () {
            return {
                templateUrl: 'scripts/sections/politics/directives/sv-test.html',
                replace:true,
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
