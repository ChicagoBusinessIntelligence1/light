(function () {
    'use strict';

    angular.module('common')
        .directive('svSideNews', function () {
            return {
                templateUrl: 'scripts/common/news/directives/sv-side-news.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
