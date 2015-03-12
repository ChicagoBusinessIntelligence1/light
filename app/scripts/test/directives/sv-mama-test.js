(function () {
    'use strict';

    angular.module('test')
        .directive('svMamaTest', function () {
            return {
                templateUrl: 'scripts/test/directives/sv-mama-test.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
