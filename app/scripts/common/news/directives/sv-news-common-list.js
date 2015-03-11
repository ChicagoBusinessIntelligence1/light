(function () {
    'use strict';

    angular.module('common.news')
        .directive('svNewsCommonList', function () {
            return {
                templateUrl: 'scripts/common/news/directives/sv-news-common-list.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
