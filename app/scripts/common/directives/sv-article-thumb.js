(function () {
    'use strict';

    angular.module('common')
        .directive('svArticleThumb', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-article-thumb.html',
                replace: true,
                scope: {
                    homeSmall: '=',
                    state: '=',
                    id: '@',
                    img: '@',
                    title: '@',
                    body: '@'
                },
                link: function ($scope, element, attr) {
                    var width = element.css('width');

                }
            };
        });
})();
