(function () {
    'use strict';

    angular.module('common.article')
        .directive('svArticleThumbMain', function () {
            return {
                templateUrl: 'scripts/common/article/directives/sv-article-thumb-main.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
