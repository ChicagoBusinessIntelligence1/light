(function () {
    'use strict';

    angular.module('common.article')
        .directive('svArticleTags', function () {
            return {
                replace:true,
                templateUrl: 'scripts/common/article/directives/sv-article-tags.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
