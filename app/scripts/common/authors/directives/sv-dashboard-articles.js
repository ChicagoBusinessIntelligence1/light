(function () {
    'use strict';

    angular.module('common.authors')
        .directive('svDashboardArticles', function () {
            return {
                templateUrl: 'scripts/common/authors/directives/sv-dashboard-articles.html',
                scope: {},
                link: function ($scope, element, attr) {
                    $("#datepicker").datepicker();
                }
            };
        });
})();
