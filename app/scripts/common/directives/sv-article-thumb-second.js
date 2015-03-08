(function () {
    'use strict';

    angular.module('common')
        .directive('svArticleThumbSecond', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-article-thumb-second.html',
                scope: {
                    title: '@',
                    img: '@'
                },
                link: function ($scope, element, attr) {
                    console.log($scope.title);
                }
            };
        });
})();
