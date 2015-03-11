(function () {
    'use strict';

    angular.module('widgets')
        .directive('svTest', function () {
            return {
                templateUrl: 'scripts/widgets/directives/sv-test.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
