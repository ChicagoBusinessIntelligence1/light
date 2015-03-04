(function () {
    'use strict';

    angular.module('common')
        .directive('svArticleThumb', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-article-thumb.html',
                replace: true,
                scope: {
                    state: '=',
                    id: '@',
                    img: '@',
                    title: '@'
                },
                link: function ($scope, element, attr) {

                }
            };
        });
})();
