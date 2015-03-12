(function () {
    'use strict';

    angular.module('aside')
        .directive('svNewsSectionsNav', function ($rootScope) {
            return {
                link: function ($scope, element, attr) {
                },
                templateUrl: 'scripts/aside/directives/sv-news-sections-nav.html'
            };
        });
})();
