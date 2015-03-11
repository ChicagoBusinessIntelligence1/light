(function () {
    'use strict';

    angular.module('common')
        .directive('svOneArticle', function () {
            return {
                templateUrl: 'scripts/common/article/directives/sv-one-article.html',
                replace: true,
                scope: {
                    img: '@',
                    title: '@',
                    body: '@',
                    author: '@',
                    date: '@'
                },
                link: function ($scope, element, attr) {

                }
            };
        });
})();
