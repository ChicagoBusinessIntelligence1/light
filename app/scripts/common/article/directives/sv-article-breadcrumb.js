(function () {
    'use strict';

    angular.module('common.article')
        .directive('svArticleBreadcrumb', function () {
            return {
                replace:true,
                templateUrl: 'scripts/common/article/directives/sv-article-breadcrumb.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
