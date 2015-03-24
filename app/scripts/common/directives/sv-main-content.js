(function () {
    'use strict';

    angular.module('common')
        .directive('svMainContent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-main-content.html',
                link: function ($scope, element, attr) {

                }
            };
        });
})();
