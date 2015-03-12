(function () {
    'use strict';

    angular.module('sectioins.test')
        .directive('svIss', function () {
            return {
                templateUrl: 'scripts/sectioins/test/directives/sv-iss.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
