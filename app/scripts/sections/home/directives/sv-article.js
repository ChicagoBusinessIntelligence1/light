'use strict';

angular.module('sections.home')
    .directive('svArticle', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/sections/home/directives/sv-article.html',
            controller: function ($scope) {
            }
        };
    });
