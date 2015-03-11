(function () {
    'use strict';

    angular.module('tost')
        .directive('svMamaTest', function () {
            return {
                templateUrl: 'scripts/tost/directives/sv-mama-test.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
