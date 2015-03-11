(function () {
    'use strict';

    angular.module('common')
        .directive('svComment', function () {
            return {
                templateUrl: 'scripts/common/article/directives/sv-comment.html',
                replace: true,
                scope: {},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
