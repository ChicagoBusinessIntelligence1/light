(function () {
    'use strict';

    angular.module('common.news')
        .directive('svNewsTitle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/news/directives/sv-news-title.html',
                scope: {
                    title: '@'
                }
            };
        });
})();
