(function () {
    'use strict';

    angular.module('common')
        .directive('svPdfIssue', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-pdf-issue.html',
                scope:{},
                link: function ($scope, element, attr) {
                }
            };
        });
})();
