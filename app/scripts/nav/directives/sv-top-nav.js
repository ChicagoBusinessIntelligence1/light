'use strict';

angular.module('nav')
    .directive('svTopNav', function () {
        return {
            templateUrl: 'scripts/nav/directives/sv-top-nav.html',
            restrict: 'E'
        };
    });
