(function () {
    'use strict';

    angular.module('common')
        .directive('svMainContent', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-main-content.html',
                link: function ($scope, element, attr) {
                }
            };
        });
})();
