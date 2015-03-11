(function () {
    'use strict';

    angular.module('common')
        .directive('svSearchNews', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-search-news.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
