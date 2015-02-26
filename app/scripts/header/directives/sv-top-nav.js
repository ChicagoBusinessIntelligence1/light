'use strict';

angular.module('header')
    .directive('svTopNav', function () {
        return {
            templateUrl: 'scripts/header/directives/sv-top-nav.html',
            restrict: 'E'
        };
    });
