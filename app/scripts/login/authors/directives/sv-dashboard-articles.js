(function () {
    'use strict';

    angular.module('login.authors')
        .directive('svDashboardArticles', function () {
            return {
                templateUrl: 'scripts/login/authors/directives/sv-dashboard-articles.html',
                scope: {},
                link: function ($scope, element, attr) {
                }
            };
        });
})();
