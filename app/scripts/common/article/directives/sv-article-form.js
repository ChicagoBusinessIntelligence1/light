(function () {
    'use strict';

    angular.module('common.article')
        .directive('svArticleForm', function () {
            return {
                templateUrl: 'scripts/common/article/directives/sv-article-form.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
