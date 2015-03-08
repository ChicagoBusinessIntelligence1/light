(function () {
    'use strict';

    angular.module('common')
        .directive('svNewsToolbar', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-news-toolbar.html',
                scope: {},
                link: function ($scope, element, attr) {
                }
            };
        });
})();
